import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.customNavbar}>
      <h1 className={styles.heroText}>Sny mają znaczenie – odkryj ich tajemnicę!</h1>
    </div>
  );
}
