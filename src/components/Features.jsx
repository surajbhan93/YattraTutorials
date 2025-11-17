import React from "react";
import {
  FaChalkboardTeacher,
  FaFileAlt,
  FaHandsHelping,
  FaUsers,
  FaRupeeSign,
} from "react-icons/fa";
import "./Features.css";

// Decorative images (put your images in src/assets/features/)
import decoLeft from "../assets/images/deco-left.jpg";
import decoRight from "../assets/images/deco-right.jpg";

const features = [
  {
    id: 1,
    icon: <FaChalkboardTeacher />,
    title: "Experienced Faculty",
    text: "Highly qualified teachers with proven track record of results and mentorship.",
  },
  {
    id: 2,
    icon: <FaFileAlt />,
    title: "Regular Tests & Analysis",
    text: "Frequent tests + detailed performance reports to track progress and improvement.",
  },
  {
    id: 3,
    icon: <FaHandsHelping />,
    title: "Doubt Solving Sessions",
    text: "Live doubt-clearing sessions & one-on-one help to remove learning gaps fast.",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Parent–Teacher Interaction",
    text: "Regular parent updates and PT meetings to keep student progress transparent.",
  },
  {
    id: 5,
    icon: <FaRupeeSign />,
    title: "Affordable Fee",
    text: "High-quality coaching at pocket-friendly fees — value-first approach.",
  },
];

const Features = () => {
  return (
    <section className="features-section" aria-labelledby="features-heading">
      {/* decorative images */}
      <img src={decoLeft} alt="" className="deco-left" aria-hidden="true" />
      <img src={decoRight} alt="" className="deco-right" aria-hidden="true" />

      <div className="container">
        <div className="features-header">
          <h2 id="features-heading">Why JP Tutorial is Different</h2>
          <p className="sub">
            Focused teaching, regular evaluation and personal attention — everything
            you need to achieve excellence.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, idx) => (
            <article
              key={f.id}
              className={`feature-card card-${idx + 1}`}
              tabIndex="0"
              aria-label={f.title}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-text">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
