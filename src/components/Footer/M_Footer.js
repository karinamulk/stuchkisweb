import "./style.css";
import Logo from "./components/Q_Logo";
import Qr from "./components/Q_Qr";
import Button from "../Atoms/Button/A_Button";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Link from "../Icons/Q_Link";

const Footer = () => {

  const navigate = useNavigate();
  const handleReportClick = () => {
    navigate("/rules");
  };

  return (
    <div className="containerfooter">
      <div className="footer">
        <div className="left">
          <Logo />
          <p className="p-text-style">
            štuchkis inc.<br></br>babylon<br></br>2022-...<br></br>*все права
            защищены
          </p>
        </div>
        <div className="center">
          <Button
            type="quatenary"
            title="Коммьюнити рулс"
            icon={<Link/>}
            onClick={() => handleReportClick()}
            style={{marginLeft: "124px"}}
          ></Button>
          <Button
            type="quatenary"
            title="Наша тима"
            icon={<Link/>}
            style={{marginLeft: "252px"}}
          ></Button>
          <Button
            type="quatenary"
            title="прайваси полиси"
            style={{paddingLeft: "0px"}}
            icon={<Link/>}
          ></Button>
          <Button
            type="quatenary"
            title="фо партнерс"
            icon={<Link/>}
            style={{marginLeft: "370px"}}
          ></Button>
        </div>
        <div className="right">
          <p className="p-text-style">Download</p>
          <Qr />
        </div>
      </div>
    </div>
  );
};
export default Footer;
