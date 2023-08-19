// Navbar.tsx
import React, { useState } from 'react';
import  '../Navbar/Navbar.css';

// Navbar.tsx

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">Your Logo</a>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li className="dropdown">
              <a href="/">Services</a>
              <ul className="dropdown-menu">
                <li><a href="/">Service 1</a></li>
                <li><a href="/">Service 2</a></li>
                <li><a href="/">Service 3</a></li>
              </ul>
            </li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="mobile-menu" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'animate' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
