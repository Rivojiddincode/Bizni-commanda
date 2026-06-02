import Versace from "../assets/svg/versace.svg";
import Zara from "../assets/svg/zara.svg";
import Cucci from "../assets/svg/Cucci.svg";
import Prada from "../assets/svg/Prada.svg";
import Calvin from "../assets/svg/calvin.svg";
function Brands() {
  return (
    <div >
        <div className="w-full h-30.5 bg-[#000000]  pl-25 flex items-center  gap-26.5">
    <img src={Versace} alt="Versace" />
    <img src={Zara} alt="Zara" />
    <img src={Cucci} alt="Cucci" />
    <img src={Prada} alt="Prada" />
    <img src={Calvin} alt="Calvin" />
        </div>
    </div>
  )
}

export default Brands