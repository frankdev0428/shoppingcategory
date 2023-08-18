// Navbar.tsx
import React, { useState } from 'react';
import styles from '../Navbar/Navbar.module.css';

interface NavbarProps {
  // Define props here if needed
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
      </div>
      <div className={styles.navbarRight}>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
