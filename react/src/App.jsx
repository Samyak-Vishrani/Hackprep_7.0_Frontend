import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Admissions from "./components/Admissions";
import Resources from "./components/Resources";
import News from "./components/News";
import Contact from "./components/Contact";
import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Admissions />
      <Resources />
      <News />
      <Contact />
    </div>
  );
}

export default App;
