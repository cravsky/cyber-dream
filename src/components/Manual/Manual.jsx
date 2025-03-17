// src/components/Manual/Manual.jsx
import React from 'react';
import styles from './Manual.module.css';

export default function Manual() {
  return (
    <section id="manual" className={styles.manual}>
      <h2>How It Works</h2>
      <p>1. Enter your dream details.</p>
      <p>2. Proceed to payment.</p>
      <p>3. Receive your personalized dream interpretation.</p>
    </section>
  );
}