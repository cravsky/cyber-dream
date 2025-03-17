// src/components/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1>Unlock the Meaning of Your Dreams</h1>
      <p>Submit your dream and receive a personalized interpretation.</p>
    </section>
  );
}