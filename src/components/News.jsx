import React from "react";
import "../styles/News.css";
import newsImage1 from "../assets/news-1.jpg";
import newsImage2 from "../assets/news-2.jpg";
import newsImage3 from "../assets/news-3.jpg";

const newsItems = [
  {
    category: "Events",
    title: "PA Day for Elementary and Secondary Schools",
    img: newsImage1,
  },
  {
    category: "News",
    title: "TCDSB Literacy Month Celebration",
    img: newsImage2,
  },
  {
    category: "Achievements",
    title: "Alison Canadian Heritage Month",
    img: newsImage3,
  },
];

function News() {
  return (
    <section className="news" id="courses">
      <h2 className="news_heading">Stay Informed and Engaged</h2>
      <div className="news_cards">
        {newsItems.map((item, i) => (
          <div className="news-card" key={i}>
            <div className="news-card_img-wrapper">
              <img src={item.img} alt={item.title} className="news-card_img" />
            </div>
            <div className="news-card_body">
              <span className="news-card_category">{item.category}</span>
              <h3 className="news-card_title">{item.title}</h3>
              <a href="#" className="news-card_link">Learn More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
