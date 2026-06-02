import { NavLink } from 'react-router-dom';
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <NavLink to="/product" className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>

      <h3 className="product-info-title">
        {product.title}
      </h3>

      <div className="product-rating">
        <div className="stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < Math.floor(product.rating) ? "star-filled" : "star-empty"}>
              ★
            </span>
          ))}
        </div>
        <span className="rating-text">
          {product.rating}/<span className="rating-total">5</span>
        </span>
      </div>

      <div className="product-price-row">
        <span className="current-price">${product.price}</span>

        {product.oldPrice && (
          <span className="old-price">${product.oldPrice}</span>
        )}

        {product.discount && (
          <span className="discount-tag">
            {product.discount}
          </span>
        )}
      </div>
    </NavLink>
  );
}
