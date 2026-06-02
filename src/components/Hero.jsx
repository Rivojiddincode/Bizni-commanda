import Star from "../assets/svg/star.svg";
import Star2 from "../assets/svg/star-2.svg";
import { NavLink } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        {/* left-hero */}
        <div className="hero-content">
          <h1 className="hero-title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="hero-subtitle">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <NavLink to="/fullproduct">
            <button className="hero-button">Shop Now</button>
          </NavLink>

          {/* statistik */}
          <div className="hero-stats">
            <div className="stat-item">
              <p className="stat-value">200+</p>
              <span className="stat-label">International Brands</span>
            </div>
            <div className="stat-item">
              <p className="stat-value">2,000+</p>
              <span className="stat-label">High-Quality Products</span>
            </div>
            <div className="stat-item">
              <p className="stat-value">30,000+</p>
              <span className="stat-label">Happy Customers</span>
            </div>
          </div>
        </div>

        {/* right-hero - decorations */}
        <div className="hero-decorations">
          <img className="star-icon star-2" src={Star} alt="Star" />
          <img className="star-icon star-1" src={Star2} alt="Star-2" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
