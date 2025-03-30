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
    const DREAM_LIMIT = 1600;
    const ADDITIONAL_LIMIT = 200;
    const [isRecording, setIsRecording] = useState(false);
    const [activeTextarea, setActiveTextarea] = useState(null);

    const handleFileDrop = (event, setter, limit) => {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer.files[0];
        handleFileInput(file, setter, limit);
    };

    const handleFileInput = (file, setter, limit) => {
        if (file && file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                setter(text.slice(0, limit));
            };
            reader.readAsText(file);
        } else {
            alert('Proszę wybrać plik tekstowy (.txt).');
        }
    };

    const handleInputChange = (e, setter, limit) => {
        e.stopPropagation();
        const text = e.target.value;
        if (text.length <= limit) {
            setter(text);
        }
    };

    const handleFileClick = (e, setter, limit) => {
        e.preventDefault();
        e.stopPropagation();
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.txt';
        input.onchange = (e) => {
            const file = e.target.files[0];
            handleFileInput(file, setter, limit);
        };
        input.click();
    };

    const startSpeechRecognition = (e, setter, limit) => {
        e.preventDefault();
        e.stopPropagation();
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.lang = 'pl-PL';
            recognition.continuous = true;
            recognition.interimResults = true;

            let finalTranscript = '';

            recognition.onstart = () => {
                setIsRecording(true);
                setActiveTextarea(setter);
            };

            recognition.onresult = (event) => {
                let interimTranscript = '';
                
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                        if (finalTranscript.length > limit) {
                            finalTranscript = finalTranscript.slice(0, limit);
                            recognition.stop();
                        }
                    } else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }
                
                setter(finalTranscript);
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
        } else {
            alert('Przepraszamy, Twoja przeglądarka nie wspiera rozpoznawania mowy.');
        }
    };

    return (
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
            <div className={`${styles.label} ${showDreamError ? styles.error : ''}`}>
                <div className={styles.labelRow}>
                    <span>Opisz swój sen</span>
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
                </div>
                <div className={styles.textareaWrapper}>
                    <textarea
                        className={styles.textarea}
                        placeholder="Śniło mi się, że spaceruję po lesie pełnym drzew, które świecą delikatnym, niebieskim światłem. Nagle napotykam lisa, który mówi ludzkim głosem i zaprasza mnie do ukrytej biblioteki..."
                        value={userInput}
                        onChange={(e) => handleInputChange(e, setUserInput, DREAM_LIMIT)}
                        onDrop={(e) => handleFileDrop(e, setUserInput, DREAM_LIMIT)}
                        onDragOver={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
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
            <div className={styles.label}>
                <div className={styles.labelRow}>
                    <span>Dodatkowe informacje</span>
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
                </div>
                <div className={styles.textareaWrapper}>
                    <textarea
                        className={styles.textarea}
                        placeholder="Teresa. Jestem dojrzałą kobietą, szukam lepszej pracy. Sen był przyjemny."
                        value={additionalInfo}
                        onChange={(e) => handleInputChange(e, setAdditionalInfo, ADDITIONAL_LIMIT)}
                        onDrop={(e) => handleFileDrop(e, setAdditionalInfo, ADDITIONAL_LIMIT)}
                        onDragOver={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
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