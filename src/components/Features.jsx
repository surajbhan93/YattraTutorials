import React from "react";
import {
  FaChalkboardTeacher,
  FaLaptop,
  FaBook,
  FaUsers,
  FaUserCheck,
} from "react-icons/fa";
import "./Features.css";

const topFeatures = [
  {
    icon: <FaUserCheck />,
    title: "BEST TUTORS",
    text: "Find ✓ Qualified ✓ Experienced ✓ Trusted Home Tutors",
  },
  {
    icon: <FaLaptop />,
    title: "ONLINE TUITION CLASSES",
    text: "Get LIVE Interactive Classes From Zoom App or Google Meet.",
  },
  {
    icon: <FaBook />,
    title: "ALL BOARDS",
    text: "CBSE Board, ICSE Board, State Board and others.",
  },
];

const midFeatures = [
  {
    icon: <FaUsers />,
    title: "MANY OPTIONS",
    text: "Choose from over 4,000 personally interviewed tutors",
  },
  {
    icon: <FaUserCheck />,
    title: "CONVENIENT",
    text: "Fit tutorials around your schedule, from the comfort of your home",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "100% SATISFACTION",
    text: "Committed to connecting you to top qualified tutors.",
  },
  {
    icon: <FaLaptop />,
    title: "HASSLE-FREE PAYMENT",
    text: "No extra payment. Pay only for the sessions you take.",
  },
];

const steps = [
  {
    icon: <FaUsers />,
    text: "4,000+ PERSONALLY INTERVIEWED TUTORS",
  },
  {
    icon: <FaUserCheck />,
    text: "COMMUNICATE WITH SHORTLISTED TUTORS",
  },
  {
    icon: <FaBook />,
    text: "TAKE A DEMO CLASS & HIRE THE BEST TUTOR",
  },
];

const Features = () => {
  return (
    <section className="full-features-wrapper">
      {/* TOP BLUE STRIP */}
      <div className="top-strip">
        {topFeatures.map((f, idx) => (
          <div key={idx} className="top-feature">
            <div className="top-icon">{f.icon}</div>
            <div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MID FEATURES */}
      <div className="mid-section">
        {midFeatures.map((f, idx) => (
          <div key={idx} className="mid-feature">
            <div className="mid-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>

      {/* GETTING STARTED */}
      <h2 className="steps-heading">GETTING STARTED IS EASY</h2>

      <div className="steps-boxes">
        {steps.map((s, idx) => (
          <div key={idx} className="step-box">
            <div className="step-icon">{s.icon}</div>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
