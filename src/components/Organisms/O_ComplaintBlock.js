import styled from "styled-components";
import User from "../Atoms/A_User";
import Button from "../Atoms/Button/A_Button";
import { useNavigate } from "react-router-dom";
import Link from "../Icons/Q_Link";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--main-lightblue);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 8px;
  gap: 24px;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Caption = styled.p`
  font-size: var(--text-cap-size);
  line-height: var(--text-cap-lineheight);
  margin: 0;
`;

const ComplaintBlock = ({
  id,
  username,
  avatarurl,
  object,
  reason,
  number,
  status,
  type,
  itemid,
  onClickFirst
}) => {
  const navigate = useNavigate();
  const onClickRules = () => {
    navigate("/rules");
  };



  
  return (
    <Wrapper>
      <Header>
        <h1>{number}</h1>
        <Button
          type="quatenary"
          title="Правила сообщества"
          onClick={onClickRules}
          icon={<Link />}
        ></Button>
      </Header>
      <Info>
        <InfoItem style={{ width: "236px" }}>
          <Caption>Статус</Caption>
          {status==="new" && (
          <p style={{ margin: 0 }}>На рассмотрении</p> )}
          {status==="accepted" && (
          <p style={{ margin: 0 }}>Принята</p> )}
          {status==="declared" && (
          <p style={{ margin: 0 }}>Отклонена</p> )}
        </InfoItem>
        <InfoItem style={{ width: "248px" }}>
          <Caption>Отправитель</Caption>
          <User avatarurl={avatarurl} username={username}></User>
        </InfoItem>
        <InfoItem style={{ gap: "4px", width: "248px" }}>
          <Caption>Предмет жалобы</Caption>
          <h2 style={{ margin: 0 }}>{object}</h2>
        </InfoItem>
        <InfoItem style={{ width: "236px" }}>
          <Caption>Указанная причина</Caption>
          <p style={{ margin: 0 }}>{reason}</p>
        </InfoItem>
      </Info>
      {status==="new" && (
        <Buttons>
        <Button
          type="secondary"
          typeText="colored"
          title="Принять"
          onClick={onClickFirst}
        ></Button>
        <Button
          type="secondary"
          typeText="colored"
          title="Отклонить"

        ></Button>
      </Buttons>
      )}
      
    </Wrapper>
  );
};
export default ComplaintBlock;
