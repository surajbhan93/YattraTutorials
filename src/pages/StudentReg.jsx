import React, { useState } from "react";
import "./StudentReg.css";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBook,
  FaListUl,
  FaChalkboardTeacher,
  FaSmile,
} from "react-icons/fa";
import Illu from "../assets/images/Illu.png";

const StudentReg = () => {
  const [form, setForm] = useState({
    role: "Student/Parent",
    name: "",
    phone: "",
    email: "",
    course: "",
    subject: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo class request submitted successfully!");
  };

  return (
    <div className="tutor-container">
      {/* Header */}
      <div className="header">
        <h2>We Help Students and Tutors Find Each Other</h2>
      </div>

      {/* Main Section */}
      <div className="main-content">
        {/* Left Section */}
        <div className="left-section">
          <h1 className="site-title">TutorEdge</h1>
          <h3 className="tagline">Learn & Achieve!!</h3>

          {/* Steps Section */}
          <div className="steps">
            <div className="step">
              <FaListUl className="icon" />
              <h4>
                Tell us your <span>NEEDS</span>
              </h4>
            </div>
            <div className="arrow">➡️</div>
            <div className="step">
              <FaChalkboardTeacher className="icon" />
              <h4>
                Get a Free <span>DEMO</span>
              </h4>
            </div>
            <div className="arrow">➡️</div>
            <div className="step">
              <FaSmile className="icon" />
              <h4>
                Confirm if you <span>LIKE</span>
              </h4>
            </div>
          </div>

          {/* Illustration */}
          <div className="illustration-container">
            <img src={Illu} alt="Tutor helping student" />
          </div>

          {/* Tagline */}
          <p className="note">
            Home Tuition is the #1 secret of{" "}
            <strong>ACADEMIC EXCELLENCE</strong>
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="form-section">
          <div className="form-header">
            <span className="free-badge">FREE</span> Registration
          </div>
          <form onSubmit={handleSubmit} className="tutor-form">
            <label>I am a</label>
            <select name="role" value={form.role} onChange={handleChange}>
              <option>Student/Parent</option>
              <option>Tutor</option>
            </select>

            <div className="input-group">
              <FaUser />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <FaPhone />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <FaEnvelope />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <FaBook />
              <input
                type="text"
                name="course"
                placeholder="Course you need help with"
                value={form.course}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <FaBook />
              <input
                type="text"
                name="subject"
                placeholder="Subject you need help with"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              GET FREE DEMO CLASS
            </button>

            <p className="terms">
              By signing up you agree to our{" "}
              <a href="#">Terms and Conditions</a>
            </p>
            <p className="login-text">
              Already a member? <a href="#">Login</a>
            </p>
          </form>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-cards">
          <div className="card">
            <p>"My marks improved a lot after joining TutorEdge!"</p>
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
        </div>
      </div>
    </div>
  );
};

export default StudentReg;
