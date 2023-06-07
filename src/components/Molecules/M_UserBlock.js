import styled from "styled-components";
import User from "../Atoms/A_User";

const Wrapper = styled.div`
    width: 100%;
    height: 48px;
    background-color: var(--main-beige);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 12px;
`;

const Userblock = ({id, username, avatarurl, onClick=() => null}) => {
    return (
        <Wrapper onClick={onClick}>
            <User avatarurl={avatarurl} username={username}></User>
            <p style={{color: "var(--main-green)"}}>Владелец</p>
        </Wrapper>
    )
}
export default Userblock;