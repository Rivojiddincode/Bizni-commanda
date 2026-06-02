import Cs from "../assets/svg/cs.svg";
import Formal from "../assets/png/jens.png";
import { NavLink } from 'react-router-dom';
import "./Categories.css";

function Categories() {
  return (
    <div className="categories-wrapper">
      <div className="categories-container">
        <h2 className="categories-title">BROWSE BY DRESS STYLE</h2>
        <div className="categories-grid">
          <NavLink to="/Category" className="category-card">
            <img src={Cs} alt="Casual Style" />
          </NavLink>
          <div className="category-card">
            <img src={Formal} alt="Formal Style" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;