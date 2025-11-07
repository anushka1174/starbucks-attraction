import React from 'react';
import './Hero.css'; // Iske liye CSS abhi banayenge

const Hero = () => {
  return (
    <main className="hero-section">

      {/* Left Side: Content */}
      <div className="hero-content">
        <h1>It's not just Coffee, It's an Experience.</h1>
        <p>
          Experience the rich blend of culture and craftsmanship in every cup. 
          Join Starbucks Rewards today and savor moments that matter.
        </p>
        <div className="cta-buttons">
          <button className="order-btn">Order Now</button>
          <button className="menu-btn">View Menu</button>
        </div>
      </div>

      {/* Right Side: Visuals (Jahan 3D Model aayega) */}
      <div className="hero-visuals">
        {/* Abhi ke liye placeholder image/text */}
        <img src="/starbucks-cup.png" alt="Starbucks Product" className="placeholder-cup"/>
      </div>

    </main>
  );
};

export default Hero;