import shopLogo from "../assets/svg/SHOPCO.svg";
import serchIcon from "../assets/icons/search.svg";
import Cart from "../assets/icons/cart.svg";
import Profile from "../assets/icons/profile.svg";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="flex w-full pt-6 pl-25 pr-25 items-center">
        {/* logo */}
        <div className="flex">
          <NavLink to="/"><img className="cursor-pointer" src={shopLogo} alt="Shop-logotip" /></NavLink>
        </div>
        {/* nav */}
        <div className="flex gap-6 ml-10 ">
          <NavLink to="/fullproduct"><select className="cursor-pointer  outline-none text-[16px] text-[#000000] font-satoshi font-normal">
            <option value="Shop">Shop</option>
          </select></NavLink>
          <p className="cursor-pointer text-[16px] text-[#000000] font-satoshi font-normal">On Sale</p>
          <p className="cursor-pointer text-[16px] text-[#000000] font-satoshi font-normal">New Arrivals</p>
          <p className="cursor-pointer text-[16px] text-[#000000] font-satoshi font-normal">Brands</p>

        </div>
        {/* search */}
        <div className="flex items-center p-4 gap-3 bg-[#F0F0F0] w-144.25 h-12 rounded-[62px] ml-10">
          <img className="w-6 h-6 cursor-pointer" src={serchIcon} alt="serchIcon" />
          <input className="border-none outline-none  w-144.25" type="search" placeholder="Search for products..." />
        </div>
        {/* icons */}
        <div className="flex ml-10 gap-3.5 items-center">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "opacity-100 scale-110 transition-all" : "opacity-70 hover:opacity-100 transition-all"
            }
          >
            <img className="w-6 h-6 cursor-pointer" src={Cart} alt="Card-icon" />
          </NavLink>
          <img className="w-6 h-6 cursor-pointer" src={Profile} alt="Profile-icon" />
        </div>

      </header>

    </div>
  )
}

export default Header