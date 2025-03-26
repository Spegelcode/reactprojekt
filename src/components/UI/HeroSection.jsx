import React from "react";
import placeholderImage from "../../assets/pexels-photo-868790.jpeg";  // Adjust the path as needed

import './HeroSection.css';  // Import the CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Burger Haven </h1>
        <p className="hero-text">At Burger Haven, we serve the juiciest, most delicious burgers in town. Our burgers are made with the freshest ingredients and grilled to perfection. Come and enjoy a mouth-watering burger experience like no other!</p>
      </div>
      <img src={placeholderImage} alt="placeholder" className="hero-image" />
    </section>
  );
};

export default HeroSection;