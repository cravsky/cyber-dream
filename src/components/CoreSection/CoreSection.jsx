import React, { useState, useEffect } from 'react';
import UserInput from '../UserInput/UserInput';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

export default function CoreSection({ loading, setLoading }) {
    const [userInput, setUserInput] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [response, setResponse] = useState('');
    const [showPayment, setShowPayment] = useState(false);
    const [awaitingPayment, setAwaitingPayment] = useState(false);

    // Debugging: Log state updates
    useEffect(() => {
        console.log("🔥 showPayment state updated:", showPayment);
    }, [showPayment]);

    useEffect(() => {
        console.log("🔥 awaitingPayment state updated:", awaitingPayment);
    }, [awaitingPayment]);

    const requestUrl = 'https://cyber-dream-be-test.up.railway.app/api';

    const getInterpretation = async () => {
        setLoading(true);
        try {
            const res = await fetch(requestUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({ text: userInput, additional: additionalInfo }),
                mode: 'cors',
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (error) {
            setResponse('Error fetching interpretation');
        } finally {
            setLoading(false);
        }
    };

    const handlePaymentSuccess = () => {
        console.log("✅ Payment successful! Hiding form...");
        setShowPayment(false);
        setAwaitingPayment(false);
        getInterpretation();
    };

    return (
        <section className='core-section'>
            <UserInput 
                userInput={userInput} 
                setUserInput={setUserInput} 
                additionalInfo={additionalInfo} 
                setAdditionalInfo={setAdditionalInfo} 
            />

            {/* Button to Trigger Payment */}
            <button
                className="core-button"
                onClick={() => {
                    console.log("🟢 PROD button clicked! Triggering payment form...");
                    setShowPayment(true);
                    setAwaitingPayment(true);
                    console.log("🔥 showPayment should now be:", true);
                }}
                disabled={loading}
            >
                {loading ? 'Ładowanie...' : 'PROD'}
            </button>

            {/* Debugging: Show current state */}
            <p>showPayment: {showPayment ? "✅ TRUE" : "❌ FALSE"}</p>

            {/* Show payment form if triggered */}
            {showPayment ? (
                <>
                    <p>✅ Payment form should now be visible!</p>
                    <CheckoutForm onSuccess={handlePaymentSuccess} />
                </>
            ) : (
                <p>❌ Payment form is hidden.</p>
            )}

            {/* Display response after successful payment */}
            {!loading && response && <p className="response-box">{response}</p>}
        </section>
    );
}
