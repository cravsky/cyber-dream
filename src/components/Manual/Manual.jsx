import React from 'react';
import { FaPencilAlt, FaCreditCard, FaBrain, FaFileAlt, FaInfoCircle } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import styles from './Manual.module.css';

export default function Manual() {
  const steps = [
    {
      icon: <FaPencilAlt />,
      title: "Opisz swój sen",
      description: "Podziel się swoim snem w szczegółowy sposób. Im więcej detali, tym dokładniejsza będzie interpretacja.",
      tooltip: "Możesz opisać swój sen własnymi słowami lub wkleić gotowy tekst. Pamiętaj o szczegółach takich jak kolory, emocje, miejsca i osoby występujące we śnie."
    },
    {
      icon: <FaCreditCard />,
      title: "Dokonaj płatności",
      description: "Bezpieczna płatność online poprzez Stripe. Twoje dane są w pełni chronione.",
      tooltip: "Akceptujemy płatności kartą. Wszystkie transakcje są szyfrowane i bezpieczne. Płatność jest jednorazowa, bez ukrytych opłat."
    },
    {
      icon: <FaBrain />,
      title: "Analiza AI",
      description: "Zaawansowana sztuczna inteligencja analizuje symbolikę i kontekst Twojego snu.",
      tooltip: "Nasz system AI wykorzystuje zaawansowane algorytmy do analizy symboliki, emocji i wzorców w Twoim śnie, uwzględniając kontekst osobisty i kulturowy."
    },
    {
      icon: <FaFileAlt />,
      title: "Otrzymaj interpretację",
      description: "Otrzymasz szczegółową interpretację snu wraz z wyjaśnieniem znaczenia poszczególnych symboli.",
      tooltip: "Interpretacja zawiera analizę głównych symboli, emocji i możliwych znaczeń Twojego snu. Otrzymasz też wskazówki, jak możesz wykorzystać te informacje w życiu codziennym."
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
                  <button 
                    className={styles.infoIcon}
                    data-tooltip-id={`step-tooltip-${index}`}
                    data-tooltip-content={step.tooltip}
                    aria-label={`More info about ${step.title}`}
                  >
                    <FaInfoCircle />
                  </button>
                  <Tooltip 
                    id={`step-tooltip-${index}`}
                    className={styles.tooltip}
                    place="top"
                    delayShow={200}
                    clickable={true}
                  />
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