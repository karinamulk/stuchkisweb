import styled from "styled-components";
import Button from "../Atoms/Button/A_Button";
import axios from "axios";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(245, 245, 244, 0.64);
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
`;
const Content = styled.div`
  width: 520px;
  padding: 8px;
  position: absolute;
  left: calc(50vw - 260px);
  top: calc(50vh - 94px);
  box-sizing: border-box;
  background-color: var(--main-beige);
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Popup = ({onClickSecond = () => null, onClick, text, reason }) => {
    

  
  return (
    <Wrapper>
      <Content>
        <h2 style={{ margin: 0, textAlign: "center", lineHeight: "25.33px" }}>Вы уверены, что хотите принять жалобы? {text} «{reason}»</h2>

        <Buttons>
          <Button
            type="primary"
            title="Принять"
            typeText="colored"
            onClick={onClick}
          ></Button>
          <Button
            type="secondary"
            typeText="colored"
            title="Отменить"
            onClick={onClickSecond}
          ></Button>
        </Buttons>
      </Content>
    </Wrapper>
  );
};
export default Popup;
