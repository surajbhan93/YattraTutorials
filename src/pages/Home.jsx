import React, { useState, useEffect } from "react";
import "./Home.css";
import Reviews from "../components/Reviews";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/images/home.png";
import img2 from "../assets/images/hero2.jpg";
import img3 from "../assets/images/hero3.jpg";
import img4 from "../assets/images/hero4.jpg";
import Features from "../components/Features";
import StatsAndServices from "../components/StatsAndServices";
const Home = () => {
  const slides = [
    {
      image: img1,
      title: "Hire the Best & Experienced Home Tutors",
      text: (
        <>
          Get top-quality home tuition for all classes —{" "}
          <b>ICSE, ISC, CBSE, UP Board, IIT, PMT</b> &{" "}
          <b>Computer Courses</b> like{" "}
          <span className="highlight-courses">Java, BlueJ, C++, Python</span>{" "}
          and more. Learn with expert teachers at your doorstep.
        </>
      ),
    },
    {
      image: img2,
      title: "One-to-One Personalized Learning",
      text: (
        <>
          Every student is unique — that’s why we provide{" "}
          <b>individual attention</b> to help you master each subject
          confidently. Guaranteed support for the whole session, with{" "}
          <b>3 days of free trial classes</b>. Tuition fees are charged
          according to the class level.
        </>
      ),
    },
{
  image: img3,
  title: "All Subjects • All Boards • All Levels",
  text: (
    <>
      From <b>primary to competitive exams</b> — find{" "}
      <b>trusted and qualified tutors</b> for{" "}
      <b>Maths, Science, English, Computer, and more.</b>
      <br />
      <br />
      <span className="highlight-pro">
        💼 Professional & Highly Qualified Tutors Available
      </span>
      <br />
      <span className="highlight-pro">
        📝 Monthly Tests with Special Model Papers for Better Preparation
      </span>
    </>
  ),
},

    {
      image: img4,
      title: "Your Success is Our Priority",
      text: (
        <>
          At <b>JP Tutorial</b>, we ensure every student achieves excellence
          through expert guidance and smart teaching methods.
          <br />
          <br />
          <span className="highlight">
            🌟 Golden chance for better education — Join Now JP Tutorial!
          </span>
          <br />
          <br />
          <strong>
            📞 Call at: <a href="tel:93355125003">93355125003</a> for Home Tutors
          </strong>
          <br />
          <strong>📍 Enquiry (Prayagraj): +91-9198639707</strong>
        </>
      ),
    },
  ];

  const [current, setCurrent] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Auto slide every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setDisplayedText("");
      setCharIndex(0);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Typing effect for title
  useEffect(() => {
    const fullText = slides[current].title;
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, current, slides]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setDisplayedText("");
    setCharIndex(0);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setDisplayedText("");
    setCharIndex(0);
  };

  return (
    <>
    <section className="home">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} />
            {index === current && (
              <div className="overlay">
                <h2 className="typewriter-text">{displayedText}</h2>
                <p className="slide-text">{slide.text}</p>
              </div>
            )}
          </div>
        ))}

        <button className="arrow left" onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <button className="arrow right" onClick={nextSlide}>
          <FaArrowRight />
        </button>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => {
                setCurrent(index);
                setDisplayedText("");
                setCharIndex(0);
              }}
            ></span>
          ))}
        </div>
      </div>
      
    </section>
      <Features />
      <StatsAndServices />
    <Reviews />
    </>
  );
};

export default Home;
