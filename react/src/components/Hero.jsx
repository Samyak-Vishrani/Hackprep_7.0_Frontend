import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/hero-1.png";

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero_content">
        <h1 className="hero_heading">
          Empowering Minds,<br />Inspiring Futures
        </h1>
        <p className="hero_subtext">
          Welcome to EduMate! College where exceptional learning and
          growing together. We're dedicated to nurturing the next generation
          of leaders.
        </p>
        <div className="hero_actions">
          <button className="hero_btn hero_btn_dark">Start Today</button>
          <button className="hero_btn hero_btn_light">Learn More</button>
        </div>
      </div>
      <div className="hero_image-wrapper">
        <img
          className="hero_image"
          src={heroImage}
          alt="Students in a classroom smiling and collaborating"
        />
      </div>
    </section>
  );
}

export default Hero;
