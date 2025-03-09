// CheckoutForm.jsx
import React, { useState } from 'react';

export default function CheckoutForm({ onSuccess }) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handlePayment = async () => {
        setLoading(true);

        try {
            const response = await fetch('https://cyber-dream-be-test.up.railway.app/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 100, currency: 'pln', }) // ✅ Ensure 5 PLN (500 grosze)
            });

            const { url } = await response.json();

            if (url) {
                window.location.href = url; // Redirect user to Stripe Checkout
            } else {
                setMessage('Error creating checkout session');
            }
        } catch (error) {
            setMessage('Payment request failed');
        }

        setLoading(false);
    };

    return (
        <div className="checkout-container">
            <h2>Complete Your Payment</h2>
            <button onClick={handlePayment} disabled={loading}>
                {loading ? 'Redirecting...' : 'Proceed to Payment'}
            </button>
            {message && <p>{message}</p>}
        </div>
    );
}
