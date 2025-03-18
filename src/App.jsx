import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Manual from './components/Manual/Manual';
import FAQ from './components/FAQ/FAQ';
import Credentials from './components/Credentials/Credentials';
import Footer from './components/Footer/Footer';
import Cancel from './components/Cancel/Cancel';
import Success from './components/Success/Success';
import './App.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function App() {
    return (
        <Router>
            <div className="app-background">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Manual />
                            <FAQ />
                            <Credentials />
                            <Footer />
                        </>
                    } />
                    <Route path="/cancel" element={<Cancel />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
