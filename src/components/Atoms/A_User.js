import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;


const User = ({ id, username, avatarurl, onClick = () => null }) => {
  return (
    <Wrapper onClick={onClick}>
      <img
        style={{
          width: 24,
          height: 24,
          objectFit: "fit",
          borderRadius: 12,
          marginRight: "4px",
        }}
        src={avatarurl}
        alt="placeholder-image"
      />
      <p style={{ fontSize: "24px", lineHeight: "24px", margin: 0 }}>{username}</p>
    </Wrapper>
  );
};
export default User;
