import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function CheckoutForm({ onSuccess }) {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        console.log("Stripe Loaded:", stripe);
    }, [stripe]);

    const handlePayment = async () => {
        setLoading(true);

        const response = await fetch('https://cyber-dream-be-test.up.railway.app/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        const { url } = await response.json();

        if (url) {
            window.location.href = url; // Redirect user to Stripe Checkout
        } else {
            setMessage('Error creating checkout session');
        }

        setLoading(false);
    };


    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <h2>Complete Your Payment</h2>
            <CardElement />
            <button onClick={handlePayment} disabled={loading}>
                {loading ? 'Redirecting...' : 'Proceed to Payment'}
            </button>
            {message && <p>{message}</p>}
        </form>
    );
}
