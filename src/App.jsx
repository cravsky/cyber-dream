// Updated App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Manual from './components/Manual/Manual';
import CoreSection from './components/CoreSection/CoreSection';
import FAQ from './components/FAQ/FAQ';
import Credentials from './components/Credentials/Credentials';
import Footer from './components/Footer/Footer';
import Cancel from './components/Cancel/Cancel';
import Success from './components/Success/Success';
import './App.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function App() {
    const [loading, setLoading] = useState(false);

    return (
        <Router>
            <div className="app-background">
                <Navbar />
                <Hero />
                <Manual />
                <Elements stripe={stripePromise}>
                    <CoreSection loading={loading} setLoading={setLoading} />
                </Elements>
                <FAQ />
                <Credentials />
                <Footer />
                <Routes>
                    <Route path="/cancel" element={<Cancel />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
