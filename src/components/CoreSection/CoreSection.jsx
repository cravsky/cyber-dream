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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: userInput, additional: additionalInfo }),
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (error) {
            setResponse('Error fetching interpretation');
        } finally {
            setLoading(false);
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
                onClick={() => {
                    setShowPayment(true);
                    setAwaitingPayment(true);
                }}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Proceed to Payment'}
            </button>

            {showPayment && (
                <CheckoutForm userInput={userInput} additionalInfo={additionalInfo} />
            )}

            {!loading && response && <p className="response-box">{response}</p>}
        </section>
    );
}
