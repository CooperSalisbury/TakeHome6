import React from "react";
import "./Hero.css";
import backgroundImage from "../../assets/HeroSection-bg-image.jpg";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-text">
        <h1>Travel Blog</h1>
        <h2>See wonderful locations</h2>
      </div>
    </div>
  );
};

export default Hero;
