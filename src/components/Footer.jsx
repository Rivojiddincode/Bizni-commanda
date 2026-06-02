import shopLogo from "../assets/svg/SHOPCO.svg";
import Fullicons from "../assets/icons/fulicons.svg";
import Visa from "../assets/icons/visa.svg";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-wrapper">
            <footer className="footer-content">
                {/* 1 */}
                <div className="footer-logo-desc">
                    <img className="footer-logo" src={shopLogo} alt="shopLogo" />
                    <p className="footer-desc">
                        We have clothes that suits your style and which you're proud to wear. From women to men.
                    </p>
                    <img className="footer-socials" src={Fullicons} alt="Fullicons" />
                </div>

                {/* 2 */}
                <div className="footer-section">
                    <p className="footer-title">Company</p>
                    <span className="footer-link">About</span>
                    <span className="footer-link">Features</span>
                    <span className="footer-link">Works</span>
                    <span className="footer-link">Career</span>
                </div>

                {/* 3 */}
                <div className="footer-section">
                    <p className="footer-title">Help</p>
                    <span className="footer-link">Customer Support</span>
                    <span className="footer-link">Delivery Details</span>
                    <span className="footer-link">Terms & Conditions</span>
                    <span className="footer-link">Privacy Policy</span>
                </div>

                {/* 4 */}
                <div className="footer-section">
                    <p className="footer-title">FAQ</p>
                    <span className="footer-link">Account</span>
                    <span className="footer-link">Manage Deliveries</span>
                    <span className="footer-link">Orders</span>
                    <span className="footer-link">Payments</span>
                </div>

                {/* 5 */}
                <div className="footer-section">
                    <p className="footer-title">Resources</p>
                    <span className="footer-link">Free eBooks</span>
                    <span className="footer-link">Development Tutorial</span>
                    <span className="footer-link">How to - Blog</span>
                    <span className="footer-link">Youtube Playlist</span>
                </div>
            </footer>

            <div className="footer-bottom">
                <p className="footer-copyright">Shop.co © 2000-2023, All Rights Reserved</p>
                <img className="footer-payment" src={Visa} alt="Visa" />
            </div>
        </div>
    );
}

export default Footer;
