import React, { useState, useEffect } from 'react';
import UserInput from '../UserInput/UserInput';

export default function CoreSection({ loading, setLoading }) {
    const [userInput, setUserInput] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    useEffect(() => {
        console.log("🔥 User input updated:", userInput);
    }, [userInput]);

    useEffect(() => {
        console.log("🔥 Additional info updated:", additionalInfo);
    }, [additionalInfo]);

    const handleProceedToPayment = async () => {
        console.log("🚀 Proceed to Payment button clicked");
        const truncatedText = userInput.length > 200 ? userInput.substring(0, 200) + "..." : userInput;
        const truncatedAdditional = additionalInfo.length > 200 ? additionalInfo.substring(0, 200) + "..." : additionalInfo;

        try {
            const response = await fetch('https://cyber-dream-be-test.up.railway.app/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: 100, 
                    text: userInput,  // Full version sent to backend
                    additional: additionalInfo,  // Full additional info
                    truncatedText, // Truncated version for Stripe
                    truncatedAdditional, // Truncated version for Stripe
                }),
            });
    
            console.log("📨 Request sent to backend");
    
            const data = await response.json();
            console.log("📩 Backend response:", data);
    
            if (data && data.url) {
                console.log("✅ Redirecting to:", data.url);
                window.location.href = data.url;
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

            <button
                className="core-button"
                onClick={handleProceedToPayment}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Proceed to Payment'}
            </button>
        </section>
    );
}
