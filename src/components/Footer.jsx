import React from "react";
import "./Footer.css";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo + About Section */}
        <div className="footer-about">
          <img 
            src="/logo.png" 
            alt="Yattra Tutorials" 
            className="footer-logo"
          />
          
          <p className="footer-about-text">
            Welcome to Yattra Tutorial Home Tutoring Services, your dedicated 
            partner in academic excellence. We take pride in offering personalized 
            and effective tutoring for students from Class 1 to 12, encompassing 
            the CBSE, ISC, and ICSE curricula.
          </p>
        </div>

        {/* Courses Section */}
        <div className="footer-links">
          <h4>COURSES</h4>
          <ul>
            <li>1st To 12th Standard Courses</li>
            <li>Entrance & Competitive Exams</li>
            <li>Hobby Classes</li>
            <li>Language Classes</li>
            <li>Home Tutors In Teliyarganj</li>
            <li>Home Tutors In Allahpur</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-links">
          <h4>USEFULL LINK</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/StudentReg">Hire A Tutor</a></li>
            <li><a href="/area">Tutors By Area</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/payment">Payment</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>GET IN TOUCH</h4>

          <p>📍 Sangam Chauraha Om Gyatri Nagar, Prayagraj</p>
          <p>📧 gy4650762@gmail.com </p>
          <p>📞 6363453870<br />📞 9838971336</p>

          <div className="social-icons">
            <a href="https://www.facebook.com/share/1B2LjrnDvZ/" target="_blank"><FaFacebookF /></a>
            <a href="https://www.instagram.com/yattra762/" target="_blank"><FaInstagram /></a>
            <a href="/"><FaTwitter /></a>
            <a href="/"><FaYoutube /></a>
            <a href="https://codelura.in/" target="_blank"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/company/yattra-tutorial/?viewAsMember=true "target="_blank" ><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
  <p>
    © 2023–2024 Yattra Tutorial. All Rights Reserved.  
    Design & Developed by <strong>
      <a href="https://codelura.in/" target="_blank" rel="noopener noreferrer">
        Codelura
      </a>
    </strong>
  </p>

  <div className="footer-policy">
    <a href="/terms">Terms & Conditions</a> | <a href="/payment">Payment</a>
  </div>
</div>


    </footer>
  );
};

export default Footer;
