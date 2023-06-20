import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import User from "../../components/Atoms/A_User";
import ToggleButtonSet from "../../components/Molecules/M_ToggleButtonSet";
import Sort from "../../components/Atoms/A_Sort";

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
  &:hover {
    cursor: pointer;
  }
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
  display: flex;
  gap: 8px;
`;
const SortPart= styled.div `
  width: 620px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1``;

const TableDescription = styled.div`
  width: 1016px;
  padding: 0 12px;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 16px;
`;
const Note = styled.p`
  font-size: 12px;
  line-height: 12px;
  color: hsla(152, 7%, 63%, 1);
`;
const Userpart = styled.div``;
const MainScreen = () => {
  const [reportits, setReportits] = useState([]);
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);
  const [selectedSort, setSelectedSort] = useState("К рассмотрению");

  const handleReportClick = (reportData) => {
    navigate("/itemreport", { state: { reportData } });
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
    let filteredReportits = reportits;

    if (selectedSort === "К рассмотрению") {
      filteredReportits = filteredReportits.filter(
        (reportit) => reportit.status === "new"
      );
    } else if (selectedSort === "Принятые") {
      filteredReportits = filteredReportits.filter(
        (reportit) => reportit.status === "accepted"
      );
    } else if (selectedSort === "Отклонённые") {
      filteredReportits = filteredReportits.filter(
        (reportit) => reportit.status === "declared"
      );
    }

    return filteredReportits.map((reportit) => {
      return (
        <RowWrapper
          key={reportit.id}
          onClick={() => handleReportClick(reportit)}
        >
          <img
            style={{
              width: 56,
              height: 56,
              objectFit: "fit",
              marginRight: "72px",
            }}
            src={`http://localhost:3000${reportit.item.image.url}`}
            alt="placeholder-image"
          />
          <p
            style={{
              fontSize: "24px",
              lineHeight: "24px",
              width: "248px",
              marginRight: "8px",
            }}
          >
            {reportit.object}
          </p>
          <Userpart style={{ width: "248px", marginRight: "8px" }}>
            <User
              username={reportit.user.username}
              avatarurl={`http://localhost:3000${reportit.user.avatar.url}`}
            ></User>
          </Userpart>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "24px",
              width: "360px",
              textAlign: "center",
            }}
          >
            {reportit.number}
          </p>
        </RowWrapper>
      );
    });
  };
  return (
    <MainWrapper>
      <Content>
        <TopBlock>
          <Title style={{ width: "364px" }}>Все жалобы</Title>
          <SortPart>
            <ToggleButtonSet
              tagname1="К рассмотрению"
              tagname2="Принятые"
              tagname3="Отклонённые"
              onClick1={() => setSelectedSort("К рассмотрению")}
              onClick2={() => setSelectedSort("Принятые")}
              onClick3={() => setSelectedSort("Отклонённые")}
              selectedSort={selectedSort}
            ></ToggleButtonSet>
            <Sort />
          </SortPart>
        </TopBlock>
        <TableDescription>
          <Note style={{ width: "108px", marginRight: "8px" }}>Штучкис</Note>
          <Note style={{ width: "248px", marginRight: "8px" }}>
            Предмет жалобы
          </Note>
          <Note style={{ width: "248px", marginRight: "8px" }}>
            Отправитель
          </Note>
          <Note style={{ width: "360px", textAlign: "center" }}>Номер</Note>
        </TableDescription>
        <ColumnWrapper>{list()}</ColumnWrapper>
      </Content>
    </MainWrapper>
  );
};
export default MainScreen;
