import styled from "styled-components";
import Button from "../Atoms/Button/A_Button";
import ButtonEllipse from "../Atoms/Button/A_ButtonEllipse";
import Close from "../Icons/Q_Close";

const Wrapper = styled.div`
  width: 760px;
  height: 56px;
  padding: 8px 8px 8px 12px;
  position: fixed;
  left: calc(50vw - 380px);
  top: auto;
  bottom: 24px;
  box-sizing: border-box;
  background-color: hsla(3, 79%, 63%, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
`;
const Buttons = styled.div`
display: flex;
gap: 8px;`;

const AlertNotification = ({
  onClick,
  text,
  onClickClose
}) => {
  return (
    <Wrapper>
      <p style={{color: "var(--main-white)"}}>{text}</p>
      <Buttons>
        <Button
          type="tertiary"
          title="Отменить"
          onClick={onClick}
        ></Button>
        <ButtonEllipse type="small" icon={<Close/>} onClick={onClickClose}>
            
        </ButtonEllipse>
      </Buttons>
    </Wrapper>
  );
};
export default AlertNotification;
