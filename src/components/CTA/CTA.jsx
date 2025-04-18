import React from 'react';
import { FaRegMoon, FaMagic } from 'react-icons/fa';
import useInView from '../../hooks/useInView';
import styles from './CTA.module.css';

export default function CTA({ onAnalyzeClick, onExampleClick }) {
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
        <div className={`${styles.buttons} animate-scaleIn ${isInView ? 'in-view' : ''}`}>
          <button 
            className={styles.button} 
            onClick={onAnalyzeClick}
          >
            <FaRegMoon className={styles.buttonIcon} />
            <span>Analizuj Sen</span>
          </button>
          <button 
            className={`${styles.button} ${styles.exampleButton}`} 
            onClick={onExampleClick}
          >
            <FaMagic className={styles.buttonIcon} />
            <span>Zobacz Przykład</span>
          </button>
        </div>
      </div>
    </section>
  );
}