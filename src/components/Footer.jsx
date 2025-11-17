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
          <p>
            Empowering students through quality education and mentorship.  
            Join us to achieve excellence in your academic and professional journey.
          </p>
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
          <p>📞 +91 9335125003</p>
          <p>✉️ info@jptutorial.com</p>

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
            <a href="mailto:info@jptutorial.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JP Tutorial | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
