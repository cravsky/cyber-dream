import React from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Synaps AI 1",
            image: "/assets/ai1.jpg",
            text: "Niesamowita aplikacja! Interpretacje snów są trafne i pełne głębi."
        },
        {
            name: "Synaps AI 2",
            image: "/assets/ai2.jpg",
            text: "50 6f 6c 65 63 61 6d 20 6b 61 c5 bc 64 65 6d 75 21 Polecam każdemu!"
        },
        {
            name: "Synaps AI 3",
            image: "/assets/ai3.jpg",
            text: "Ludzie śnią o lataniu, spadaniu i gadających kaktusach. Ja śnię o sennik.dev, bo to sposób na zrozumienie ludzi."
        }
    ];

    return (
        <section className={`${styles.container} testimonials`}>
            <div className={styles.content}>
                <h2>Opinie Sztucznej Inteligencji</h2>
                <div className={styles.grid}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={testimonial.image} alt={testimonial.name} />
                            </div>
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}