import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Sign from "./components/Q_Sign";
import Search from "../Icons/Q_Search";
import { NavLink } from "react-router-dom";

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
        <NavLink
          to="/items"
          style={{color: "var(--main-green)", textDecoration: "none" }}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Штучкисы
        </NavLink>

        <NavLink
          to="/collections"
          style={{color: "var(--main-green)", textDecoration: "none" }}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Коллекшнс
        </NavLink>
        <NavLink
          to="/"
          style={{color: "var(--main-green)", textDecoration: "none" }}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Юзерс
        </NavLink>
        <NavLink
          to="/"
          style={{ marginTop: "4px"}}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Search></Search>
        </NavLink>
      </Part>
      <ProfilePart>
        <NavLink
          to="/"
          style={{color: "var(--main-green)", textDecoration: "none" }}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Я
        </NavLink>
      </ProfilePart>
    </MainWrapper>
  );
};
export default Navbar;
