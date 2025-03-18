import React, { useState } from 'react';
import styles from './Navbar.module.css';
import CoreModal from '../CoreModal/CoreModal'; // New modal component

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>sennik.dev</div>
        <ul className={styles.navLinks}>
          <li><a href="#hero">Strona główna</a></li>
          <li><a href="#manual">Jak to działa?</a></li>
          <li><a href="#faq">Pytania</a></li>
          <li><a href="#credentials">Opinie</a></li>
        </ul>
        <button className={styles.analizujButton} onClick={() => setIsModalOpen(true)}>Analizuj</button>
      </nav>
      {isModalOpen && <CoreModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
