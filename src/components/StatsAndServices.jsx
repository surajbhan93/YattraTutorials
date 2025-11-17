import React, { useEffect, useState } from "react";
import "./StatsAndServices.css";

// Images
import heroImg from "../assets/stats/hero-tutors.jpg";
import service1 from "../assets/stats/home-tutor.jpg";
import service2 from "../assets/stats/online-class.jpg";
import service3 from "../assets/stats/test-series.jpg";
import service4 from "../assets/stats/personal-plan.jpg";
import service5 from "../assets/stats/career-guidance.jpg";

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
      <div className="stat-number">{count.toLocaleString()}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const StatsAndServices = () => {
  return (
    <section className="stats-page">

      {/* HERO SECTION */}
      <div className="stats-hero">

        <div className="hero-img">
          <img src={heroImg} alt="Tutors" />
        </div>

        <div className="hero-text">
          <h1>Trusted Tuition & Home Tutors</h1>
          <p>
            Expert tutors, proven results — we’ve served <strong>150,000+</strong> students in the last <strong>21 years</strong>.
            Connect with certified home tutors or join online classes today.
          </p>
          <div className="hero-ctas">
            <button className="btn primary">Find a Tutor</button>
            <button className="btn outline">View Courses</button>
          </div>
        </div>

      </div>

      {/* STATS */}
      <div className="stats-wrap">
        <Stat label="Expert Tutors" end={3000} suffix="+" />
        <Stat label="Years of Trust" end={21} suffix=" yrs" />
        <Stat label="Students Served" end={150000} suffix="+" />
      </div>

      {/* SERVICES */}
      <div className="services-section">
        <h2>Our Key Services & Highlights</h2>
        <p className="subtitle">Personalized teaching, regular evaluation, and career support — built for student success.</p>

        <div className="services-grid">
          <article className="service-card">
            <img src={service1} alt="Home Tutors" />
            <h3>Home Tutors</h3>
            <p>Verified tutors for one-on-one home tuition across all grades and subjects.</p>
          </article>

          <article className="service-card">
            <img src={service2} alt="Online Classes" />
            <h3>Live Online Classes</h3>
            <p>Interactive online lessons with recordings and doubt sessions.</p>
          </article>

          <article className="service-card">
            <img src={service3} alt="Test Series" />
            <h3>Test Series & Analysis</h3>
            <p>Regular tests, performance reports and personalized improvement plans.</p>
          </article>

          <article className="service-card">
            <img src={service4} alt="Personal Plans" />
            <h3>Personalized Study Plans</h3>
            <p>Study schedules tailored to each student's needs and strengths.</p>
          </article>

          <article className="service-card">
            <img src={service5} alt="Career Guidance" />
            <h3>Career Guidance</h3>
            <p>Counselling for course & career choices, entrance exam prep and mentorship.</p>
          </article>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-banner">
        <h3>Ready to start?</h3>
        <p>Book a free demo class or request a tutor callback — join thousands of successful students.</p>
        <div>
          <button className="btn primary">Book Demo</button>
          <button className="btn outline">Request Callback</button>
        </div>
      </div>

    </section>
  );
};

export default StatsAndServices;
