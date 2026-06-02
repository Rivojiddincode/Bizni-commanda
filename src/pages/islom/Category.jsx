import React from 'react'
import './Islom.css'
import { NavLink } from 'react-router-dom';

const Category = () => {
  const products = [
    { id: 1, name: 'Gradient Graphic T-shirt', price: '$145', rating: 3.55, image: 'product1.jpg' },
    { id: 2, name: 'Polo with Tipping Details', price: '$180', rating: 4.65, image: 'product2.jpg' },
    { id: 3, name: 'Black Striped T-shirt', price: '$120', oldPrice: '$160', rating: 5.0, image: 'product3.jpg' },
    { id: 4, name: 'Skinny Fit Jeans', price: '$240', oldPrice: '$260', rating: 3.56, discount: '20%', image: 'product4.jpg' },
    { id: 5, name: 'Checkered Shirt', price: '$180', rating: 4.56, image: 'product5.jpg' },
    { id: 6, name: 'Sleeve Striped T-shirt', price: '$130', oldPrice: '$160', rating: 4.54, discount: '30%', image: 'product6.jpg' },
    { id: 7, name: 'Vertical Striped Shirt', price: '$212', oldPrice: '$232', rating: 3.09, discount: '20%', image: 'product7.jpg' },
    { id: 8, name: 'Courage Graphic T-shirt', price: '$145', rating: 4.05, image: 'product8.jpg' },
    { id: 9, name: 'Loose Fit Bermuda Shorts', price: '$80', rating: 3.65, image: 'product9.jpg' },
  ];

  return (
    <div className='bigcontainer'>
      <div className="container1">
        <div className="filters">
          <h2>Filters</h2>
          
          <div className="filter-group">
            <h3>Price</h3>
            <input type="range" min="0" max="500" />
          </div>

          <div className="filter-group">
            <h3>Colors</h3>
            <div className="colors">
              <span className="color green"></span>
              <span className="color red"></span>
              <span className="color yellow"></span>
              <span className="color orange"></span>
              <span className="color blue"></span>
              <span className="color purple"></span>
              <span className="color pink"></span>
              <span className="color black"></span>
            </div>
          </div>

          <div className="filter-group">
            <h3>Size</h3>
            <button className="size-btn">XX-Small</button>
            <button className="size-btn">X-Small</button>
            <button className="size-btn">Small</button>
            <button className="size-btn">Medium</button>
            <button className="size-btn active">Large</button>
            <button className="size-btn">X-Large</button>
            <button className="size-btn">XX-Large</button>
            <button className="size-btn">3X-Large</button>
          </div>

          <div className="filter-group">
            <h3>Dress Style</h3>
            <button className="style-btn">Casual</button>
            <button className="style-btn">Formal</button>
            <button className="style-btn">Party</button>
            <button className="style-btn">Gym</button>
          </div>

          <button className="apply-filter-btn">Apply Filter</button>
        </div>
      </div>

      <div className="container2">
        <div className="products-header">
          <h2>Casual</h2>
          <select>
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>

        <div className="products-grid">
          {products.map((product) => (
          <NavLink  to="/cart"> <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-number">{product.rating}/5</span>
                </div>
                <div className="price">
                  <span className="current-price">{product.price}</span>
                  {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                  {product.discount && <span className="discount">{product.discount}</span>}
                </div>
              </div>
            </div>
</NavLink>
          ))}
        </div> 
      </div>
    </div>
  )
}

export default Category