import React from 'react';
import './Hero.css';
// Naya Component: CoffeeCanvas ko import kiya
import CoffeeCanvas from './CoffeeCanvas'; 

const Hero = () => {
  return (
    <main className="hero-section">
      
      {/* Left Side: Content (No Change) */}
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
      
      {/* Right Side: Visuals (Placeholder replaced with 3D Canvas) */}
      <div className="hero-visuals">
        {/* Ab humara 3D component yahan render hoga */}
        <CoffeeCanvas /> 
      </div>

    </main>
  );
};

export default Hero;