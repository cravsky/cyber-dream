import React from 'react';
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

    const handleFileDrop = (event, setter, limit) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                setter(text.slice(0, limit));
            };
            reader.readAsText(file);
        } else {
            alert('Proszę upuścić plik tekstowy (.txt).');
        }
    };

    const handleInputChange = (e, setter, limit) => {
        const text = e.target.value;
        if (text.length <= limit) {
            setter(text);
        }
    };

    return (
        <div className={styles.container}>
            <label className={`${styles.label} ${showDreamError ? styles.error : ''}`}>
                <span>Opisz swój sen</span>
                <div className={styles.textareaWrapper}>
                    <textarea
                        className={styles.textarea}
                        placeholder="Śniło mi się, że spaceruję po lesie pełnym drzew, które świecą delikatnym, niebieskim światłem. Nagle napotykam lisa, który mówi ludzkim głosem i zaprasza mnie do ukrytej biblioteki..."
                        value={userInput}
                        onChange={(e) => handleInputChange(e, setUserInput, DREAM_LIMIT)}
                        onDrop={(e) => handleFileDrop(e, setUserInput, DREAM_LIMIT)}
                        onDragOver={e => e.preventDefault()}
                        maxLength={DREAM_LIMIT}
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
            </label>
            <label className={styles.label}>
                <span>Dodatkowe informacje</span>
                <div className={styles.textareaWrapper}>
                    <textarea
                        className={styles.textarea}
                        placeholder="Teresa. Jestem dojrzałą kobietą, szukam lepszej pracy. Sen był przyjemny."
                        value={additionalInfo}
                        onChange={(e) => handleInputChange(e, setAdditionalInfo, ADDITIONAL_LIMIT)}
                        onDrop={(e) => handleFileDrop(e, setAdditionalInfo, ADDITIONAL_LIMIT)}
                        onDragOver={e => e.preventDefault()}
                        maxLength={ADDITIONAL_LIMIT}
                    />
                    {additionalInfo.length >= 100 && (
                        <span className={styles.counter}>
                            {additionalInfo.length}/{ADDITIONAL_LIMIT}
                        </span>
                    )}
                </div>
            </label>
        </div>
    );
}