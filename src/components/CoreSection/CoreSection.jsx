import React, { useState } from 'react';
import UserInput from '../UserInput/UserInput';
import styles from './CoreSection.module.css';

export default function CoreSection({ onClose }) {
    const [userInput, setUserInput] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [loading, setLoading] = useState(false);

    const handleProceedToPayment = async () => {
        if (!userInput.trim()) {
            alert('Please describe your dream first.');
            return;
        }

        setLoading(true);
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
                localStorage.setItem("sessionId", data.sessionId);
                window.location.href = data.url;
            } else {
                console.error("❌ Error: No URL received from backend");
                setLoading(false);
            }
        } catch (error) {
            console.error("❌ Payment request failed:", error);
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Analizuj swój sen</h2>
            <UserInput
                userInput={userInput}
                setUserInput={setUserInput}
                additionalInfo={additionalInfo}
                setAdditionalInfo={setAdditionalInfo}
            />
            <div className={styles.actions}>
                <button 
                    className={styles.cancelButton} 
                    onClick={onClose}
                    disabled={loading}
                >
                    Anuluj
                </button>
                <button 
                    className={styles.submitButton} 
                    onClick={handleProceedToPayment}
                    disabled={loading}
                >
                    {loading ? 'Przetwarzanie...' : 'Rozpocznij analizę'}
                </button>
            </div>
        </div>
    );
}