// App.jsx
import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CoreSection from './components/CoreSection/CoreSection';
import Header from './components/Header/Header';
import './App.css';

// Load Stripe with publishable key
const stripePromise = loadStripe('pk_live_51R0gyAHdQdAkXWXbdog3sxyFR6LXv0ePL8Y2asJjlEyun6qVX7BK1HiiaNBoP2JFNQP8bqshPIpFRBCLnGfDYuQQ004cDF9XY4');

function App() {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <div className="app-background">
                <Header />
                <Elements stripe={stripePromise}>
                    <CoreSection loading={loading} setLoading={setLoading} />
                </Elements>
            </div>
        </>
    );
}

export default App;
