import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import "./JoinTutor.css";
import Illu from "../assets/images/h4.jpg";

const JoinTutor = () => {
  return (
    <div className="join-tutor-wrapper">
      
      {/* Hero Section */}
      <div className="join-tutor-hero">
        <FaChalkboardTeacher className="hero-icon" />
        <h1>
          Yattra Tutorials <br />
          Learn & Achieve!! <br />
          <span className="highlight">
            We Help Students & Tutors Find Each Other
          </span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="join-tutor-container">
        
        {/* Left Section */}
        <div className="tutor-left">
          <h2>Find Home Tuition & Online Tuition Part-Time Jobs</h2>
          <p className="sub-text">
            You focus on <strong>teaching</strong>, we focus on finding students for you.
          </p>

          <div className="description-box">
            <p>
              Yattra Tutorials is a trusted platform that connects
              <strong> qualified tutors with nearby students</strong> for both
              <strong> home tuition and online classes</strong>.
            </p>

            <p>
              We provide opportunities for tutors teaching:
            </p>

            <ul>
              <li>📘 ICSE, CBSE & State Board Subjects</li>
              <li>🎯 Competitive Exams – IIT, NEET, Foundation</li>
              <li>💻 Computer Courses – C, C++, Java, Python, Web Development</li>
            </ul>

            <p>
              Whether you are a <strong>college student, working professional,
              or an experienced teacher</strong>, Yattra Tutorials helps you
              find students easily and start earning.
            </p>
          </div>

          {/* Apply Button */}
          <a
            href="https://tally.so/r/VLGGZJ"
            target="_blank"
            rel="noopener noreferrer"
            className="apply-btn"
          >
            🚀 Apply Now
          </a>
        </div>

        {/* Right Section */}
        <div className="tutor-right">
          <img
            src={Illu}
            alt="Yattra Tutor Illustration"
            className="bottom-img"
          />
        </div>

      </div>
    </div>
  );
};

export default JoinTutor;
