import React from "react";
import "../styles/Admissions.css";
import admissionsBanner from "../assets/admissions-1.jpg";

function Admissions() {
  return (
    <section className="admissions">
      <h2 className="admissions_heading">
        Join Our Welcoming Community through EduMate Admissions
      </h2>
      <div className="admissions_banner">
        <img src={admissionsBanner} alt="Admissions Banner" className="admissions_banner_img" />

      </div>
    </section>
  );
}

export default Admissions;
