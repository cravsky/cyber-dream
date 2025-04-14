import React, { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';
import styles from './UserInput.module.css';

export default function UserInput({
    userInput,
    setUserInput,
    additionalInfo,
    setAdditionalInfo,
    showDreamError
}) {
    const DREAM_LIMIT = 1500;
    const ADDITIONAL_LIMIT = 300;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const [fileInputRef1] = useState(() => React.createRef());
    const [fileInputRef2] = useState(() => React.createRef());

    const handleInputChange = (e, setter, limit) => {
        e.stopPropagation();
        const text = e.target.value;
        if (text.length <= limit) {
            setter(text);
        }
    };

    const handleFileChange = async (e, setter, limit) => {
        const file = e.target.files[0];
        if (!file) return;

        const extension = file.name.split('.').pop().toLowerCase();

        if (['txt'].includes(extension)) {
            const text = await file.text();
            if (text.length <= limit) {
                setter(text);
            } else {
                alert(`Tekst przekracza limit ${limit} znaków`);
            }
        } else if (['doc', 'docx'].includes(extension)) {
            alert("Obsługa .doc i .docx jest jeszcze w wersji eksperymentalnej – spróbuj przekleić tekst ręcznie.");
        } else {
            alert("Obsługiwane są tylko pliki .txt, .doc, .docx");
        }
    };

    return (
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
            {/* Dream Description */}
            <div className={`${styles.inputGroup} ${showDreamError ? styles.error : ''}`}>
                <div className={styles.labelRow}>
                    <span className={styles.label}>Opisz swój sen</span>
                    {!isMobile && (
                        <div className={styles.controls}>
                            <label className={styles.controlButton} title="Wczytaj plik .txt">
                                <FaFileUpload />
                                <input
                                    type="file"
                                    ref={fileInputRef1}
                                    accept=".txt,text/plain,text/*"
                                    style={{ display: 'none' }}
                                    onChange={(e) => handleFileChange(e, setUserInput, DREAM_LIMIT)}
                                />
                            </label>
                        </div>
                    )}
                </div>
                <div className={styles.textareaWrapper}>
                    <textarea
                        className={styles.textarea}
                        placeholder="Śniło mi się, że spaceruję po lesie pełnym drzew..."
                        value={userInput}
                        onChange={(e) => handleInputChange(e, setUserInput, DREAM_LIMIT)}
                        maxLength={DREAM_LIMIT}
                        onClick={(e) => e.stopPropagation()}
                    />
                    {userInput.length >= 1000 && (
                        <span className={styles.counter}>
                            {userInput.length}/{DREAM_LIMIT}
                        </span>
                    )}
                </div>
                {showDreamError && (
                    <span className={styles.errorMessage}>
                        Proszę opisać swój sen
                    </span>
                )}
            </div>

            {/* Additional Info */}
            <div className={styles.inputGroup}>
                <div className={styles.labelRow}>
                    <span className={styles.label}>Dodatkowe informacje</span>
                    {!isMobile && (
                        <div className={styles.controls}>
                            <label className={styles.controlButton} title="Wczytaj plik .txt">
                                <FaFileUpload />
                                <input
                                    type="file"
                                    ref={fileInputRef2}
                                    accept=".txt,text/plain,text/*"
                                    style={{ display: 'none' }}
                                    onChange={(e) => handleFileChange(e, setAdditionalInfo, ADDITIONAL_LIMIT)}
                                />
                            </label>
                        </div>
                    )}
                </div>
                <div className={styles.textareaWrapper}>
                    <textarea
                        className={styles.textarea}
                        placeholder="Teresa. Jestem dojrzałą kobietą, szukam lepszej pracy..."
                        value={additionalInfo}
                        onChange={(e) => handleInputChange(e, setAdditionalInfo, ADDITIONAL_LIMIT)}
                        maxLength={ADDITIONAL_LIMIT}
                        onClick={(e) => e.stopPropagation()}
                    />
                    {additionalInfo.length >= 100 && (
                        <span className={styles.counter}>
                            {additionalInfo.length}/{ADDITIONAL_LIMIT}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}