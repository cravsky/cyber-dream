import React from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Synaps AI 1",
            // role: "Psycholog",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
            text: "Niesamowita aplikacja! Interpretacje snów są trafne i pełne głębi."
        },
        {
            name: "Synaps AI 2",
            // role: "Terapeuta",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
            text: "Uwielbiam prostotę i elegancję tej aplikacji! Analiza snów nigdy nie była tak szybka i łatwa."
        },
        {
            name: "Synaps AI 3",
            // role: "Coach",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
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