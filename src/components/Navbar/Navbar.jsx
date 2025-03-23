import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoon, FaHome, FaBookOpen, FaUserFriends } from 'react-icons/fa';
import styles from './Navbar.module.css';
import CoreModal from '../CoreModal/CoreModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    const element = document.querySelector(`.${id}`);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <Link to="/" className={styles.logo}>sennik.dev</Link>
        
        <div className={styles.mobileControls}>
          <button 
            className={styles.analyzeButton} 
            onClick={() => setIsModalOpen(true)}
            aria-label="Analyze Dream"
          >
            <FaRegMoon />
          </button>

          <button 
            className={styles.menuButton} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.menuIcon} ${isMenuOpen ? styles.active : ''}`} />
          </button>
        </div>

        <ul className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <li>
            <button onClick={() => handleNavClick('hero')}>
              <FaHome />
              <span>Strona główna</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('manual')}>
              <FaBookOpen />
              <span>Jak to działa?</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('testimonials')}>
              <FaUserFriends />
              <span>Opinie</span>
            </button>
          </li>
        </ul>
        
        <button 
          className={styles.desktopAnalyzeButton} 
          onClick={() => setIsModalOpen(true)}
        >
          Analizuj
        </button>
      </div>

      {isModalOpen && <CoreModal onClose={() => setIsModalOpen(false)} />}
    </nav>
  );
}