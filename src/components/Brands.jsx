import Versace from "../assets/svg/versace.svg";
import Zara from "../assets/svg/zara.svg";
import Cucci from "../assets/svg/Cucci.svg";
import Prada from "../assets/svg/Prada.svg";
import Calvin from "../assets/svg/calvin.svg";
import "./Brands.css";

function Brands() {
  return (
    <div className="brands-container">
      <div className="brands-content">
        <img src={Versace} alt="Versace" />
        <img src={Zara} alt="Zara" />
        <img src={Cucci} alt="Cucci" />
        <img src={Prada} alt="Prada" />
        <img src={Calvin} alt="Calvin" />
      </div>
    </div>
  );
}

export default Brands;