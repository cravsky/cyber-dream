import React, { useState, useEffect } from 'react';
import UserInput from '../UserInput/UserInput';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

export default function CoreSection({ loading, setLoading }) {
    const [userInput, setUserInput] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [response, setResponse] = useState('');
    const [showPayment, setShowPayment] = useState(false);
    const [awaitingPayment, setAwaitingPayment] = useState(false);

    useEffect(() => {
        console.log("showPayment state updated:", showPayment);
    }, [showPayment]);

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
        console.log("Payment Successful, Fetching Interpretation...");
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

            <button
                className="core-button"
                onClick={() => {
                    console.log("PROD button clicked, showing payment form...");
                    setShowPayment(true);
                    setAwaitingPayment(true);
                }}
                disabled={loading}
            >
                {loading ? 'Ładowanie...' : 'PROD'}
            </button>

            {/* Show payment form if triggered */}
            {showPayment ? <CheckoutForm onSuccess={handlePaymentSuccess} /> : <p>Payment form is hidden.</p>}

            {/* Display response after successful payment */}
            {!loading && response && <p className="response-box">{response}</p>}
        </section>
    );
}
