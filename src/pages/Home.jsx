import React, { useState, useEffect } from "react";
import "./Home.css";
import Reviews from "../components/Reviews";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/images/h11.png";
import img2 from "../assets/images/h4.jpg";
import img3 from "../assets/images/h2.jpg";
import img4 from "../assets/images/h3.jpg";
import Features from "../components/Features";
import StatsAndServices from "../components/StatsAndServices";
const Home = () => {
  const slides = [
    {
      image: img1,
    title: "Hire Experienced Tutors at Yattra Tutorial",
    text: (
      <>
        <br />
        Get high-quality tuition for all classes — <b>ICSE, ISC, CBSE, UP Board, IIT, NEET</b>  
        and <b>Computer Courses</b> like <span className="highlight-courses">Java, BlueJ, C++, Python</span>.  
        Learn from <b>expert tutors</b> at your doorstep with personalized attention.

        <br />
       
          <strong>
            📞 Call at: <a href="tel: 6363453870"> 6363453870</a> for Home Tutors
          </strong>
          <br />
          <strong>📍 Enquiry (Prayagraj): +91-9838971336</strong>
          <br />
          📍 <b>Address:</b> Sangam Chauraha, Om Gyatri Nagar, Prayagraj  
        <br />
      </>
      ),
    },
    {
      image: img2,
    title: "All Subjects • School to Professional Level",
    text: (
      <>
        ✅ <b>Subjects Taught:</b>  
        <br />
        Biology, Chemistry, Physics, Maths, Science  
        <br />
        Accounts, Commerce, Economics, Psychology  
        <br />
        Computer Science, MS Excel, Tally, Phonics  
        <br />
        Engineering & Engineering Maths  
        <br />
        <br />
        One-to-one learning with focus on concept clarity & exam success.
      </>
    ),
  },
{
  image: img3,
  title: "From Class I to Advanced Competitive & Career Courses",
  text: (
       <>
        🎯 <b>School Classes Assisted:</b> Class I to higher classes  
        <br />
        📝 Regular Tests & Smart Preparation Strategy  
        <br />
        💼 Professional & Career-Oriented Courses Available  
        <br />
        📘 Concept-Based Learning with Personal Mentorship  
        <br />
        <br />
        <span className="highlight-pro">
          Trusted Tutorial Service in Prayagraj – Powered by Yattra Tutorial
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
            📞 Call at: <a href="tel: 6363453870"> 6363453870</a> for Home Tutors
          </strong>
          <br />
          <strong>📍 Enquiry (Prayagraj): +91-9838971336</strong>
          <br />
          📍 <b>Address:</b> Sangam Chauraha, Om Gyatri Nagar, Prayagraj  
        <br />
        📧 <b>Email:</b> gy4650762@gmail.com  
        <br />
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
           <img src={slide.image} alt={slide.title} className="slide-image" />

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
