import styled from "styled-components";
import Button from "../Atoms/Button/A_Button";

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 12px;
  margin-bottom: 16px;
`;
const Title = styled.div`
  display: flex;
  gap: 4px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;

const ReportsNavbar = ({ id, amount, onClickFirst, onClickSecond, status}) => {
  return (
    <Wrapper>
      <Title>
        <h2>Жалоб:</h2>
        <h2>{amount}</h2>
      </Title>
      {status === "new" && (
        <Buttons>
          <Button
            type="tertiary"
            title="Принять все"
            style={{}}
            onClick={onClickFirst}
          ></Button>
          <Button
            type="tertiary"
            title="Отклонить все"
            style={{}}
            onClick={onClickSecond}
          ></Button>
        </Buttons>
      )}
    </Wrapper>
  );
};
export default ReportsNavbar;
