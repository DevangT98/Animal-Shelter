// Header.js
import React from 'react';
import './Header.css';
import logo from '../../assets/img/pawIcon.png';


const Header = () => {
  return (
    <div className="header-container">
      <div className="gradient-background"></div>
      <div className="nav-links">
        <div className="nav-item">Explore dogs</div>
        <div className="nav-item">Match me with a dog</div>
        <div className="nav-item">My account</div>
      </div>
      <div className="brand-name">Paws4Homes</div>
      <img className="brand-logo" src={logo} alt="Brand Logo" />

    </div>
  );
};

export default Header;