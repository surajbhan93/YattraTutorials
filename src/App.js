import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // <-- import footer
import Home from "./pages/Home";
import JoinTutor  from "./pages/JoinTutor";
import StudentReg  from "./pages/StudentReg";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
   
          <Route path="/tutor" element={<JoinTutor />} />
          <Route path="/StudentReg" element={<StudentReg />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
