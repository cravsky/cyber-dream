import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Hero from './components/Hero/Hero';
import Manual from './components/Manual/Manual';
import CTA from './components/CTA/CTA';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Cancel from './components/Cancel/Cancel';
import Success from './components/Success/Success';
import Terms from './components/Terms/Terms';
import Privacy from './components/Privacy/Privacy';
import CoreModal from './components/CoreModal/CoreModal';
import Layout from './components/Layout/Layout';

import './styles/globals.css';

function HomePage({ onAnalyzeClick }) {
  return (
    <>
      <Hero />
      <Manual />
      <CTA onAnalyzeClick={onAnalyzeClick} />
      <Testimonials />
      <Footer />
    </>
  );
}

function InnerApp() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const { state } = location;
    // Only update formData — do NOT auto-open modal
    if (state?.formData) {
      setFormData(state.formData);
    }
  }, [location]);

  const openModal = (data = null) => {
    setFormData(data);
    setShowModal(true);
  };

  return (
    <>
      <Layout onAnalyzeClick={openModal}>
        <Routes>
          <Route path="/" element={<HomePage onAnalyzeClick={openModal} />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/success" element={<Success />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>

      {isHome && showModal && (
        <CoreModal
          onClose={() => setShowModal(false)}
          initialData={formData}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <InnerApp />
    </Router>
  );
}
