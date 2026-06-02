import React from 'react';
import ProductCard from './ProductCard';
import { topSellingData } from '../data/products.js';
import "./Sections.css";

export default function TopSelling() {
  return (
    <section className="section">
      {/* Sarlavha */}
      <h2 className="section-title">
        TOP SELLING
      </h2>

      <div className="product-grid">
        {topSellingData.map((item) => (
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
