import React from 'react';
import { FaPencilAlt, FaCreditCard, FaBrain, FaFileAlt, FaInfoCircle } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import styles from './Manual.module.css';

export default function Manual() {
  const steps = [
    {
      icon: <FaPencilAlt />,
      title: "Opisz swój sen",
      description: "Podziel się swoim snem - im więcej detali, tym dokładniejsza będzie interpretacja. Nie podawaj danych osobowych!",
      tooltip: "Możesz opisać sen własnymi słowami lub wkleić gotowy tekst. Unikaj podawania danych osobowych — takich jak imię i nazwisko, adres, numer telefonu czy PESEL. Nie zbieramy takich informacji.",
    },
    {
      icon: <FaCreditCard />,
      title: "Dokonaj płatności - 10 zł",
      description: "Bezpieczna płatność online. Twoje dane są w pełni chronione.",
      tooltip: "Akceptujemy płatności kartą oraz BLIKIEM. Wszystkie transakcje są szyfrowane i w pełni bezpieczne. To jednorazowa opłata — bez subskrypcji i ukrytych kosztów."
    },
    {
      icon: <FaBrain />,
      title: "Analiza AI",
      description: "Sztuczna inteligencja analizuje symbolikę oraz kontekst Twojego snu.",
      tooltip: "Nasz system AI wykorzystuje zaawansowane algorytmy do analizy symboliki, emocji i ukrytych wzorców w Twoim śnie, biorąc pod uwagę osobisty i kulturowy kontekst."
    },
    {
      icon: <FaFileAlt />,
      title: "Otrzymasz interpretację",
      description: "Otrzymasz szczegółowe wyjaśnienie snu. Wyświetlone na ekranie i do pobrania w formacie PDF.",
      tooltip: "Interpretacja zawiera analizę głównych symboli, emocji i możliwych znaczeń Twojego snu."
    }
  ];

  return (
    <section className={`${styles.container} manual animate-fadeIn`}>
      <div className={styles.content}>
        <h2>Jak to działa?</h2>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={`${styles.step} animate-slideIn`} style={{ animationDelay: `${index * 0.2}s` }}>
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