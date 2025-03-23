import React, { useState } from 'react';
import styles from './CTA.module.css';
import CoreModal from '../CoreModal/CoreModal';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.text}>Odkryj ukryte znaczenie swoich snów już teraz!</p>
        <button 
          className={styles.button} 
          onClick={() => setIsModalOpen(true)}
        >
          Analizuj Sen
        </button>
      </div>
      {isModalOpen && <CoreModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}