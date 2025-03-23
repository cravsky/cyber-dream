import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.background}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}