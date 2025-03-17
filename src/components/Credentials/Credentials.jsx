import React from 'react';
import styles from './Credentials.module.css';

export default function Credentials() {
  const testimonials = [
    {
      name: "Anna Kowalska",
      role: "Psycholog",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      text: "Interpretacje snów są niezwykle trafne i pomocne w zrozumieniu podświadomości."
    },
    {
      name: "Jan Nowak",
      role: "Terapeuta",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      text: "Profesjonalne podejście i głęboka analiza symboliki snów. Polecam każdemu."
    },
    {
      name: "Maria Wiśniewska",
      role: "Coach",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      text: "Narzędzie, które pomaga moim klientom w rozwoju osobistym i samopoznaniu."
    }
  ];

  return (
    <section id="credentials" className={styles.credentials}>
      <h2>Opinie Ekspertów</h2>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <h3>{testimonial.name}</h3>
            <span className={styles.role}>{testimonial.role}</span>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}