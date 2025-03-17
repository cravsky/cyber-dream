// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <p>&copy; 2025 Cyber Dream. All rights reserved.</p>
      <p><a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
    </footer>
  );
}