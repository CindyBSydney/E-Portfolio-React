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

  const minimizeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <a href="#" className={styles.brand}>Bosibori</a>
      <div className={styles.menuButton} onClick={() => setMenuActive(!menuActive)}></div>
      <div className={`${styles.navigation} ${menuActive ? styles.active : ''}`}>
        <a href="#main" onClick={minimizeMenu}>Home</a>
        <a href="#about" onClick={minimizeMenu}>About</a>
        <a href="#experience" onClick={minimizeMenu}>Experience</a>
        <a href="#services" onClick={minimizeMenu}>Services</a>
        <a href="#projects" onClick={minimizeMenu}>My Projects</a>
        <a href="#contact" onClick={minimizeMenu}>Contact</a>
      </div>
    </header>
  );
};

export default NavbarSection;
