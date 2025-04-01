import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';

export default function Layout({ children, onAnalyzeClick }) {
  const location = useLocation();
  const isModalRoute = ['/success', '/cancel', '/terms', '/privacy'].includes(location.pathname);

  return (
    <div className={styles.background}>
      <div className={`${styles.navbarWrapper} ${isModalRoute ? styles.blurred : ''}`}>
        <Navbar disabled={isModalRoute} onAnalyzeClick={onAnalyzeClick} />
      </div>
      <main className={styles.main}>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}
