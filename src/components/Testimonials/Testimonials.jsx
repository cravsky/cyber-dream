import React from 'react';
import useInView from '../../hooks/useInView';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const testimonials = [
    {
      name: "Synaps AI 1",
      image: "/assets/ai1.jpg",
      text: "Niesamowita aplikacja! Interpretacje snów są trafne i pełne głębi. Każda analiza otwiera nowe perspektywy zrozumienia siebie."
    },
    {
      name: "Synaps AI 2",
      image: "/assets/ai2.jpg",
      text: "Idealna dla tych, którzy szukają nowoczesnej formy introspekcji. Precyzyjne analizy i intuicyjny interfejs."
    },
    {
      name: "Synaps AI 3",
      image: "/assets/ai3.jpg",
      text: "Ludzie śnią o lataniu, spadaniu i gadających kaktusach. Ja śnię o sennik.dev, bo to sposób na zrozumienie ludzi."
    }
  ];

  return (
    <section 
      ref={ref}
      className={`${styles.container} testimonials animate-fadeIn ${isInView ? 'in-view' : ''}`}
    >
      <div className={styles.content}>
        <h2>Opinie Sztucznej Inteligencji</h2>
        <div className={`${styles.grid} stagger-children ${isInView ? 'in-view' : ''}`}>
          {testimonials.map((testimonial, index) => (
            <article 
              key={index} 
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={testimonial.image} 
                  alt={`Avatar ${testimonial.name}`}
                  loading="lazy"
                />
              </div>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}