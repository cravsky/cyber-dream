import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart } from 'react-icons/fa';
import styles from './Footer.module.css';
import packageJson from '../../../package.json';
import Feedback from '../Feedback/Feedback';

export default function Footer() {
  const [showFeedback, setShowFeedback] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.copyright}>
            &copy; {currentYear} sennik.dev
            <span className={styles.heart}>
              <FaHeart />
            </span>
          </p>
          <p className={styles.version}>v{packageJson.version}</p>
        </div>
        <nav className={styles.links}>
          <Link to="/terms">Regulamin</Link>
          <span className={styles.divider}>|</span>
          <Link to="/privacy">Polityka Prywatności</Link>
          <span className={styles.divider}>|</span>
          <button 
            onClick={() => setShowFeedback(true)}
            className={styles.feedbackButton}
          >
            <FaStar className={styles.starIcon} />
            <span>Oceń sennik.dev</span>
          </button>
        </nav>
      </div>
      {showFeedback && (
        <Feedback onClose={() => setShowFeedback(false)} />
      )}
    </footer>
  );
}