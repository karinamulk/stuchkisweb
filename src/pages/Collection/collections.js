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
  padding: 16px;
  box-sizing: border-box;
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

const Collections = () => {
  const [reportcols, setReportcols] = useState([]);
  const navigate = useNavigate();
  const [selectedSort, setSelectedSort] = useState("К рассмотрению");

  const handleReportClick = (reportData) => {
    navigate("/collectionreport", { state: { reportData } });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/reportcols")
      .then(({ data }) => {
        console.log(data);
        setReportcols(data.data);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("false"));
  }, []);
  const list = () => {

    let filteredReportcols = reportcols;

    if (selectedSort === "К рассмотрению") {
      filteredReportcols = filteredReportcols.filter(
        (reportcol) => reportcol.status === "new"
      );
    } else if (selectedSort === "Принятые") {
      filteredReportcols = filteredReportcols.filter(
        (reportcol) => reportcol.status === "accepted"
      );
    } else if (selectedSort === "Отклонённые") {
      filteredReportcols = filteredReportcols.filter(
        (reportcol) => reportcol.status === "declared"
      );
    }

    return filteredReportcols.map((reportcol) => {
      return (
        <RowWrapper
          key={reportcol.id}
          onClick={() => handleReportClick(reportcol)}
        >
          <p
            style={{
              width: "104px",
              marginRight: "8px",
            }}
          >
            {reportcol.collection.title}
          </p>
          <p
            style={{
              fontSize: "24px",
              lineHeight: "24px",
              width: "248px",
              marginRight: "8px",
            }}
          >
            {reportcol.object}
          </p>
          <Userpart style={{ width: "248px", marginRight: "8px" }}>
            <User
              username={reportcol.user.username}
              avatarurl={`http://localhost:3000${reportcol.user.avatar.url}`}
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
            {reportcol.number}
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
          <Note style={{ width: "108px", marginRight: "8px" }}>Коллекция</Note>
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
export default Collections;
