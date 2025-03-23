import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Success.module.css';

export default function Success() {
    const navigate = useNavigate();
    const [interpretation, setInterpretation] = useState('');

    useEffect(() => {
        fetchInterpretation();
    }, []);

    const fetchInterpretation = async () => {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

        const storedText = localStorage.getItem("text");
        const storedAdditional = localStorage.getItem("additional");

        if (!storedText) {
            setInterpretation("❌ No dream data found. Please try again.");
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}/api/interpret/dream`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: storedText, additional: storedAdditional }),
            });

            const data = await response.json();
            setInterpretation(data.response);

            localStorage.removeItem("text");
            localStorage.removeItem("additional");
        } catch (error) {
            console.error("❌ Error processing interpretation:", error);
            setInterpretation("Error processing dream interpretation.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Płatność zakończona powodzeniem</h2>
                <div className={styles.interpretationBox}>
                    <h3>Twoja analiza snu</h3>
                    {interpretation ? (
                        <p className={styles.interpretation}>{interpretation}</p>
                    ) : (
                        <div className={styles.loading}>
                            <div className={styles.spinner}></div>
                            <p>Analiza w trakcie...</p>
                        </div>
                    )}
                </div>
                <button 
                    className={styles.button} 
                    onClick={() => navigate('/')}
                >
                    Strona Główna
                </button>
            </div>
        </div>
    );
}