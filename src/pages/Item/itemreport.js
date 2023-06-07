import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Tag from "../../components/Atoms/A_Tag";
import Userblock from "../../components/Molecules/M_UserBlock";
import Button from "../../components/Atoms/Button/A_Button";
import { useNavigate } from "react-router-dom";
import Info from "../../components/Atoms/A_Info";


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
  width: 496px;
  align-items: end;
`;
const Infoitems = styled.div`
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const Tagsrow = styled.div``;

const Itemreport = () => {
  const location = useLocation();
  const reportData = location.state?.reportData;
  const [tagselecteds, setTagselecteds] = useState([]);

  const navigate = useNavigate();

  const handleReportClick = (reportData) => {
    navigate("/item", { state: { reportData } });
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

  const list = () => {
    return tagselecteds.map((tagselected) => {
      return <Tag key={tagselected.id} tagname={tagselected.tag.title}></Tag>;
    });
  };

  return (
    <MainWrapper>
      <Content>
        <Stuchkisblock>
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
                <Info title={'Дата находки'} text={reportData.item.date}></Info>
                <Info title={'Место находки'} text={reportData.item.geotag}></Info>               
              </Infoitems>
            </Top>

            <Tagsrow>{list()}</Tagsrow>
          </Infoblock>
          <References>
            <Button type="quatenary" title="Штучкис" style={{marginBottom: "16px"}} onClick={() => handleReportClick(reportData)}></Button>
            <Userblock
              username={reportData.user.username}
              avatarurl={`http://localhost:3000${reportData.user.avatar.url}`}
            ></Userblock>
          </References>
        </Stuchkisblock>
      </Content>
    </MainWrapper>
  );
};
export default Itemreport;
