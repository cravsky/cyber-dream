import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Manual from './components/Manual/Manual';
import CTA from './components/CTA/CTA';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Cancel from './components/Cancel/Cancel';
import Success from './components/Success/Success';
import Terms from './components/Terms/Terms';
import Privacy from './components/Privacy/Privacy';
import './styles/globals.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function App() {
    return (
        <Router>
            <Layout>
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
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;