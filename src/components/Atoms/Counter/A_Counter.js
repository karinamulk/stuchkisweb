import styled from "styled-components";
import "./A_Counter.css";

const Container = styled.div`
  width: 240px;
  height: 72px;
  display: flex;
  flex-direction: column;
  background-color: var(--main-beige);
  padding: 12px;
  box-sizing: border-box;
  border-radius: 12px;
`;
const Number = styled.p`
  margin: 0;
  color: var(--main-green);
  font-size: var(--text-h1-size);
  line-height: var(--text-h1-lineheight);
`;
const Text = styled.p`
  margin: 0;
  color: var(--main-green);
  font-size: var(--text-p-size);
  line-height: var(--text-p-lineheight);
`;

const Counter = ({ text, number, type = "" }) => {
  const getType = () => {
    switch (type) {
      case "white": {
        return "whiteback";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Container className={`${getType()}`}>
      <Number>{number}</Number>
      <Text>{text}</Text>
    </Container>
  );
};
export default Counter;
