import React, { useState } from 'react';
import UserInput from '../UserInput/UserInput';

export default function CoreSection({ loading }) {
    const [userInput, setUserInput] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleProceedToPayment = async () => {
        console.log("🚀 Proceed to Payment button clicked");

        // ✅ Store user input in localStorage before checkout
        localStorage.setItem("text", userInput);
        localStorage.setItem("additional", additionalInfo);

        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

        try {
            const response = await fetch(`${BACKEND_URL}/create-checkout-session`, {
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
                window.location.href = data.url; // ✅ Redirect to Stripe
            } else {
                console.error("❌ Error: No URL received from backend");
            }
        } catch (error) {
            console.error("❌ Payment request failed:", error);
        }
    };

    return (
        <section className='core-section'>
            <UserInput
                userInput={userInput}
                setUserInput={setUserInput}
                additionalInfo={additionalInfo}
                setAdditionalInfo={setAdditionalInfo}
            />

            <button className="core-button" onClick={handleProceedToPayment} disabled={loading}>
                {loading ? 'Loading...' : 'Proceed to Payment'}
            </button>
        </section>
    );
}
