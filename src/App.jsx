import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Manual from './components/Manual/Manual';
import CTA from './components/CTA/CTA';
import FAQ from './components/FAQ/FAQ';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Cancel from './components/Cancel/Cancel';
import Success from './components/Success/Success';
import styles from './App.module.css';
import './styles/globals.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function App() {
    return (
        <Router>
            <div className={styles.background}>
                <Navbar />
                <div className={styles.root}>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero />
                                <Manual />
                                <CTA />
                                <Testimonials />
                                <Footer />
                            </>
                        } />
                        <Route path="/cancel" element={<Cancel />} />
                        <Route path="/success" element={<Success />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;