import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoon, FaHome, FaBookOpen, FaUserFriends } from 'react-icons/fa';
import styles from './Navbar.module.css';
import CoreModal from '../CoreModal/CoreModal';

export default function Navbar({ disabled }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    if (disabled) return;
    setIsMenuOpen(false);
    const element = document.querySelector(`.${id}`);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`${styles.container} ${disabled ? styles.disabled : ''}`}>
      <div className={styles.content}>
        <Link to="/" className={styles.logo} tabIndex={disabled ? -1 : 0}>sennik.dev</Link>
        
        <div className={styles.mobileControls}>
          <button 
            className={styles.analyzeButton} 
            onClick={() => !disabled && setIsModalOpen(true)}
            aria-label="Analyze Dream"
            disabled={disabled}
            tabIndex={disabled ? -1 : 0}
          >
            <FaRegMoon />
          </button>

          <button 
            className={styles.menuButton} 
            onClick={() => !disabled && setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            disabled={disabled}
            tabIndex={disabled ? -1 : 0}
          >
            <span className={`${styles.menuIcon} ${isMenuOpen ? styles.active : ''}`} />
          </button>
        </div>

        <ul className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <li>
            <button 
              onClick={() => handleNavClick('hero')}
              tabIndex={disabled ? -1 : 0}
              disabled={disabled}
            >
              <FaHome />
              <span>Strona główna</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('manual')}
              tabIndex={disabled ? -1 : 0}
              disabled={disabled}
            >
              <FaBookOpen />
              <span>Jak to działa?</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('testimonials')}
              tabIndex={disabled ? -1 : 0}
              disabled={disabled}
            >
              <FaUserFriends />
              <span>Opinie</span>
            </button>
          </li>
        </ul>
        
        <button 
          className={styles.desktopAnalyzeButton} 
          onClick={() => !disabled && setIsModalOpen(true)}
          disabled={disabled}
          tabIndex={disabled ? -1 : 0}
        >
          Analizuj
        </button>
      </div>

      {isModalOpen && <CoreModal onClose={() => setIsModalOpen(false)} />}
    </nav>
  );
}