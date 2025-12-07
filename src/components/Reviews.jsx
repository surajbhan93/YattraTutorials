import React from "react";
import "./Reviews.css";
import review1 from "../assets/reviews/review1.png";
import review2 from "../assets/reviews/review2.png";
import review3 from "../assets/reviews/review3.png";
import review4 from "../assets/reviews/review4.png";
// import review5 from "../assets/reviews/review5.png";
import review from "../assets/reviews/review.png";
import review6 from "../assets/reviews/review6.png";
import review7 from "../assets/reviews/review7.png";
import review8 from "../assets/reviews/review8.png";
import review9 from "../assets/reviews/review9.png";
import review10 from "../assets/reviews/review10.png";
import review11 from "../assets/reviews/review11.png";
import review12 from "../assets/reviews/review12.png";
import review13 from "../assets/reviews/review13.png";
import review14 from "../assets/reviews/review14.png";
import review15 from "../assets/reviews/review15.png";
import review16 from "../assets/reviews/review16.png";
import review17 from "../assets/reviews/review17.png";
// import review18 from "../assets/reviews/review18.png";
import review19 from "../assets/reviews/review19.png";



const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2>Some Google Reviews from Students, Parents and Tutors</h2>

      <div className="reviews-gallery">
        <img src={review1} alt="Review 1" className="review-img img1" />
        <img src={review2} alt="Review 2" className="review-img img2" />
        <img src={review3} alt="Review 3" className="review-img img3" />
        <img src={review4} alt="Review 4" className="review-img img4" />
        {/* <img src={review5} alt="Review 5" className="review-img img5" /> */}
         <img src={review} alt="Review 5" className="review-img img" />
          <img src={review6} alt="Review 5" className="review-img img6" />
           <img src={review7} alt="Review 5" className="review-img img7" />
            <img src={review8} alt="Review 5" className="review-img img8" />
             <img src={review9} alt="Review 5" className="review-img img9" />
        <img src={review10} alt="Review 5" className="review-img img10" />
        <img src={review11} alt="Review 5" className="review-img img11" />
        <img src={review12} alt="Review 5" className="review-img img12" />
        <img src={review13} alt="Review 5" className="review-img img13" />
        <img src={review14} alt="Review 5" className="review-img img14" />
        <img src={review15} alt="Review 5" className="review-img img15" />
        <img src={review16} alt="Review 5" className="review-img img16" />
        <img src={review17} alt="Review 5" className="review-img img17" />
        {/* <img src={review18} alt="Review 5" className="review-img img18" /> */}
       <img src={review19} alt="Review 5" className="review-img img19"/>
      </div>
    </section>
  );
};

export default Reviews;
