import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Info from "../../components/Atoms/A_Info";
import Tag from "../../components/Atoms/A_Tag";
import Userblock from "../../components/Molecules/UserBlock/M_UserBlock";
import CollectionBlock from "../../components/Molecules/M_CollectionBlock";
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
const Stuchkisblock = styled.div`
  width: 1016px;
  background-color: var(--main-white);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;
const References = styled.div`
  display: flex;
  flex-direction: column;
  width: 504px;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 8px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Tagsrow = styled.div`
  margin: 6.25px 0;
`;
const LinkBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const CollectionRow = styled.div`
  width: 100%;
`;
const InfoItems = styled.div`
width: 100%;
padding-top: 4px;
padding-left: 4px;
display: flex;
  flex-direction: column;
  gap: 24px;
`;
const CountersRow = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
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
const Item = () => {
  const location = useLocation();
  const reportData = location.state?.reportData;
  const [tagselecteds, setTagselecteds] = useState([]);
  const [collections, setCollections] = useState([]);


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
            <p style={{ margin: 0, lineHeight: "var(--text-cap-lineheight)", fontSize: "var(--text-cap-size)"}}>Штучкис #{reportData.item.id}</p>
          </CrumbsBlock>

          <ButtonEllipse type="small" icon={<CopyLink />}></ButtonEllipse>
        </CrumbsPart>

      {reportData.item.blocked === true && (
        <BlockedSet reason={reportData.reason} date="26.03.2023"></BlockedSet> )}

        <Stuchkisblock style={{ marginBottom: "16px" }}>
          <img
            style={{
              width: 512,
              height: 512,
              objectFit: "fit",
            }}
            src={`http://localhost:3000${reportData.item.image.url}`}
            alt="placeholder-image"
          />
          <References>
            <Top>
              <InfoBlock>
                <InfoItems>
                  <Info
                    title={"Дата находки"}
                    text={reportData.item.date}
                  ></Info>
                  <Info
                    title={"Место находки"}
                    text={reportData.item.geotag}
                  ></Info>
                </InfoItems>
                <Tagsrow>{listTags()}</Tagsrow>
              </InfoBlock>
              <LinkBlock>
                <Userblock
                  username={reportData.user.username}
                  avatarurl={`http://localhost:3000${reportData.user.avatar.url}`}
                ></Userblock>
                <CollectionRow>{listCollections()}</CollectionRow>
              </LinkBlock>
            </Top>
            <CountersRow>
              <Counter text="лайка" number="24" />
              <Counter text="сохранений" number="6" />
            </CountersRow>
          </References>
        </Stuchkisblock>
        <Button type="primary" typeText="colored" title="Заблокировать"></Button>
      </Content>
    </MainWrapper>
  );
};
export default Item;
