import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`${styles.hero} hero animate-fadeIn`}>
      <div className={styles.content}>
        <h1 className="animate-slideIn">Odkryj znaczenie snu</h1>
        <p className="animate-slideUp">Sztuczna inteligencja rozwieje tajemnicę</p>
      </div>
      <div className={styles.imageWrapper}>
        <img 
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200"
          alt="Mystical night sky"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.stars}></div>
    </section>
  );
}