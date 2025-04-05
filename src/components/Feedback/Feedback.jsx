import React, { useState } from 'react';
import { FaTimes, FaStar, FaRegStar } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import styles from './Feedback.module.css';

export default function Feedback({ onClose }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rating === 0) {
            setError('Proszę wybrać ocenę');
            return;
        }

        setIsSubmitting(true);
        setError('');

        const sessionId = localStorage.getItem("sessionId");
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

        try {
            const response = await fetch(`${BACKEND_URL}/api/feedback`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    rating,
                    feedback,
                    sessionId
                }),
            });

            if (!response.ok) {
                throw new Error('Wystąpił błąd podczas wysyłania opinii');
            }

            setIsSubmitted(true);
        } catch (err) {
            setError('Wystąpił błąd podczas wysyłania opinii');
        } finally {
            setIsSubmitting(false);
        }
    };

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Zamknij"
                >
                    <FaTimes />
                </button>

                {isSubmitted ? (
                    <div className={styles.success}>
                        <h2>Dziękujemy za opinię!</h2>
                        <p>Twoja opinia pomoże nam ulepszyć naszą usługę.</p>
                        <button onClick={onClose}>Zamknij</button>
                    </div>
                ) : (
                    <>
                        <h2>Oceń sennik.dev</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <label key={index}>
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={ratingValue}
                                                onClick={() => setRating(ratingValue)}
                                            />
                                            {ratingValue <= (hover || rating) ? (
                                                <FaStar
                                                    className={styles.star}
                                                    onMouseEnter={() => setHover(ratingValue)}
                                                    onMouseLeave={() => setHover(0)}
                                                />
                                            ) : (
                                                <FaRegStar
                                                    className={styles.star}
                                                    onMouseEnter={() => setHover(ratingValue)}
                                                    onMouseLeave={() => setHover(0)}
                                                />
                                            )}
                                        </label>
                                    );
                                })}
                            </div>
                            {error && <p className={styles.error}>{error}</p>}
                            <div className={styles.textareaWrapper}>
                                <textarea
                                    placeholder="Podziel się swoją opinią (opcjonalnie)"
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    maxLength={500}
                                />
                                {feedback.length > 0 && (
                                    <span className={styles.counter}>
                                        {feedback.length}/500
                                    </span>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={styles.submitButton}
                            >
                                {isSubmitting ? 'Wysyłanie...' : 'Wyślij opinię'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>,
        document.body
    );
}