import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CoreSection from './components/CoreSection/CoreSection';
import Header from './components/Header/Header';
import Cancel from './components/Cancel/Cancel';
import Success from './components/Success/Success';
import './App.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);


function App() {
    const [loading, setLoading] = useState(false);

    return (
        <Router>
            <div className="app-background">
                <Header />
                <Routes>
                    <Route path="/" element={<Elements stripe={stripePromise}><CoreSection loading={loading} setLoading={setLoading} /></Elements>} />
                    <Route path="/cancel" element={<Cancel />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
