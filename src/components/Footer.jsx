import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-about">
          <h3>JP Tutorial</h3>
          <p><strong>JP Tutorial</strong> established in the year <strong><i>2002</i></strong> and since then has been providing students with teachers who are professional in their subjects.our students from different <b> ICSE, ISC, CBSE, Boards, </b> schools and Colleges. These students have done very well in their life and many of our students are in medical professional , and other fields, JP sir is a very good person coperative person for students as well as for teachers . <strong>Join our tutorial for the best teachers provided by JP sir</strong></p>
        </div>

        {/* Middle section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right section */}
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>📍 201, Chaukhandi, Kydganj, Prayagraj, Uttar Pradesh, 211003</p>
          <p>📞 +91 9335125003 | 9198639707</p>
          <p>🌐WWW.jptutorials.in</p>
          <p>📍jpsingh1806@gmail.com</p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="mailto:info@jptutorial.in">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JP Tutorial | Established 2002 |  All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
