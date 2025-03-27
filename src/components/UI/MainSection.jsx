import React from "react";
import placeholderImage from "../../assets/pexels-photo-868790.jpeg"; // Adjust the path as needed
import placeholderImage2 from "../../assets/free-photo-of-burger-fries-and-coca-cola.jpeg"; // Adjust the path as needed
import placeholderImage3 from "../../assets/free-photo-of-close-up-of-a-cheeseburger.jpeg"; // Adjust the path as needed
import placeholderImage4 from "../../assets/free-photo-of-chef-grilling-burgers-in-a-busy-kitchen.jpeg"; // Adjust the path as needed
import placeholderImage5 from "../../assets/free-photo-of-close-up-of-a-juicy-bacon-cheeseburger.jpeg"; // Adjust the path as needed
import placeholderImage6 from "../../assets/pexels-photo-2089717.jpeg"; // Adjust the path as needed
import placeholderImage7 from "../../assets/pexels-photo-2729710.jpeg"; // Adjust the path as needed
import './MainSection.css'; // Import the CSS file

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="main-content">
        <p className="main-text">
          At Burger Haven, we serve the juiciest, most delicious burgers in town. Our burgers are made with the freshest ingredients and grilled to perfection. Come and enjoy a mouth-watering burger experience like no other!
        </p>
        <img src={placeholderImage2} alt="placeholder" className="main-image" />
        <img src={placeholderImage3} alt="placeholder" className="main-image" />
        <img src={placeholderImage4} alt="placeholder" className="main-image" />
        <img src={placeholderImage5} alt="placeholder" className="main-image" />
        <img src={placeholderImage6} alt="placeholder" className="main-image" />
        <img src={placeholderImage7} alt="placeholder" className="main-image" />
      </div>
    </section>
  );
};





export default MainSection;