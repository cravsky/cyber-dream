import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CoreSection from './components/CoreSection/CoreSection';
import Header from './components/Header/Header';
import Cancel from './components/Cancel/Cancel'; // Ensure correct path
import './App.css';

const stripePromise = loadStripe('pk_live_51R0gyAHdQdAkXWXbdog3sxyFR6LXv0ePL8Y2asJjlEyun6qVX7BK1HiiaNBoP2JFNQP8bqshPIpFRBCLnGfDYuQQ004cDF9XY4');

function App() {
    const [loading, setLoading] = useState(false);

    return (
        <Router>
            <div className="app-background">
                <Header />
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <Elements stripe={stripePromise}>
                                <CoreSection loading={loading} setLoading={setLoading} />
                            </Elements>
                        } 
                    />
                    <Route path="/cancel" element={<Cancel />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
