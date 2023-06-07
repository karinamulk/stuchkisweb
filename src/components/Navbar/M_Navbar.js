import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Sign from "./components/Q_Sign";
import Search from "../Icons/Q_Search";

const MainWrapper = styled.div`
  display: flex;
  width: 1016px;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  left: calc(50% - 508px);
  top: 16px;
  z-index: 100;
`;
const Part = styled.div`
  width: 424px;
  height: 48px;
  background-color: hsla(203, 24%, 99%, 0.8);
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;
const ProfilePart = styled.div`
  width: 48px;
  height: 48px;
  background-color: hsla(203, 24%, 99%, 0.8);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Navbar = () => {
  return (
    <MainWrapper>
      <Link to={`/`}>
        <Sign></Sign>
      </Link>
      <Part>
        <Link to={`/`} style={{color: "hsla(152, 7%, 63%, 1)", textDecoration: "none"}}>Штучкисы</Link>
        <Link to={`/collections`} style={{color: "hsla(152, 7%, 63%, 1)", textDecoration: "none"}}>Коллекшнс</Link>
        <Link style={{color: "hsla(152, 7%, 63%, 1)", textDecoration: "none"}}>Юзерс</Link>
        <Link to={`/`}  style={{marginTop: "4px"}}>
          <Search></Search>
        </Link>
      </Part>
      <ProfilePart>
        <Link to={`/`} style={{color: "hsla(152, 7%, 63%, 1)", textDecoration: "none"}}>Я</Link>
      </ProfilePart>
    </MainWrapper>
  );
};
export default Navbar;
