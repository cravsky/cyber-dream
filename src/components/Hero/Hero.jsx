import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1>Odkryj znaczenie swego snu</h1>
        <p>Opisz swój sen i poznaj jego interpretację</p>
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