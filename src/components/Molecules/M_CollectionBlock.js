import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 12px;
  backdrop-filter: blur(2px);

`;
const CollectionBlock = ({ id, title, coverurl, onClick = () => null }) => {
  return (
    <Wrapper onClick={onClick} style={{ backgroundImage: `url(${coverurl})` }}>
      <Container>
        <h2 style={{ color: "var(--main-white)" }}>
          {title}
        </h2>
        <p style={{ color: "var(--main-white)" }}>Коллекция</p>
      </Container>
    </Wrapper>
  );
};
export default CollectionBlock;
