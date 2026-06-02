import Cs from "../assets/svg/cs.svg";
import Formal from "../assets/png/formal.png";
import { NavLink } from 'react-router-dom'
function Categories() {
  return (
    <div className='w-full p10 flex items-center'>
        <div className='w-305 ml-34 bg-[#F0F0F0] rounded-[40px] flex flex-col p-16'>
   <p className='text-[48px] text-[#000000] font-extrabold text-center'>BROWSE BY DRESS STYLE</p>
   <div className="flex  gap-5 mt-2">
 <NavLink to="/Casual" className="block">
      <img src={Cs} alt="mahsulot" />
    </NavLink>
    <img src={Formal} alt="" />
   </div>
        </div>
    </div>
  )
}

export default Categories