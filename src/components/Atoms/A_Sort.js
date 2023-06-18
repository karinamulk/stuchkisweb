import styled from "styled-components";
import ChevronDown from "../Icons/Q_ChevronDown";

const Wrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

`;

const Sort = ({ text, title }) => {
  return (
    <Wrapper>
      <p style={{margin:0}}>Сначала новые</p>
      <ChevronDown />
    </Wrapper>
  );
};
export default Sort;
