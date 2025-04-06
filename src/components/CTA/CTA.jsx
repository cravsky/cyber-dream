import React from 'react';
import { FaRegMoon } from 'react-icons/fa';
import useInView from '../../hooks/useInView';
import styles from './CTA.module.css';

export default function CTA({ onAnalyzeClick }) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`${styles.container} animate-fadeIn ${isInView ? 'in-view' : ''}`}
    >
      <div className={styles.content}>
        <p className={`${styles.text} animate-slideUp ${isInView ? 'in-view' : ''}`}>
          Odkryj ukryte znaczenie swoich snów już teraz!
        </p>
        <button 
          className={`${styles.button} animate-scaleIn ${isInView ? 'in-view' : ''}`} 
          onClick={onAnalyzeClick}
        >
          <FaRegMoon className={styles.buttonIcon} />
          <span>Analizuj Sen</span>
        </button>
      </div>
    </section>
  );
}