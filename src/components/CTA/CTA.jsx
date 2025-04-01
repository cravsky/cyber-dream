import React from 'react';
import styles from './CTA.module.css';

export default function CTA({ onAnalyzeClick }) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.text}>Odkryj ukryte znaczenie swoich snów już teraz!</p>
        <button className={styles.button} onClick={onAnalyzeClick}>
          Analizuj Sen
        </button>
      </div>
    </section>
  );
}
