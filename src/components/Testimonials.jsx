import { reviewsData } from '../data/reviews';
import Str from "../assets/svg/str.svg";
import Galochka from "../assets/icons/galochka.svg";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="testimonials-nav">
          <button className="testimonial-nav-btn" aria-label="Previous testimonial">
            ←
          </button>
          <button className="testimonial-nav-btn" aria-label="Next testimonial">
            →
          </button>
        </div>
      </div>

      <div className="testimonials-list">
        {reviewsData.map((review) => (
          <div key={review.id} className="testimonial-card">
            <div className="testimonial-stars">
              <img src={Str} alt="stars" />
            </div>

            <div className="testimonial-user">
              <span className="testimonial-name">
                {review.name}
              </span>
              <img src={Galochka} alt="verified" className="verified-icon" />
            </div>

            <p className="testimonial-comment">
              "{review.comment}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
