import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import UserInput from '../UserInput/UserInput';
import styles from './DreamAnalysisForm.module.css';

export default function DreamAnalysisForm({
  userInput,
  setUserInput,
  additionalInfo,
  setAdditionalInfo,
  email,
  setEmail,
  termsAccepted,
  setTermsAccepted,
  showTermsError,
  showEmailError,
  showDreamError,
  loading,
  onSubmit,
  onCancel,
  onTest // REMOVE LATER
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
        setUserInput={setUserInput}
        additionalInfo={additionalInfo}
        setAdditionalInfo={setAdditionalInfo}
        showDreamError={showDreamError}
      />
      <div className={styles.emailContainer}>
        <label className={`${styles.emailLabel} ${showEmailError ? styles.error : ''}`}>
          <span>Adres e-mail do obsługi płatnosci</span>
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
          onClick={onCancel}
          disabled={loading}
        >
          Anuluj
        </button>
        {/* <button 
          className={styles.submitButton} 
          onClick={onSubmit}
          disabled={loading}
        >
          {loading ? 'Przetwarzanie...' : 'Rozpocznij analizę'}
        </button> */}
        {/* TEST BUTTON REMOVE LATER */}
        <button 
          className={styles.submitButton} 
          onClick={onTest} 
          disabled={loading}
        >
          {loading ? 'Przetwarzanie...' : 'Analizuj (test)'}
        </button>
      </div>
    </div>
  );
}