import shopLogo from "../assets/svg/SHOPCO.svg";
import Fullicons from "../assets/icons/fulicons.svg";
import Visa from "../assets/icons/visa.svg";
function Footer() {
    return (
        <div className="bg-[#F0F0F0] h-125 pl-25.25 pb-12.5">
            <footer className="w-full pt-35  flex gap-[113.5px] pb-15 items-start border-b-2 border-b-[#0000001A]">
                {/* 1 */}
                <div className="flex flex-col gap-6.25">
                    <img  className="w-41.75 h-5.75 cursor-pointer"  src={shopLogo} alt="shopLogo" />
                    <p className="text-[14px] w-62 text-[#00000099]">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                    <img className="cursor-pointer w-37 h-7 mt-8.75" src={Fullicons} alt="Fullicons" />
                </div>
                {/* 2 */}
                <div  className="flex flex-col gap-6.25">
                    <p className="text-[18px] text-[#000000]">Company</p>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">About</span>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Features</span>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Works</span>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Career</span>
                </div>
                {/* 3 */}
                <div  className="flex flex-col gap-6.25">
                    <p  className="text-[18px] text-[#000000]">Help</p>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Customer Support</span>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Delivery Details</span>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Terms  Conditions</span>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Privacy Policy</span>
                </div>
                {/* 4 */}
                <div  className="flex flex-col gap-6.25">
                    <p  className="text-[18px] text-[#000000]">FAQ</p>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Account</span>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Manage Deliveries</span>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Orders</span>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Payments</span>
                </div>
                {/* 5 */}
                <div  className="flex flex-col gap-6.25">
                    <p  className="text-[18px] text-[#000000]">Resources</p>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Free eBooks</span>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Development Tutorial</span>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">How to - Blog</span>
                    <span className="text-[16px] text-[#00000099] cursor-pointer">Yutube Playlist</span>
                </div>


            </footer>
            <div className="flex items-start justify-between w-full p-2">
 <p className="text-[14px]  text-[#00000099]">Shop.co © 2000-2023, All Rights Reserved</p>
<img className=" w-70.25 h-7.5 cursor-pointer" src={Visa} alt="Visa" />
            </div>
        </div>
    )
}

export default Footer