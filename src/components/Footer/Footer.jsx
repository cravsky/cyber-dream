import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <p className={styles.copyright}>&copy; 2025 sennik.dev</p>
        <nav className={styles.links}>
          <a href="/privacy">Privacy Policy</a>
          <span className={styles.divider}>|</span>
          <a href="/terms">Terms & Conditions</a>
        </nav>
      </div>
    </footer>
  );
}