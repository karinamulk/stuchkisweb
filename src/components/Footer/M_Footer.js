import "./style.css";
import Logo from "./components/Q_Logo";
import Qr from "./components/Q_Qr";


const Footer = () => { 

    return (
        <div className="containerfooter">
            <div className="footer">
                <div className="left">
                    <Logo />
                    <p className="p-text-style">štuchkis inc.<br></br>babylon<br></br>2022-...<br></br>*все права защищены</p>
                </div>
                <div className="center">
                    <a href="/"><h3 className="h3-text-style">Коммьюнити рулс</h3></a>
                </div>
                <div className="right">
                    <p className="p-text-style">Download</p>
                    <Qr />
                </div>
            
            </div>
        </div>
    )
}
export default Footer;