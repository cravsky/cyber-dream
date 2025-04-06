import React from 'react';
import useInView from '../../hooks/useInView';
import styles from './Hero.module.css';

export default function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section 
      ref={ref} 
      className={`${styles.hero} hero animate-fadeIn ${isInView ? 'in-view' : ''}`}
    >
      <div className={styles.content}>
        <h1 className={`animate-slideIn ${isInView ? 'in-view' : ''}`}>
          Odkryj znaczenie snu
        </h1>
        <p className={`animate-slideUp ${isInView ? 'in-view' : ''}`}>
          Sztuczna inteligencja rozwieje tajemnicę
        </p>
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