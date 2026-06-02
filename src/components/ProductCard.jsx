
import { NavLink } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (

    <NavLink
      to="/product"
      className="flex flex-col gap-2.5 w-full cursor-pointer group no-underline"
    >


      <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden flex justify-center items-center h-50 sm:h-64 lg:h-80 transition-all duration-300 group-hover:scale-[1.02]">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-[85%] w-[85%]"
        />
      </div>


      <h3 className="font-satoshi font-bold text-base md:text-xl text-black truncate mt-1">
        {product.title}
      </h3>


      <div className="flex items-center gap-1.5">
        <div className="flex text-yellow-400 text-sm md:text-base">

          {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
            <span key={i}>★</span>
          ))}
          {product.rating % 1 !== 0 && <span>★</span>}
        </div>
        <span className="font-satoshi text-xs md:text-sm text-black/60">
          {product.rating}/<span className="text-black/40">5</span>
        </span>
      </div>


      <div className="flex flex-wrap items-center gap-2.5 font-satoshi font-bold text-lg md:text-2xl mt-0.5">
        {/* Asosiy joriy narx */}
        <span className="text-black">${product.price}</span>


        {product.oldPrice && (
          <span className="text-black/30 line-through font-bold">${product.oldPrice}</span>
        )}


        {product.discount && (
          <span className="bg-[#FF3333]/10 text-[#FF3333] text-[10px] md:text-xs font-medium px-2.5 py-1 rounded-full">
            {product.discount}
          </span>
        )}
      </div>

    </NavLink>
  );
}
