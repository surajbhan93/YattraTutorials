import React, { useEffect, useState } from "react";
import "./StatsAndServices.css";

// Images
import heroImg from "../assets/stats/h1.png";

// ✅ STAT COMPONENT
const Stat = ({ label, end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / (stepTime || 1)));
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime || 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="stat">
      <div className="stat-number">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

// ✅ MAIN COMPONENT
const StatsAndServices = () => {
  return (
    <section className="stats-page">

      {/* ===== HERO SECTION ===== */}


{/* MAIN HERO AREA */}
<div className="stats-hero">

  <div className="hero-img">
    <img src={heroImg} alt="Tutors" />
  </div>

  <div className="hero-text">
    <h1>Trusted Tuition & Home Tutors</h1>
    <p>
      Expert tutors, proven results — we’ve served{" "}
      <strong>12,000+</strong> students in the last{" "}
      <strong>23 years</strong>. Connect with certified home tutors or
      join online classes today.
    </p>

    <div className="hero-ctas">
      <button className="btn primary">Find a Tutor</button>
      <button className="btn outline">View Courses</button>
    </div>
  </div>

</div>


      {/* ===== STATS ===== */}
      <div className="stats-wrap">
        <Stat label="Expert Tutors" end={3000} suffix="+" />
        <Stat label="Years of Trust" end={23} suffix=" yrs" />
        <Stat label="Students Served" end={12000} suffix="+" />
      </div>

      {/* ===== OUR POPULAR COURSES ===== */}
      <div className="services-section">
        <h2>Our Popular Courses</h2>
        <p className="subtitle">
          ICSE • CBSE • State Board • Entrance Exams • All Subjects
        </p>

        <div className="services-grid">

          <article className="service-card">
            <h3>ALL SUBJECTS</h3>
            <ul>
              <li>Nursery to Class 5th</li>
              <li>Class 6th to Class 10th</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Maths</h3>
            <ul>
              <li>Class IX – X</li>
              <li>Class XI – XII</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Science</h3>
            <ul>
              <li>Class VI – VIII</li>
              <li>Class IX – X</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>English</h3>
            <ul>
              <li>Class IX – X</li>
              <li>Class XI – XII</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Physics</h3>
            <ul>
              <li>Class XI</li>
              <li>Class XII</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Chemistry</h3>
            <ul>
              <li>Class XI</li>
              <li>Class XII</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Entrance Exams</h3>
            <ul>
              <li>IIT-JEE</li>
              <li>NEET</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Accounts</h3>
            <ul>
              <li>Class XI</li>
              <li>Class XII</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Economics</h3>
            <ul>
              <li>Class XI</li>
              <li>Class XII</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Business Studies</h3>
            <ul>
              <li>Class XI</li>
              <li>Class XII</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Computer</h3>
            <ul>
              <li>Class IX – X</li>
              <li>C / C++ (XI – XII)</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Political Science</h3>
            <ul>
              <li>Class XI</li>
              <li>Class XII</li>
            </ul>
          </article>

        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="cta-banner">
        <h3>Ready to start?</h3>
        <p>
          Book a free demo class or request a tutor callback — join thousands of
          successful students.
        </p>
        <div>
          <button className="btn primary">Book Demo</button>
          <button className="btn outline">Request Callback</button>
        </div>
      </div>
    </section>
  );
};

export default StatsAndServices;
