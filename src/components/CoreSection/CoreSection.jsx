import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserInput from '../UserInput/UserInput';
import styles from './CoreSection.module.css';

export default function CoreSection({ onClose, initialData }) {
    const [userInput, setUserInput] = useState(initialData?.userInput || '');
    const [additionalInfo, setAdditionalInfo] = useState(initialData?.additionalInfo || '');
    const [email, setEmail] = useState(initialData?.email || '');
    const [loading, setLoading] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(initialData?.termsAccepted || false);
    const [showTermsError, setShowTermsError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showDreamError, setShowDreamError] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

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

    const handleTermsChange = (e) => {
        setTermsAccepted(e.target.checked);
        if (e.target.checked) {
            setShowTermsError(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (showEmailError && validateEmail(e.target.value)) {
            setShowEmailError(false);
        }
    };

    const handleDreamChange = (value) => {
        setUserInput(value);
        if (showDreamError && value.trim()) {
            setShowDreamError(false);
        }
    };

    const handleNavigation = (path) => {
        navigate(path, {
            state: {
                previousPath: location.pathname,
                modalOpen: true,
                formData: {
                    userInput,
                    additionalInfo,
                    email,
                    termsAccepted
                }
            }
        });
    };

    return (
        <div className={styles.container}>
            <h2>Analizuj swój sen</h2>
            <UserInput
                userInput={userInput}
                setUserInput={handleDreamChange}
                additionalInfo={additionalInfo}
                setAdditionalInfo={setAdditionalInfo}
                showDreamError={showDreamError}
            />
            <div className={styles.emailContainer}>
                <label className={`${styles.emailLabel} ${showEmailError ? styles.error : ''}`}>
                    <span>Adres e-mail do faktury</span>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="twoj@email.com"
                        className={styles.emailInput}
                    />
                    {showEmailError && (
                        <span className={styles.errorMessage}>
                            Proszę podać prawidłowy adres e-mail
                        </span>
                    )}
                </label>
            </div>
            <div className={styles.termsContainer}>
                <label className={`${styles.termsLabel} ${showTermsError ? styles.error : ''}`}>
                    <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={handleTermsChange}
                        className={styles.checkbox}
                    />
                    <span>
                        Oświadczam, że zapoznałem/am się z{' '}
                        <button 
                            className={styles.linkButton}
                            onClick={() => handleNavigation('/terms')}
                        >
                            Regulaminem
                        </button>{' '}
                        i{' '}
                        <button 
                            className={styles.linkButton}
                            onClick={() => handleNavigation('/privacy')}
                        >
                            Polityką Prywatności
                        </button>
                    </span>
                </label>
            </div>
            <div className={styles.actions}>
                <button 
                    className={styles.cancelButton} 
                    onClick={onClose}
                    disabled={loading}
                >
                    Anuluj
                </button>
                <button 
                    className={styles.submitButton} 
                    onClick={handleProceedToPayment}
                    disabled={loading}
                >
                    {loading ? 'Przetwarzanie...' : 'Rozpocznij analizę'}
                </button>
            </div>
        </div>
    );
}