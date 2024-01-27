// NavbarSection.js
import React, { useState, useEffect } from 'react';
import styles from './NavbarSection.module.css'; 

const NavbarSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    // Event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <a href="#" className={styles.brand}>Bosibori</a>
      <div className={styles.menuButton} onClick={() => setMenuActive(!menuActive)}></div>
      <div className={`${styles.navigation} ${menuActive ? styles.active : ''}`}>
        <a href="#main">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#projects">My Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
};

export default NavbarSection;
