// src/components/Navbar/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Cyber Dream</div>
      <ul className={styles.navLinks}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#manual">How It Works</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#credentials">Credentials</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
}