import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaUserTie } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact">
      <div className="contact-wrapper">
        {/* Left - Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Fill out the form below.</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="icon" />
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <FaPhone className="icon" />
              <input type="tel" placeholder="Your Mobile Number" required />
            </div>
            <div className="input-group">
              <FaUserTie className="icon" />
              <select required>
                <option value="">You are :</option>
                <option value="Student">Student</option>
                <option value="Parent">Parent</option>
                <option value="Professional">Professional</option>
              </select>
            </div>
            <div className="input-group">
              <textarea placeholder="Drop your Message/Query here.." rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
          {submitted && (
            <p className="success-msg">
              Your message has been sent successfully! ✅
            </p>
          )}
        </div>

        {/* Right - Info */}
        <div className="contact-info">
          <h3>Reach Us</h3>
          <p><strong>Prayagraj Office / Head Office:</strong></p>
          <p>201, Chaukhandi, Kydganj, Prayagraj, Uttar Pradesh, India</p>
          <p><strong>Pin Code:</strong> 211003</p>
          <hr />
          <p><strong> <b>Director:</b></strong> Mr. J.P. Singh</p>
          <p><strong>Email:</strong> jpsingh1806@gmail.com</p>
          <p><strong>Mobile:</strong> +91 9335125003</p>
          <hr />
          <p><strong><b>HR Manager:</b></strong> Ms. kanika Singh</p>
          <p>B.COM, MBA(HR & Finance)</p>
          <p><strong>Email:</strong> hr@jptutorial.com</p>
          <p><strong>Mobile:</strong> +91 9307814133</p>
        </div>
      </div>

      {/* Map */}
      <div className="contact-map">
        <iframe
          title="office-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d81.828938!3d25.435837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd8d9b0c2f1d%3A0x123456789abcdef!2sXcellent%20Tutorial!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
