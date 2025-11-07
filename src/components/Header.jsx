import React from 'react';

// Header ke styles ke liye ek nayi file import karte hain (jo hum abhi banayenge)
import './Header.css'; 

const Header = () => {
  return (
    <header className="navbar">
      {/* 1. Logo Section */}
      <div className="navbar-logo">
        {/* Abhi ke liye text, baad mein hum Starbucks ka SVG logo lagayenge */}
        <strong>STARBUCKS</strong> 
      </div>

      {/* 2. Menu Links */}
      <nav className="navbar-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Rewards</a></li>
          <li><a href="#">Gift Cards</a></li>
        </ul>
      </nav>

      {/* 3. Actions / Sign In Button */}
      <div className="navbar-actions">
        <button className="sign-in-btn">Sign In</button>
      </div>
    </header>
  );
};

export default Header;