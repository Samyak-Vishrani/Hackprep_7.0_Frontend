import React from "react";
import "../styles/Resources.css";
import resourceImg1 from "../assets/resources-1.jpg";
import resourceImg2 from "../assets/resources-2.jpg";
import resourceImg3 from "../assets/resources-3.jpg";

const resourceCards = [
  {
    icon: "📚",
    title: "Online Library and Resources",
    desc: "Access a wealth of digital books, research papers, and educational materials anytime, anywhere.",
  },
  {
    icon: "🏆",
    title: "Tools for Writing and Research Online",
    desc: "Enhance your academic work with powerful online writing and research tools designed for students.",
  },
  {
    icon: "👥",
    title: "Career Exploration and Planning Tools",
    desc: "Navigate your future with comprehensive career resources and planning tools tailored to your goals.",
  },
  {
    icon: "🎓",
    title: "Student Support Services",
    desc: "Get the help you need with our comprehensive support services, from tutoring to counseling.",
  },
];

const serviceCards = [
  {
    title: "Academic Counseling",
    desc: "Personalized guidance to help you achieve your academic goals & navigate your educational journey.",
    img: resourceImg1,
  },
  {
    title: "Tutoring Services",
    desc: "Expert tutors available to support your learning in various subjects and skill levels.",
    img: resourceImg2,
  },
  {
    title: "Online Learning",
    desc: "Flexible online courses and programs designed to fit your schedule and learning style.",
    img: resourceImg3,
  },
];

function Resources() {
  return (
    <section className="resources" id="resources">
      <h2 className="resources_heading">Essential Resources for Students</h2>
      <div className="resources_cards">
        {resourceCards.map((card, i) => (
          <div className="resource-card" key={i}>
            <span className="resource-card_icon">{card.icon}</span>
            <h3 className="resource-card_title">{card.title}</h3>
            <p className="resource-card_desc">{card.desc}</p>
            <a href="#" className="resource-card_link">Learn More →</a>
          </div>
        ))}
      </div>

      <h2 className="resources_heading resources_heading-services">
        Comprehensive Student Services
      </h2>
      <div className="services_cards">
        {serviceCards.map((card, i) => (
          <div className="service-card" key={i}>
            <img src={card.img} alt={card.title} className="service-card_img" />
            <div className="service-card_overlay">
              <h3 className="service-card_title">{card.title}</h3>
              <p className="service-card_desc">{card.desc}</p>
              <a href="#" className="service-card_link">Learn More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resources;
