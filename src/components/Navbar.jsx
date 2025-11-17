import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="JP Tutorials Logo" className="logo" />
        <h1 className="brand">JP Tutorial</h1>
      </div>

      <div className={`nav-right ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/StudentReg" onClick={() => setIsOpen(false)}>Student Registration</Link>
        {/* <Link to="/tutor-registration-process" onClick={() => setIsOpen(false)}>Tutor Registration Process</Link> */}
        <Link to="/tutor" onClick={() => setIsOpen(false)}>Join as Tutor</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
      </div>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
