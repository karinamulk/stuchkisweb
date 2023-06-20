import styled from "styled-components";
import User from "../../Atoms/A_User";
import "./M_UserBlock.css";

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
    transition: all.4s;

    &:hover{
      cursor: pointer;
      background-color: var(--main-beige-hover);
      transition: all.2s;
    }
`;

const Userblock = ({id, type, username, avatarurl, onClick=() => null}) => {
    const getType = () => {
        switch (type) {
          case "white": {
            return "white";
          }
          default: {
            return "";
          }
        }
      };

    return (
        <Wrapper className={`${getType()}`} onClick={onClick}>
            <User avatarurl={avatarurl} username={username}></User>
            <p style={{color: "var(--main-green)"}}>Владелец</p>
        </Wrapper>
    )
}
export default Userblock;