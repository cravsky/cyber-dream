import React, { useState } from 'react';
import { FaFileUpload, FaMicrophone, FaSpinner } from 'react-icons/fa';
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
    const [isRecording, setIsRecording] = useState(false);
    const [activeTextarea, setActiveTextarea] = useState(null);

    const handleInputChange = (e, setter, limit) => {
        e.stopPropagation();
        const text = e.target.value;
        if (text.length <= limit) {
            setter(text);
        }
    };

    /* Uncomment to enable file upload feature
    const handleFileClick = async (e, setter, limit) => {
        e.stopPropagation();
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.txt';
        
        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (file) {
                const text = await file.text();
                if (text.length <= limit) {
                    setter(text);
                } else {
                    alert(`Text exceeds limit of ${limit} characters`);
                }
            }
        };
        
        input.click();
    };
    */

    /* Uncomment to enable voice recording feature
    const startSpeechRecognition = (e, setter, limit) => {
        e.stopPropagation();
        
        if (!('webkitSpeechRecognition' in window)) {
            alert('Speech recognition is not supported in this browser.');
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        
        recognition.onstart = () => {
            setIsRecording(true);
            setActiveTextarea(setter);
        };
        
        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');
                
            if (transcript.length <= limit) {
                setter(transcript);
            }
        };
        
        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            setIsRecording(false);
            setActiveTextarea(null);
        };
        
        recognition.onend = () => {
            setIsRecording(false);
            setActiveTextarea(null);
        };
        
        recognition.start();
    };
    */

    return (
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
            <div className={`${styles.inputGroup} ${showDreamError ? styles.error : ''}`}>
                <div className={styles.labelRow}>
                    <span className={styles.label}>Opisz swój sen</span>
                    {/* Uncomment to enable input controls
                    <div className={styles.controls}>
                        <button
                            type="button"
                            onClick={(e) => handleFileClick(e, setUserInput, DREAM_LIMIT)}
                            className={styles.controlButton}
                            title="Wczytaj plik tekstowy"
                        >
                            <FaFileUpload />
                        </button>
                        <button
                            type="button"
                            onClick={(e) => startSpeechRecognition(e, setUserInput, DREAM_LIMIT)}
                            className={`${styles.controlButton} ${isRecording && activeTextarea === setUserInput ? styles.recording : ''}`}
                            title="Rozpocznij dyktowanie"
                            disabled={isRecording && activeTextarea !== setUserInput}
                        >
                            {isRecording && activeTextarea === setUserInput ? <FaSpinner className={styles.spinner} /> : <FaMicrophone />}
                        </button>
                    </div>
                    */}
                </div>
                <div className={styles.textareaWrapper}>
                    <textarea
                        className={styles.textarea}
                        placeholder="Śniło mi się, że spaceruję po lesie pełnym drzew, które świecą delikatnym, niebieskim światłem. Nagle napotykam lisa, który mówi ludzkim głosem i zaprasza mnie do ukrytej biblioteki..."
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
            <div className={styles.inputGroup}>
                <div className={styles.labelRow}>
                    <span className={styles.label}>Dodatkowe informacje</span>
                    {/* Uncomment to enable input controls
                    <div className={styles.controls}>
                        <button
                            type="button"
                            onClick={(e) => handleFileClick(e, setAdditionalInfo, ADDITIONAL_LIMIT)}
                            className={styles.controlButton}
                            title="Wczytaj plik tekstowy"
                        >
                            <FaFileUpload />
                        </button>
                        <button
                            type="button"
                            onClick={(e) => startSpeechRecognition(e, setAdditionalInfo, ADDITIONAL_LIMIT)}
                            className={`${styles.controlButton} ${isRecording && activeTextarea === setAdditionalInfo ? styles.recording : ''}`}
                            title="Rozpocznij dyktowanie"
                            disabled={isRecording && activeTextarea !== setAdditionalInfo}
                        >
                            {isRecording && activeTextarea === setAdditionalInfo ? <FaSpinner className={styles.spinner} /> : <FaMicrophone />}
                        </button>
                    </div>
                    */}
                </div>
                <div className={styles.textareaWrapper}>
                    <textarea
                        className={styles.textarea}
                        placeholder="Teresa. Jestem dojrzałą kobietą, szukam lepszej pracy. Sen był przyjemny."
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