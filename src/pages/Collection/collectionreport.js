import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Userblock from "../../components/Molecules/UserBlock/M_UserBlock";
import Button from "../../components/Atoms/Button/A_Button";
import { useNavigate } from "react-router-dom";
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

const Collectionblock = styled.div`
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
  box-sizing: border-box;
  padding: 4px;
  gap: 16px;
`;

const References = styled.div`
  display: flex;
  flex-direction: column;
  width: 488px;
  align-items: end;
  gap: 8px;
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
const ComplainContainer = styled.div``;
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

const Collectionreport = () => {
  const location = useLocation();
  const reportData = location.state?.reportData;
  const [allReports, setAllReports] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);

  const navigate = useNavigate();

  const handleReportClick = (reportData) => {
    navigate("/collection", { state: { reportData } });
  };

  const popup = () => {
    setModalVisible(true);
  };

  const popup2 = () => {
    setModalVisible2(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/reportcols")
      .then(({ data }) => {
        console.log(data);
        setAllReports(data.data);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("false"));
  }, []);

  const listReports = () => {
    const filteredListReports = allReports.filter(
      (allReport) => allReport.collection.id === reportData.collection.id
    );

    return filteredListReports.map((allReport) => {
      const onClickSingle = (event) => {
        axios
          .patch(`http://localhost:3000/api/v1/reportcols/${allReport.id}`, {
            reportcol: {
              status: "accepted",
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => console.error(error))
          .finally();
        axios
          .patch(
            `http://localhost:3000/api/v1/collections/${allReport.collection.id}`,
            {
              collection: {
                blocked: "true",
              },
            }
          )
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
              text="Коллекция будет заблокирована по причине"
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
            type="reportcols"
            onClickFirst={popup}
          />
        </ComplainContainer>
      );
    });
  };

  const filteredListReports = allReports.filter(
    (allReport) => allReport.collection.id === reportData.collection.id
  );

  const onClick = () => {
    filteredListReports.forEach((reportcol) => {
      axios
        .patch(`http://localhost:3000/api/v1/reportcols/${reportcol.id}`, {
          reportcol: {
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
        .patch(
          `http://localhost:3000/api/v1/collections/${reportcol.collection.id}`,
          {
            collection: {
              blocked: "true",
            },
          }
        )
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
            <p style={{ margin: 0 }}>
              Жалобы на коллекцию #{reportData.collection.id}
            </p>
          </CrumbsBlock>

          <ButtonEllipse type="small" icon={<CopyLink />}></ButtonEllipse>
        </CrumbsPart>
        {isModalVisible3 && (
          <AlertNotification
            text="Коллекция заблокирована"
            onClickClose={onClickClose}
          ></AlertNotification>
        )}
        <Collectionblock style={{ marginBottom: "48px" }}>
          <Infoblock>
            <h1>{reportData.collection.title}</h1>
            <p style={{ margin: 0 }}>{reportData.collection.description}</p>
          </Infoblock>
          <References>
            <Button
              type="quatenary"
              title="Коллекшн"
              style={{ marginBottom: "8px" }}
              icon={<Link />}
              onClick={() => handleReportClick(reportData)}
            ></Button>
            <Userblock
              username={reportData.user.username}
              avatarurl={`http://localhost:3000${reportData.user.avatar.url}`}
            ></Userblock>
            <CountersRow>
              <Counter text="штучкисов" number="9" />
              <Counter text="подписчика" number="23" />
            </CountersRow>
          </References>
        </Collectionblock>
        {isModalVisible2 && (
          <Popup
            type="reportcols"
            allReports={allReports}
            reportData={reportData}
            onClick={onClick}
            text="Коллекция будет заблокирована по причине"
            reason={reportData.reason}
          ></Popup>
        )}
        <ReportsNavbar
          amount="2"
          type="reportcols"
          onClickFirst={popup2}
          status={reportData.status}
        ></ReportsNavbar>
        <ReportsRow>{listReports()}</ReportsRow>
      </Content>
    </MainWrapper>
  );
};
export default Collectionreport;
