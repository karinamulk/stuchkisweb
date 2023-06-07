import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import User from "../../components/Atoms/A_User";

const MainWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 144px;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 1016px;
`;

const RowWrapper = styled.div`
  display: flex;
  width: 1016px;
  height: 56px;
  background: hsla(180, 20%, 99%, 1);
  border-radius: 12px;
  margin-bottom: 8px;
  overflow: hidden;
  align-items: center;
  cursor: pointer;
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TopBlock = styled.div`
  width: 1016px;
  margin-bottom: 64px;
  padding: 0 12px;
  box-sizing: border-box;
`;
const Title = styled.h1`
`;

const TableDescription = styled.div`
  width: 1016px;
  padding: 0 12px;
  box-sizing: border-box;
  display: flex;
`;
const Note = styled.p`
  font-size: 12px;
  line-height: 12px;
  color: hsla(152, 7%, 63%, 1);
`;
const Userpart =styled.div``;
const MainScreen = () => {
  const [reportits, setReportits] = useState([]);
  const navigate = useNavigate();

  const handleReportClick = (reportData) => {
    navigate("/report", { state: { reportData } });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/reportits")
      .then(({ data }) => {
        console.log(data);
        setReportits(data.data);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("false"));
  }, []);
  const list = () => {
    return reportits.map((reportit) => {
      return (
        <RowWrapper
          key={reportit.id}
          onClick={() => handleReportClick(reportit)}
        >
          <img
            style={{ width: 56, height: 56, objectFit: "fit", marginRight: "72px" }}
            src={`http://localhost:3000${reportit.item.image.url}`}
            alt="placeholder-image"
          />
          <p style={{fontSize: "24px", lineHeight: "24px", width: "248px", marginRight: "8px"}}>{reportit.object}</p>
          <Userpart style={{width: "248px", marginRight: "8px"}}>
            <User username={reportit.user.username} avatarurl={`http://localhost:3000${reportit.user.avatar.url}`}></User>      
          </Userpart>
          
          <p style={{fontSize: "24px", lineHeight: "24px", width: "360px", textAlign: "center"}}>{reportit.number}</p>
        </RowWrapper>
      );
    });
  };
  return (
    <MainWrapper>
      <Content>
        <TopBlock>
          <Title>Все жалобы</Title>
        </TopBlock>   
        <TableDescription>
          <Note style={{width: "108px", marginRight: "8px"}}>Штучкис</Note>
          <Note style={{width: "248px", marginRight: "8px"}}>Предмет жалобы</Note>
          <Note style={{width: "248px", marginRight: "8px"}}>Отправитель</Note>
          <Note style={{width: "360px", textAlign: "center"}}>Номер</Note>
        </TableDescription>   
        <ColumnWrapper>{list()}</ColumnWrapper>
      </Content>
    </MainWrapper>
  );
};
export default MainScreen;
