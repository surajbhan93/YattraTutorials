import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./TutorCarousel.css";

// Import all images
import h11 from "../assets/images/t1.jpeg";
import h2 from "../assets/images/t2.jpeg";
import t3 from "../assets/images/t3.jpeg";
import t4 from "../assets/images/t4.jpeg";
import t5 from "../assets/images/t5.jpeg";
import t6 from "../assets/images/t6.jpeg";
import t7 from "../assets/images/t7.jpeg";
import t8 from "../assets/images/t8.jpeg";
import t9 from "../assets/images/t9.jpeg";
import t10 from "../assets/images/t10.jpeg";

// Tutors data
const tutors = [
  { id: 1, name: "Priyam Sharma", subject: "Mathematics", photo: h11, experience: 5, qualification: "M.Sc Mathematics" },
  { id: 2, name: "Aswani", subject: "Physics", photo: h2, experience: 4, qualification: "M.Sc Physics" },
  { id: 3, name: "Singhasan Maurya", subject: "Chemistry", photo: t3, experience: 6, qualification: "Ph.D Chemistry" },
  { id: 4, name: "Akash Sukla", subject: "Biology", photo: t4, experience: 3, qualification: "M.Sc Biology" },
  { id: 5, name: "Sadhbhavna rastogi", subject: "English", photo: t5, experience: 7, qualification: "M.A English" },
  { id: 6, name: "Divya Awasthi", subject: "History", photo: t6, experience: 4, qualification: "M.A History" },
  { id: 7, name: "Shashibhusan", subject: "Computer Science", photo: t7, experience: 5, qualification: "B.Tech CS" },
  { id: 8, name: "Pooja Sharma", subject: "Economics", photo: t8, experience: 6, qualification: "M.A Economics" },
  { id: 9, name: "Durgesh panday", subject: "Geography", photo: t9, experience: 3, qualification: "M.A Geography" },
  { id: 10, name: "Manisha", subject: "Political Science", photo: t10, experience: 4, qualification: "M.A Political Science" },
];

const TutorCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "0px",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="carousel-container">
      <h1>Our Expert Tutors</h1>
      <Slider {...settings}>
        {tutors.map((tutor) => (
          <div className="tutor-card" key={tutor.id}>
            <div className="tutor-photo">
              <img src={tutor.photo} alt={tutor.name} />
            </div>
            <div className="tutor-info">
              <h3>{tutor.name}</h3>
              <p><strong>Subject:</strong> {tutor.subject}</p>
              <p><strong>Experience:</strong> {tutor.experience} yrs</p>
              <p><strong>Qualification:</strong> {tutor.qualification}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TutorCarousel;
