import React, { useState, useEffect } from 'react';
import styles from './NewsBox.module.css';

const NEWS_VERSION = '2025-04-14b';

export default function NewsBox() {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('newsSeenVersion');

    if (stored !== NEWS_VERSION) {
      setShowBox(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('newsSeenVersion', NEWS_VERSION);
    setShowBox(false);
  };

  if (!showBox) return null;

  return (
    <div className={`${styles.overlay}`}>
      <div className={`${styles.box}`}>
        <h2 className={styles.heading}>Beta Testy 14.04.2025</h2>
        <ul className={styles.newsList}>
          <li>🧪 Analizy snów dostępne są za <b>darmo!</b></li>
          <li>Już wkrótce: przykładowa analiza snu</li>
        </ul>
        <h3>Podziel się opinią :)</h3>
        <button onClick={handleClose} className={styles.button}>
          OK, rozumiem
        </button>
      </div>
    </div>
  );
}
