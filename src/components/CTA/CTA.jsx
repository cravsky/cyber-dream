import React from 'react';
import { FaRegMoon } from 'react-icons/fa';
import styles from './CTA.module.css';

export default function CTA({ onAnalyzeClick }) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.text}>Odkryj ukryte znaczenie swoich snów już teraz!</p>
        <button className={styles.button} onClick={onAnalyzeClick}>
          <FaRegMoon className={styles.buttonIcon} />
          <span>Analizuj Sen</span>
        </button>
      </div>
    </section>
  );
}