import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import DreamAnalysisForm from '../DreamAnalysisForm/DreamAnalysisForm';
import styles from './DreamAnalysisModal.module.css';

export default function DreamAnalysisModal({ onClose, initialData }) {
  const [userInput, setUserInput] = useState(initialData?.userInput || '');
  const [additionalInfo, setAdditionalInfo] = useState(initialData?.additionalInfo || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(initialData?.termsAccepted || false);
  const [showTermsError, setShowTermsError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showDreamError, setShowDreamError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // Trigger the animation after a small delay
    requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for the animation to complete before unmounting
    setTimeout(() => {
      onClose();
    }, 300); // Match the transition duration
  };

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleProceedToPayment = async () => {
    let hasError = false;

    if (!termsAccepted) {
      setShowTermsError(true);
      hasError = true;
    }

    if (!email || !validateEmail(email)) {
      setShowEmailError(true);
      hasError = true;
    }

    if (!userInput.trim()) {
      setShowDreamError(true);
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);
    localStorage.setItem("text", userInput);
    localStorage.setItem("additional", additionalInfo);
    localStorage.setItem("email", email);

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

    try {
      const response = await fetch(`${BACKEND_URL}/api/payment/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amount: 200, 
          text: userInput,
          additional: additionalInfo,
          email: email
        }),
      });

      const data = await response.json();
      if (data && data.url) {
        localStorage.setItem("sessionId", data.sessionId);
        window.location.href = data.url;
      } else {
        console.error("❌ Error: No URL received from backend");
        setLoading(false);
      }
    } catch (error) {
      console.error("❌ Payment request failed:", error);
      setLoading(false);
    }
  };

  // TEST Function START - DELETE LATER
  // ***
  const handleTestPayment = async () => {
    let hasError = false;
  
    if (!termsAccepted) {
      setShowTermsError(true);
      hasError = true;
    }
  
    if (!email || !validateEmail(email)) {
      setShowEmailError(true);
      hasError = true;
    }
  
    if (!userInput.trim()) {
      setShowDreamError(true);
      hasError = true;
    }
  
    if (hasError) return;
  
    setLoading(true);
    localStorage.setItem("text", userInput);
    localStorage.setItem("additional", additionalInfo);
    localStorage.setItem("email", email);
  
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
  
    try {
      const response = await fetch(`${BACKEND_URL}/api/test/sandbox-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: userInput,
          additional: additionalInfo,
          email: email
        }),
      });
  
      const data = await response.json();
      if (data && data.url) {
        localStorage.setItem("sessionId", data.sessionId);
        localStorage.setItem("text", userInput);
        localStorage.setItem("additional", additionalInfo);
        localStorage.setItem("email", email);
        window.location.href = data.url;
      } else {
        console.error("❌ Sandbox: No URL received.");
      }
    } catch (err) {
      console.error("❌ Sandbox payment error:", err);
    } finally {
      setLoading(false);
    }
  };
  
  // ***
  // TEST Function STOP - DELETE LATER

  return createPortal(
    <div className={`${styles.overlay} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.modal}>
        <button 
          className={styles.closeButton} 
          onClick={handleClose}
          aria-label="Close modal"
        >
          ✖
        </button>
        <DreamAnalysisForm
          userInput={userInput}
          setUserInput={setUserInput}
          additionalInfo={additionalInfo}
          setAdditionalInfo={setAdditionalInfo}
          email={email}
          setEmail={setEmail}
          termsAccepted={termsAccepted}
          setTermsAccepted={setTermsAccepted}
          showTermsError={showTermsError}
          showEmailError={showEmailError}
          showDreamError={showDreamError}
          loading={loading}
          onSubmit={handleProceedToPayment}
          onCancel={handleClose}
          onTest={handleTestPayment} // REMOVE LATER
        />
      </div>
    </div>,
    document.body
  );
}