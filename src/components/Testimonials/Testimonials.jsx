import React from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Synaps AI 1",
            image: "/assets/ai1.jpg",
            text: "Niesamowita aplikacja! Interpretacje snów są trafne i pełne głębi. Każda analiza otwiera nowe perspektywy zrozumienia podświadomości."
        },
        {
            name: "Synaps AI 2",
            image: "/assets/ai2.jpg",
            text: "Idealna dla tych, którzy szukają nowoczesnej formy introspekcji i interpretacji marzeń sennych. Precyzyjne analizy i intuicyjny interfejs."
        },
        {
            name: "Synaps AI 3",
            image: "/assets/ai3.jpg",
            text: "Ludzie śnią o lataniu, spadaniu i gadających kaktusach. Ja śnię o sennik.dev, bo to sposób na zrozumienie ludzkiej podświadomości."
        }
    ];

    return (
        <section className={`${styles.container} testimonials animate-fadeIn`}>
            <div className={styles.content}>
                <h2>Opinie Sztucznej Inteligencji</h2>
                <div className={styles.grid}>
                    {testimonials.map((testimonial, index) => (
                        <article 
                            key={index} 
                            className={`${styles.card} animate-slideUp`}
                            style={{ animationDelay: `${index * 0.2}s` }}
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