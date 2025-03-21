import React, { useState } from 'react';
import styles from './CTA.module.css';
import CoreModal from '../CoreModal/CoreModal';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.ctaSection}>
      <p className={styles.ctaText}>Odkryj ukryte znaczenie swoich snów już teraz!</p>
      <button className={styles.ctaButton} onClick={() => setIsModalOpen(true)}>
        Analizuj Sen
      </button>
      {isModalOpen && <CoreModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}