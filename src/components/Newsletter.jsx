import Mail from "../assets/icons/mail.svg";
function Newsletter() {
  return (
    <div className="ml-28  relative z-10 -mb-20 ">
        <div className="w-310 h-45 rounded-[20px] bg-[#000000] p-10.75 flex items-center justify-between">
            <h3 className="text-[40px] text-[#FFFFFF] w-137.75 font-extrabold leading-none">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
            <div className="flex flex-col gap-3.5">
              <div className="w-87.25 h-12 rounded-[62px] bg-[#FFFFFF] flex items-center p-3 gap-2"><img className="w-6 h-6" src={Mail} alt="Mail" />  <input className="w-87 h-12 border-none outline-none" type="email" placeholder="Enter your email address" /></div>
                <button className="w-87.25 h-12 rounded-[62px] bg-[#FFFFFF] cursor-pointer">Subscribe to Newsletter</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter