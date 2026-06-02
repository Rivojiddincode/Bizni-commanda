import Mail from "../assets/icons/mail.svg";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-container">
        <h3 className="newsletter-title">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
        <div className="newsletter-form">
          <div className="newsletter-input-group">
            <img src={Mail} alt="Mail" />
            <input className="newsletter-input" type="email" placeholder="Enter your email address" />
          </div>
          <button className="newsletter-btn">Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;