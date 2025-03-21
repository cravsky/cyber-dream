import React from 'react';
import styles from './Manual.module.css';
import { FaPencilAlt, FaCreditCard, FaBrain, FaFileDownload } from 'react-icons/fa';

export default function Manual() {
  const steps = [
    {
      icon: <FaPencilAlt />,
      title: "Wprowadź opis snu",
      description: "Opisz swój sen i dodaj kontekst, który pomoże w interpretacji.",
      image: "https://images.unsplash.com/photo-1517837125937-53bd402f49d6?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaCreditCard />,
      title: "Dokonaj płatności",
      description: "Szybka i bezpieczna płatność online.",
      image: "https://images.unsplash.com/photo-1623118176012-9b0c6fa0712d?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaBrain />,
      title: "AI dokona inteligentnej interpretacji snu",
      description: "Zaawansowana sztuczna inteligencja analizuje znaczenie Twojego snu.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaFileDownload />,
      title: "Otrzymaj wynik",
      description: "Rezultat wyświetli się na stronie i będzie do pobrania w formacie pdf.",
      image: "https://images.unsplash.com/photo-1544032527-042957c10e40?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="manual" className={styles.manual}>
      <div className={styles.container}>
        <h2>Jak to działa?</h2>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepContent}>
                <div className={styles.iconContainer}>
                  {step.icon}
                </div>
                <div className={styles.stepInfo}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <div className={styles.imageContainer}>
                  <img src={step.image} alt={step.title} />
                </div>
              </div>
              {index < steps.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}