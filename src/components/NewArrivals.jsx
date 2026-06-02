import React from 'react';
import ProductCard from './ProductCard'; 
import { newArrivalsData } from '../data/products.js';

export default function NewArrivals() {
  return (
    <section className="w-full max-w-310 mx-auto px-4 py-16 border-b border-black/10">
      {/* Sarlavha */}
      <h2 className="font-satoshi font-black text-3xl md:text-5xl text-center mb-14 text-black tracking-wide">
        NEW ARRIVALS
      </h2>
      
     
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {newArrivalsData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      
      
      <div className="flex justify-center mt-9">
        <button className="border border-black/10 font-satoshi font-medium text-black px-14 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
          View All
        </button>
      </div>
    </section>
  );
}
