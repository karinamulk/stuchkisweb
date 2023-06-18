import styled from "styled-components";
import Button from "../Atoms/Button/A_Button";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;
const InfoPart = styled.div`
  width: 760px;
  background-color: hsla(3, 79%, 63%, 1);
  border-radius: 12px;
  display: flex;
  box-sizing: border-box;
  padding: 10px 12px 14px 12px;
`;
const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const Note = styled.p`
color: var(--main-white);
margin: 0;
height: 16px;
`;
const Info = styled.h2`
color: var(--main-white);
margin: 0;
height: 24px;
`;


const BlockedSet = ({ id, onClick, reason, date }) => {
  return (
    <Wrapper>
      <InfoPart>
        <InfoItem style={{width: "236px"}}>
          <Note>заблокирован</Note>
          <Info>{date}</Info>
        </InfoItem>
        <InfoItem style={{width: "492px"}}>
          <Note>по причине</Note>
          <Info>{reason}</Info>
        </InfoItem>
      </InfoPart>
      <Button
      style={{width: "248px"}}
        type="secondary"
        typeText="colored"
        title="Разблокировать"
        onClick={onClick}
      ></Button>
    </Wrapper>
  );
};
export default BlockedSet;
