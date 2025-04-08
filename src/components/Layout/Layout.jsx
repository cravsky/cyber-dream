import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Manual from '../Manual/Manual';
import CTA from '../CTA/CTA';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import Cancel from '../Cancel/Cancel';
import Success from '../Success/Success';
import Terms from '../Terms/Terms';
import Privacy from '../Privacy/Privacy';
import DreamAnalysisModal from '../DreamAnalysisModal/DreamAnalysisModal';
import styles from './Layout.module.css';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';

function HomePage({ onAnalyzeClick }) {
  return (
    <>
      <Hero />
      <ScrollIndicator />
      <Manual />
      <CTA onAnalyzeClick={onAnalyzeClick} />
      <Testimonials />
      <Footer />
    </>
  );
}

export default function Layout() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);

  const isHome = location.pathname === '/';
  const isModalRoute = ['/success', '/cancel', '/terms', '/privacy'].includes(location.pathname);

  useEffect(() => {
    const { state } = location;
    if (state?.formData) {
      setFormData(state.formData);
    }
  }, [location]);

  const openModal = (data = null) => {
    setFormData(data);
    setShowModal(true);
  };

  return (
    <div className={styles.background}>
      <div className={`${styles.navbarWrapper} ${isModalRoute ? styles.blurred : ''}`}>
        <Navbar disabled={isModalRoute} onAnalyzeClick={openModal} />
      </div>
      <main className={styles.main}>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<HomePage onAnalyzeClick={openModal} />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/success" element={<Success />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
      </main>

      {isHome && showModal && (
        <DreamAnalysisModal
          onClose={() => setShowModal(false)}
          initialData={formData}
        />
      )}
    </div>
  );
}