import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Tag from "../../components/Atoms/A_Tag";
import Userblock from "../../components/Molecules/UserBlock/M_UserBlock";
import Button from "../../components/Atoms/Button/A_Button";
import { useNavigate } from "react-router-dom";
import Info from "../../components/Atoms/A_Info";
import CollectionBlock from "../../components/Molecules/M_CollectionBlock";
import Counter from "../../components/Atoms/Counter/A_Counter";
import ReportsNavbar from "../../components/Molecules/M_ReportsNavbar";
import ComplaintBlock from "../../components/Organisms/O_ComplaintBlock";
import Link from "../../components/Icons/Q_Link";
import Alert from "../../components/Molecules/M_Alert";
import Popup from "../../components/Molecules/M_Popup";
import ButtonEllipse from "../../components/Atoms/Button/A_ButtonEllipse";
import CopyLink from "../../components/Icons/Q_CopyLink";
import AlertNotification from "../../components/Molecules/M_AlertNotification";

const MainWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 104px;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 1016px;
`;

const Stuchkisblock = styled.div`
  width: 1016px;
  background-color: var(--main-white);
  border-radius: 16px;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  justify-content: space-between;
`;
const Infoblock = styled.div`
  display: flex;
  flex-direction: column;
  width: 496px;
`;
const Top = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const References = styled.div`
  display: flex;
  flex-direction: column;
  width: 488px;
  align-items: end;
  gap: 8px;
`;
const Infoitems = styled.div`
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Tagsrow = styled.div``;
const CollectionRow = styled.div`
  width: 100%;
`;

const CountersRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const ReportsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CrumbsPart = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 12px;
  box-sizing: border-box;
`;
const CrumbsBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`;
const Userrow = styled.div`
width: 100%;`;

const ComplainContainer = styled.div``;

