// src/components/Manual/Manual.jsx
import React from 'react';
import styles from './Manual.module.css';

export default function Manual() {
  return (
    <section id="manual" className={styles.manual}>
      <h2>Jak to działa?</h2>
      <p>1. Wprowadź opis snu i dodatkowe informacje.</p>
      <p>2. Rozwikłaj (5 zł)</p>
      <p>3. Zostaniesz przekierowany do formularza płatności</p>
      <p>4. Otrzymasz spersonalizowaną analizę snu!</p>
    </section>
  );
}