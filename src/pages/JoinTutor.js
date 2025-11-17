import React, { useState } from "react";
import { FaChalkboardTeacher, FaUser, FaMobileAlt, FaEnvelope, FaBook, FaGraduationCap } from "react-icons/fa";
import "./JoinTutor.css";
import Illu from "../assets/images/Illu.png";

const JoinTutor = () => {
  const [formData, setFormData] = useState({
    userType: "",
    name: "",
    mobile: "",
    email: "",
    courses: "",
    subjects: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Your application has been submitted successfully!");
    setFormData({
      userType: "",
      name: "",
      mobile: "",
      email: "",
      courses: "",
      subjects: "",
    });
  };

  return (
    <div className="join-tutor-wrapper">
      {/* Hero Section */}
      <div className="join-tutor-hero">
        <FaChalkboardTeacher className="hero-icon" />
        <h1>
          Home Tutor Site <br />
          Learn & Achieve!! <br />
          <span className="highlight">We Help Students and Tutors Find Each Other</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="join-tutor-container">
        {/* Left Section */}
        <div className="tutor-left">
          <h2>Find Home Tuition / Online Tuition Part-Time Jobs</h2>
          <p className="sub-text">
            You focus on <strong>teaching</strong>, we focus on finding students for you.
          </p>
          <div className="process-flow">
            <div className="step">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" />
              <p>1️⃣ Create Profile</p>
            </div>
            <div className="step">
              <img src="https://cdn-icons-png.flaticon.com/512/906/906175.png" alt="student" />
              <p>2️⃣ Get Students</p>
            </div>
            <div className="step">
              <img src="https://cdn-icons-png.flaticon.com/512/2345/2345533.png" alt="earn" />
              <p>3️⃣ Start Earning</p>
            </div>
          </div>
          <img
                src={Illu}
                alt="tutor illustration"
                className="bottom-img"
                />

        </div>

        {/* Right Section - Form */}
        <div className="tutor-right">
          <h2>Join as Tutor</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="icon" />
              <select name="userType" value={formData.userType} onChange={handleChange} required>
                <option value="">I am a...</option>
                <option value="Student/Parent">Student/Parent</option>
                <option value="Tutor">Tutor</option>
              </select>
            </div>

            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                pattern="[A-Za-z ]+"
                title="Letters only"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="input-group">
              <FaMobileAlt className="icon" />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength="10"
                placeholder="Mobile Number"
                required
              />
            </div>
            <small>We don't misuse your phone number</small>

            <div className="input-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>
            <small>We don't misuse your email.</small>

            <div className="input-group">
              <FaBook className="icon" />
              <input
                type="text"
                name="courses"
                value={formData.courses}
                onChange={handleChange}
                placeholder="Courses you teach (e.g. Class X CBSE)"
              />
            </div>

            <div className="input-group">
              <FaGraduationCap className="icon" />
              <input
                type="text"
                name="subjects"
                value={formData.subjects}
                onChange={handleChange}
                placeholder="Subjects you teach (e.g. Maths, Physics)"
              />
            </div>

            <p className="terms">
              By signing up you agree to our <a href="/home">Terms and Conditions</a>.
            </p>

            <button type="submit" className="submit-btn">Join Now</button>
            <p className="login-text">Already a member? <a href="/home">Login</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinTutor;
