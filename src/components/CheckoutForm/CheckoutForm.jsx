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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            setMessage('Stripe is not loaded');
            console.error("Stripe is not available.");
            setLoading(false);
            return;
        }

        console.log("Attempting to create payment intent...");

        // Call backend to create PaymentIntent
        const response = await fetch('https://cyber-dream-be-test.up.railway.app/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 5000, currency: 'usd' })
        });

        const data = await response.json();
        console.log("Received client secret:", data);

        if (!data.clientSecret) {
            setMessage('Failed to generate payment intent.');
            setLoading(false);
            return;
        }

        const result = await stripe.confirmCardPayment(data.clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        });

        if (result.error) {
            console.error("Payment Error:", result.error.message);
            setMessage(result.error.message);
        } else {
            console.log("Payment Successful:", result);
            setMessage('Payment successful!');
            onSuccess(); // Trigger interpretation after successful payment
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <h2>Complete Your Payment</h2>
            <CardElement />
            <button type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
            {message && <p>{message}</p>}
        </form>
    );
}
