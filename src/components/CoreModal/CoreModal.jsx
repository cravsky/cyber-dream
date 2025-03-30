import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CoreSection from '../CoreSection/CoreSection';
import styles from './CoreModal.module.css';

export default function CoreModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Close modal"
        >
          ✖
        </button>
        <CoreSection onClose={onClose} />
      </div>
    </div>,
    document.body
  );
}