import shopLogo from "../assets/svg/SHOPCO.svg";
import serchIcon from "../assets/icons/search.svg";
import Cart from "../assets/icons/cart.svg";
import Profile from "../assets/icons/profile.svg";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        {/* logo */}
        <div className="header-logo">
          <NavLink to="/">
            <img src={shopLogo} alt="Shop-logotip" />
          </NavLink>
        </div>
        {/* nav */}
        <div className="header-nav">
          <NavLink to="/fullproduct" className="header-nav-link">
            <select className="header-nav-select">
              <option value="Shop">Shop</option>
            </select>
          </NavLink>
          <p className="header-nav-item">On Sale</p>
          <p className="header-nav-item">New Arrivals</p>
          <p className="header-nav-item">Brands</p>
        </div>
        {/* search */}
        <div className="header-search">
          <img className="header-search-icon" src={serchIcon} alt="serchIcon" />
          <input className="header-search-input" type="search" placeholder="Search for products..." />
        </div>
        {/* icons */}
        <div className="header-icons">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "header-cart-link active" : "header-cart-link"
            }
          >
            <img className="header-icon" src={Cart} alt="Card-icon" />
          </NavLink>
          <img className="header-icon" src={Profile} alt="Profile-icon" />
        </div>
      </header>
    </div>
  );
}

export default Header;
