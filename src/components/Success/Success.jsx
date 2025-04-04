import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import styles from './Success.module.css';
import Feedback from '../Feedback/Feedback';

export default function Success() {
    const navigate = useNavigate();
    const [interpretation, setInterpretation] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [showFeedback, setShowFeedback] = useState(false);

    useEffect(() => {
        fetchInterpretation();
    }, []);

    const fetchInterpretation = async () => {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

        const storedText = localStorage.getItem("text");
        const storedAdditional = localStorage.getItem("additional");
        const sessionId = localStorage.getItem("sessionId");

        if (!storedText) {
            setInterpretation("❌ Nie znaleziono danych snu. Spróbuj ponownie.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}/api/interpret/dream`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    sessionId,
                    text: storedText, 
                    additional: storedAdditional 
                }),
            });

            const data = await response.json();
            setInterpretation(data.response);
            setIsLoading(false);

            localStorage.removeItem("text");
            localStorage.removeItem("additional");
        } catch (error) {
            console.error("❌ Error processing interpretation:", error);
            setInterpretation("Wystąpił błąd podczas przetwarzania interpretacji snu.");
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Płatność zakończona powodzeniem</h2>
                <div className={styles.interpretationBox}>
                    <h3>Twoja analiza snu</h3>
                    {isLoading ? (
                        <div className={styles.loading}>
                            <div className={styles.spinner}></div>
                            <p>Analiza w trakcie...</p>
                        </div>
                    ) : (
                        <>
                            <p className={styles.interpretation}>{interpretation}</p>
                            <div className={styles.actions}>
                                <button 
                                    className={styles.feedbackButton}
                                    onClick={() => setShowFeedback(true)}
                                >
                                    <FaStar /> Oceń interpretację
                                </button>
                            </div>
                        </>
                    )}
                </div>
                <button 
                    className={styles.button} 
                    onClick={() => navigate('/')}
                    disabled={isLoading}
                >
                    Strona Główna
                </button>
            </div>
            {showFeedback && (
                <Feedback onClose={() => setShowFeedback(false)} />
            )}
        </div>
    );
}