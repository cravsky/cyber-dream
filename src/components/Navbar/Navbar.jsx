import React, { useState } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import styles from './Navbar.module.css';
import CoreModal from '../CoreModal/CoreModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>sennik.dev</div>
        
        <div className={styles.rightSection}>
          <button 
            className={styles.mobileAnalyzeButton} 
            onClick={() => setIsModalOpen(true)}
            aria-label="Analyze Dream"
          >
            <FaRegMoon />
          </button>

          <button className={styles.hamburger} onClick={toggleMenu}>
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
          </button>
        </div>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <li><a href="#hero" onClick={closeMenu}>Strona główna</a></li>
          <li><a href="#manual" onClick={closeMenu}>Jak to działa?</a></li>
          <li><a href="#faq" onClick={closeMenu}>Pytania</a></li>
          <li><a href="#credentials" onClick={closeMenu}>Opinie</a></li>
        </ul>
        
        <button className={`${styles.analizujButton} ${styles.desktopOnly}`} onClick={() => setIsModalOpen(true)}>
          Analizuj
        </button>
      </nav>
      {isModalOpen && <CoreModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}