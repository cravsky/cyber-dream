import React, { useState } from 'react';
import UserInput from '../UserInput/UserInput';
import styles from './CoreSection.module.css';

export default function CoreSection({ loading }) {
    const [userInput, setUserInput] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleProceedToPayment = async () => {
        localStorage.setItem("text", userInput);
        localStorage.setItem("additional", additionalInfo);

        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

        try {
            const response = await fetch(`${BACKEND_URL}/api/payment/create-checkout-session`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    amount: 200, 
                    text: userInput,
                    additional: additionalInfo 
                }),
            });

            const data = await response.json();
            if (data && data.url) {
                // Store session ID for later use
                localStorage.setItem("sessionId", data.sessionId);
                window.location.href = data.url;
            } else {
                console.error("❌ Error: No URL received from backend");
            }
        } catch (error) {
            console.error("❌ Payment request failed:", error);
        }
    };

    return (
        <section id="core" className={styles.coreSection}>
            <h2 className={styles.title}>Analizuj</h2>
            <UserInput
                userInput={userInput}
                setUserInput={setUserInput}
                additionalInfo={additionalInfo}
                setAdditionalInfo={setAdditionalInfo}
            />
            <button 
                className={styles.coreButton} 
                onClick={handleProceedToPayment} 
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Rozpocznij analizę'}
            </button>
        </section>
    );
}
