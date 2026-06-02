
import { reviewsData } from '../data/reviews';
import Str from "../assets/svg/str.svg";
import Galochka from "../assets/icons/galochka.svg";
export default function Testimonials() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20 overflow-hidden">
      
     
      <div className="flex justify-between items-end mb-10">
        <h2 className="font-satoshi font-black text-3xl md:text-5xl text-black tracking-wide">
          OUR HAPPY CUSTOMERS
        </h2>
        
       
        <div className="flex gap-3 text-2xl text-black">
          <button className="w-11 h-11 border border-black/10 rounded-full flex justify-center items-center hover:bg-black hover:text-white transition-all cursor-pointer">
            ←
          </button>
          <button className="w-11 h-11 border border-black/10 rounded-full flex justify-center items-center hover:bg-black hover:text-white transition-all cursor-pointer">
            →
          </button>
        </div>
      </div>

     
      <div className="flex gap-5 overflow-x-auto pb-5 scrollbar-none snap-x">
        {reviewsData.map((review) => (
          <div 
            key={review.id} 
            className="min-w-85 sm:min-w-100 bg-white border border-black/10 rounded-[20px] p-7 md:p-8 flex flex-col gap-3.5 snap-start"
          >
            
            
            <div className="flex gap-1">
              <img src={Str} alt="stars" className="h-5 object-contain" />
            </div>

            
            <div className="flex items-center gap-1.5 mt-1">
              <span className="font-satoshi font-bold text-xl text-black">
                {review.name}
              </span>
          
              <img src={Galochka} alt="verified" className="w-5 h-5 object-contain" />
            </div>

           
            <p className="font-satoshi text-sm md:text-base text-black/60 leading-relaxed">
              {review.comment}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}
