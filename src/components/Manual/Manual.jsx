import React from 'react';
import { FaPencilAlt, FaCreditCard, FaBrain, FaFileAlt } from 'react-icons/fa';
import styles from './Manual.module.css';

export default function Manual() {
  const steps = [
    {
      icon: <FaPencilAlt />,
      title: "Opisz swój sen",
      description: "Podziel się swoim snem w szczegółowy sposób. Im więcej detali, tym dokładniejsza będzie interpretacja."
    },
    {
      icon: <FaCreditCard />,
      title: "Dokonaj płatności",
      description: "Bezpieczna płatność online poprzez Stripe. Twoje dane są w pełni chronione."
    },
    {
      icon: <FaBrain />,
      title: "Analiza AI",
      description: "Zaawansowana sztuczna inteligencja analizuje symbolikę i kontekst Twojego snu."
    },
    {
      icon: <FaFileAlt />,
      title: "Otrzymaj interpretację",
      description: "Otrzymasz szczegółową interpretację snu wraz z wyjaśnieniem znaczenia poszczególnych symboli."
    }
  ];

  return (
    <section className={`${styles.container} manual`}>
      <div className={styles.content}>
        <h2>Jak to działa?</h2>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepContent}>
                <div className={styles.header}>
                  <div className={styles.iconContainer}>
                    {step.icon}
                  </div>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}