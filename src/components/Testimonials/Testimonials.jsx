import React from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Synaps AI 1",
            // role: "Psycholog",
            image: "/src/assets/ai1.jpg",
            text: "Niesamowita aplikacja! Interpretacje snów są trafne i pełne głębi."
        },
        {
            name: "Synaps AI 2",
            // role: "Terapeuta",
            image: "/src/assets/ai2.jpg",
            text: "Uwielbiam prostotę i elegancję tej aplikacji! Analiza snów nigdy nie była tak szybka i łatwa."
        },
        {
            name: "Synaps AI 3",
            // role: "Coach",
            image: "/src/assets/ai3.jpg",
            text: "sennik.dev to piękna i intuicyjna aplikacja, która zaskoczyła mnie dokładnością interpretacji. Polecam każdemu!"
        }
    ];

    return (
        <section id="testimonials" className={styles.testimonials}>
            <h2>Opinie Sztucznej Inteligencji</h2>
            <div className={styles.testimonialsGrid}>
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