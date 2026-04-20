import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <span className="navbar_logo-icon">🎓</span>
        <span className="navbar_logo-text">EduMate</span>
      </div>
      <ul className="navbar_links">
        <li><a href="#about">About</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="navbar_cta">Enroll Now</button>
    </nav>
  );
}

export default Navbar;