const Itemreport = () => {
  const location = useLocation();
  const reportData = location.state?.reportData;
  const [tagselecteds, setTagselecteds] = useState([]);
  const [collections, setCollections] = useState([]);
  const [users, setUsers] = useState([]);
  const [allReports, setAllReports] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);

  const navigate = useNavigate();

  const handleReportClick = (reportData) => {
    navigate("/item", { state: { reportData } });
  };
  const popup = () => {
    setModalVisible(true);
  };

  const popup2 = () => {
    setModalVisible2(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/tagselecteds")
      .then(({ data }) => {
        console.log(data);
        setTagselecteds(data.data);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("false"));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/collections")
      .then(({ data }) => {
        console.log(data);
        setCollections(data.data);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("false"));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/users")
      .then(({ data }) => {
        console.log(data);
        setUsers(data.data);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("false"));
  }, []);

  const listTags = () => {
    const filteredTagselecteds = tagselecteds.filter(
      (tagselected) => tagselected.item.id === reportData.item.id
    );

    return filteredTagselecteds.map((tagselected) => {
      return <Tag key={tagselected.id} tagname={tagselected.tag.title} />;
    });
  };

  const listCollections = () => {
    const filteredCollections = collections.filter(
      (collection) => collection.id === reportData.item.collection_id
    );

    return filteredCollections.map((collection) => {
      return (
        <CollectionBlock
          key={collection.id}
          title={collection.title}
          coverurl={`http://localhost:3000` + `${collection.cover.url}`}
        />
      );
    });
  };

  const listUsers = () => {
    const filteredUsers = users.filter(
      (user) => user.id === reportData.item.user_id
    );

    return filteredUsers.map((user) => {
      return (
        <Userblock
          key={user.id}
          username={user.username}
          avatarurl={`http://localhost:3000` + `${user.avatar.url}`}
        ></Userblock>
      );
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/reportits")
      .then(({ data }) => {
        console.log(data);
        setAllReports(data.data);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("false"));
  }, []);

  const listReports = () => {
    const filteredListReports = allReports.filter(
      (allReport) => allReport.item.id === reportData.item.id
    );

    return filteredListReports.map((allReport) => {
      const onClickSingle = (event) => {
        axios
          .patch(`http://localhost:3000/api/v1/reportits/${allReport.id}`, {
            reportit: {
              status: "accepted",
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => console.error(error))
          .finally();
        axios
          .patch(`http://localhost:3000/api/v1/items/${allReport.item.id}`, {
            item: {
              blocked: "true",
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => console.error(error))
          .finally(setModalVisible(false), setModalVisible3(true));
      };

      return (
        <ComplainContainer key={allReport.id}>
          {isModalVisible && allReport.status === "new" && (
            <Alert
              onClick={onClickSingle}
              text="Штучкис будет заблокирован по причине"
              reason={allReport.reason}
            ></Alert>
          )}
          <ComplaintBlock
            key={allReport.id}
            number={allReport.number}
            username={allReport.user.username}
            avatarurl={`http://localhost:3000${allReport.user.avatar.url}`}
            object={allReport.object}
            reason={allReport.reason}
            status={allReport.status}
            type="reportits"
            onClickFirst={popup}
          />
        </ComplainContainer>
      );
    });
  };

  const filteredListReports = allReports.filter(
    (allReport) => allReport.item.id === reportData.item.id
  );

  const onClick = () => {
    filteredListReports.forEach((reportit) => {
      axios
        .patch(`http://localhost:3000/api/v1/reportits/${reportit.id}`, {
          reportit: {
            status: "accepted",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally();

      axios
        .patch(`http://localhost:3000/api/v1/items/${reportit.item.id}`, {
          item: {
            blocked: "true",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.error(error))
        .finally(setModalVisible2(false), setModalVisible3(true));
    });
  };
  const onClickClose = () => {
    setModalVisible3(false);
  };

  return (
    <MainWrapper>
      <Content>
        <CrumbsPart>
          <CrumbsBlock>
            <h1 style={{ margin: 0 }}>Все жалобы</h1>
            {reportData.status === "new" && (
              <h2 style={{ margin: 0 }}>К рассмотрению</h2>
            )}
            {reportData.status === "accepted" && (
              <h2 style={{ margin: 0 }}>Принятые</h2>
            )}
            {reportData.status === "declared" && (
              <h2 style={{ margin: 0 }}>Отклонённые</h2>
            )}
            <p style={{ margin: 0 }}>Жалобы на штучкис #{reportData.item.id}</p>
          </CrumbsBlock>

          <ButtonEllipse type="small" icon={<CopyLink />}></ButtonEllipse>
        </CrumbsPart>

        {isModalVisible3 && (
          <AlertNotification
            text="Штучкис заблокирован"
            onClickClose={onClickClose}
          ></AlertNotification>
        )}

        <Stuchkisblock style={{ marginBottom: "48px" }}>
          <Infoblock>
            <Top>
              <img
                style={{
                  width: 112,
                  height: 112,
                  objectFit: "fit",
                  borderRadius: 12,
                  marginRight: "12px",
                }}
                src={`http://localhost:3000${reportData.item.image.url}`}
                alt="placeholder-image"
              />
              <Infoitems>
                <Info title={"Дата находки"} text={reportData.item.date}></Info>
                <Info
                  title={"Место находки"}
                  text={reportData.item.geotag}
                ></Info>
              </Infoitems>
            </Top>

            <Tagsrow>{listTags()}</Tagsrow>
          </Infoblock>
          <References>
            <Button
              type="quatenary"
              title="Штучкис"
              style={{ marginBottom: "8px" }}
              icon={<Link />}
              onClick={() => handleReportClick(reportData)}
            ></Button>
            <Userrow>{listUsers()}</Userrow>
            <CollectionRow>{listCollections()}</CollectionRow>
            <CountersRow>
              <Counter text="лайка" number="24" />
              <Counter text="сохранений" number="6" />
            </CountersRow>
          </References>
        </Stuchkisblock>

        {isModalVisible2 && (
          <Popup
            type="reportits"
            allReports={allReports}
            reportData={reportData}
            onClick={onClick}
            text="Штучкис будет заблокирован по причине"
            reason={reportData.reason}
          ></Popup>
        )}
        <ReportsNavbar
          amount="2"
          type="reportits"
          onClickFirst={popup2}
          status={reportData.status}
        ></ReportsNavbar>
        <ReportsRow>{listReports()}</ReportsRow>
      </Content>
    </MainWrapper>
  );
};
export default Itemreport;
