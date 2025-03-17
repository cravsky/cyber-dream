// src/components/Navbar/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>sennik.dev</div>
      <ul className={styles.navLinks}>
        <li><a href="#hero">Strona główna</a></li>
        <li><a href="#manual">Jak to działa?</a></li>
        <li><a href="#core">Analizuj</a></li>
        <li><a href="#faq">Pytania</a></li>
        <li><a href="#credentials">Opinie</a></li>
      </ul>
    </nav>
  );
}