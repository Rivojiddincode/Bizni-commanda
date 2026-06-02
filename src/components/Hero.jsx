import Star from "../assets/svg/star.svg";
import Star2 from "../assets/svg/star-2.svg";
import { NavLink } from "react-router-dom";
function Hero() {
  return (
    <div className="mt-6">
    <div className="w-380 flex bg-hero-pattern bg-cover bg-center h-175.75 bg-no-repeat pt-25.75 pl-25 ">
     {/* left-hero */}
     <div className="flex flex-col items-start">
        <h1 className="text-[64px] font-extrabold w-144.25 leading-none">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <span className="text-[16px] text-[#00000099] w-136.25 mt-8">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</span>
       <NavLink to="/shop">  <button className="h-13 w-52.5 text-[16px] text-[#FFFFFF] cursor-pointer rounded-[62px] bg-[#000000] mt-8">Shop Now</button></NavLink>
        {/* statistik */}
        <div className="flex mt-12 gap-16">
            <div className="flex flex-col leading-none w-40.25 h-18.5 border-r-2 border-r-[#0000001A]">
                <p className="text-[40px] font-bold text-[#000000]">200+</p>
                <span className="text-[16px] text-[#00000099] w-36">International Brands</span>
            </div>
              <div className="flex flex-col leading-none  w-45.25 h-18.5 border-r-2 border-r-[#0000001A]">
                <p className="text-[40px] font-bold text-[#000000]">2,000+</p>
                <span className="text-[16px] text-[#00000099] ">High-Quality Products</span>
            </div>
              <div className="flex flex-col leading-none">
                <p className="text-[40px] font-bold text-[#000000]">30,000+</p>
                <span className="text-[16px] text-[#00000099] ">Happy Customers</span>
            </div>
        </div>
     </div>
     {/* right-hero */}
     <div>
        <img className="ml-23 mt-51" src={Star} alt="Star" />
        <img className="ml-150 -mt-74" src={Star2} alt="Star-2" />
     </div>
     </div>
    </div>
  )
}

export default Hero