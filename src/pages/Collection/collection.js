import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Userblock from "../../components/Molecules/UserBlock/M_UserBlock";
import Counter from "../../components/Atoms/Counter/A_Counter";
import Button from "../../components/Atoms/Button/A_Button";
import BlockedSet from "../../components/Molecules/M_BlockedSet";
import ButtonEllipse from "../../components/Atoms/Button/A_ButtonEllipse";
import CopyLink from "../../components/Icons/Q_CopyLink";
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
  display: flex;
  justify-content: space-between;
`;
const Infoblock = styled.div`
  display: flex;
  flex-direction: column;
  width: 504px;
  box-sizing: border-box;
  padding-left: 12px;
  gap: 16px;
`;

const References = styled.div`
  display: flex;
  flex-direction: column;
  width: 504px;
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
const Items = styled.section`
margin-top: 32px;
width: 1016px;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
gap: 8px;
`;
const CrumbsPart = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 0 12px;
  box-sizing: border-box;
`;
const CrumbsBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`;
const Userrow = styled.div`
  width: 100%;
`;
const ImgContainer = styled.article`
width: 248px;
`;

const Collection = () => {
  const location = useLocation();
  const reportData = location.state?.reportData;
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/items")
      .then(({ data }) => {
        console.log(data);
        setItems(data.data);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("false"));
  }, []);

  const listItems = () => {
    const filteredItems = items.filter(
      (item) => item.collection_id === reportData.collection.id
    );

    return filteredItems.map((item) => {
      return (
        <ImgContainer key={item.id}>
          <img
            style={{
              width: "100%",

              objectFit: "fit",
              borderRadius: "8px"
            }}
            src={`http://localhost:3000${item.image.url}`}
            alt="placeholder-image"
          />
        </ImgContainer>
      );
    });
  };

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

  const listUsers = () => {
    const filteredUsers = users.filter(
      (user) => user.id === reportData.collection.user_id
    );

    return filteredUsers.map((user) => {
      return (
        <Userblock
          key={user.id}
          type="white"
          username={user.username}
          avatarurl={`http://localhost:3000` + `${user.avatar.url}`}
        ></Userblock>
      );
    });
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
            <p
              style={{
                margin: 0,
                lineHeight: "var(--text-cap-lineheight)",
                fontSize: "var(--text-cap-size)",
              }}
            >
              Коллекция #{reportData.collection.id}
            </p>
          </CrumbsBlock>

          <ButtonEllipse type="small" icon={<CopyLink />}></ButtonEllipse>
        </CrumbsPart>

        {reportData.collection.blocked === true && (
          <BlockedSet reason={reportData.reason} date="27.06.2023"></BlockedSet>
        )}

        <Collectionblock style={{ marginBottom: "16px" }}>
          <Infoblock>
            <h1>{reportData.collection.title}</h1>
            <p style={{ margin: 0 }}>{reportData.collection.description}</p>
          </Infoblock>
          <References>
            <Userrow>{listUsers()}</Userrow>
            <CountersRow>
              <Counter text="штучкисов" number="9" type="white" />
              <Counter text="подписчика" number="23" type="white" />
            </CountersRow>
          </References>
        </Collectionblock>
        {reportData.collection.blocked === false && (
          <Button
          type="primary"
          typeText="colored"
          title="Заблокировать"
        ></Button>
        )}
        
        <Items>{listItems()}</Items>
      </Content>
    </MainWrapper>
  );
};
export default Collection;
