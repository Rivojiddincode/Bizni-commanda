import React from 'react';
import ProductCard from './ProductCard';
import { newArrivalsData } from '../data/products.js';
import "./Sections.css";

export default function NewArrivals() {
  return (
    <section className="section">
      {/* Sarlavha */}
      <h2 className="section-title">
        NEW ARRIVALS
      </h2>

      <div className="product-grid">
        {newArrivalsData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <div className="view-all-container">
        <button className="btn-secondary">
          View All
        </button>
      </div>
    </section>
  );
}
