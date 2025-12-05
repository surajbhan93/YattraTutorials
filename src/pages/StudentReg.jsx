import React from "react";
import "./StudentReg.css";
import Illu from "../assets/images/Illu.png";
import Illu2 from "../assets/images/h3.jpg";

const StudentReg = () => {
  return (
    <div className="student-wrapper">
      {/* Hero Section */}
      <div className="student-hero">
        <h1>Welcome to <span>Yattra Tutorials</span></h1>
        <p>Connecting Students with the Best Tutors for Home Tuition & Online Classes</p>
      </div>

      {/* Main Section */}
      <div className="student-main">
        {/* Left Section */}
        <div className="student-left">
          <h2>Why Choose Yattra Tutorials?</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>📘 School Subjects</h3>
              <p>ICSE, CBSE & State Boards – Classes 1 to 12</p>
            </div>
            <div className="feature-card">
              <h3>🎯 Competitive Exams</h3>
              <p>IIT-JEE, NEET, Foundation Courses</p>
            </div>
            <div className="feature-card">
              <h3>💻 Computer Courses</h3>
              <p>Java, Python, C++, Web Development & More</p>
            </div>
            <div className="feature-card">
              <h3>🏠 Home & Online Tuition</h3>
              <p>Learn from comfort of your home or online interactive sessions</p>
            </div>
          </div>

          <div className="description-box">
            <p>
              Yattra Tutorials is a trusted platform connecting students and parents 
              with <strong>experienced, verified tutors</strong> across various subjects 
              and competitive exams. Whether you want to improve your grades or get 
              expert coaching, we have the right tutor for you!
            </p>
            <p>
              Our tutors are selected based on expertise, experience, and passion 
              for teaching. We make learning simple, fun, and effective.
            </p>
          </div>

          <a
            href="https://tally.so/r/2EXXLp"
            target="_blank"
            rel="noopener noreferrer"
            className="apply-btn"
          >
            🚀 Apply Now
          </a>
        </div>

        {/* Right Section */}
        <div className="student-right">
          <img src={Illu} alt="Student illustration" className="illu-img" />
          <img src={Illu2} alt="Learning Illustration" className="illu-img-2" />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works">
        <h2>How It Works?</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">1️⃣</div>
            <p>Tell us your <strong>Learning Needs</strong></p>
          </div>
          <div className="step">
            <div className="step-icon">2️⃣</div>
            <p>Get a Free <strong>Demo Session</strong></p>
          </div>
          <div className="step">
            <div className="step-icon">3️⃣</div>
            <p>Choose and Start <strong>Learning</strong></p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="student-testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-cards">
          <div className="card">
            <p>"My marks improved a lot after joining Yattra Tutorials!"</p>
            <h4>- Priya, Class 8</h4>
          </div>
          <div className="card">
            <p>"The tutors are very friendly and experienced."</p>
            <h4>- Rahul, Class 10</h4>
          </div>
          <div className="card">
            <p>"Home tuition made learning fun and effective."</p>
            <h4>- Neha, Class 7</h4>
          </div>
          <div className="card">
            <p>"They provide personal attention to every student."</p>
            <h4>- Arjun, Class 9</h4>
          </div>
          <div className="card">
            <p>"Best tutoring service for all subjects!"</p>
            <h4>- Sneha, Class 6</h4>
          </div>
          <div className="card">
            <p>"Highly recommend for IIT & NEET preparation."</p>
            <h4>- Rohit, Class 12</h4>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="cta-footer">
        <h2>Ready to Start Learning?</h2>
        <a
          href="https://tally.so/r/2EXXLp"
          target="_blank"
          rel="noopener noreferrer"
          className="apply-btn"
        >
          🚀 Apply Now
        </a>
      </div>
    </div>
  );
};

export default StudentReg;
