import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <p className={styles.copyright}>&copy; 2025 sennik.dev</p>
        <nav className={styles.links}>
          <Link to="/terms">Regulamin</Link>
          <span className={styles.divider}>|</span>
          <Link to="/privacy">Polityka Prywatności</Link>
        </nav>
      </div>
    </footer>
  );
}