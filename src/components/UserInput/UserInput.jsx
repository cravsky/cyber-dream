import React from 'react';
import styles from './UserInput.module.css';

export default function UserInput({ 
    userInput, 
    setUserInput, 
    additionalInfo, 
    setAdditionalInfo,
    showDreamError 
}) {
    const handleFileDrop = (event, setter) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = (e) => {
                setter(e.target.result);
            };
            reader.readAsText(file);
        } else {
            alert('Proszę upuścić plik tekstowy (.txt).');
        }
    };

    return (
        <div className={styles.container}>
            <label className={`${styles.label} ${showDreamError ? styles.error : ''}`}>
                <span>Opisz swój sen</span>
                <textarea
                    className={styles.textarea}
                    placeholder="Śniło mi się, że spaceruję po lesie pełnym drzew, które świecą delikatnym, niebieskim światłem. Nagle napotykam lisa, który mówi ludzkim głosem i zaprasza mnie do ukrytej biblioteki..."
                    value={userInput}
                    onChange={e => setUserInput(e.target.value)}
                    onDrop={e => handleFileDrop(e, setUserInput)}
                    onDragOver={e => e.preventDefault()}
                />
                {showDreamError && (
                    <span className={styles.errorMessage}>
                        Proszę opisać swój sen
                    </span>
                )}
            </label>
            <label className={styles.label}>
                <span>Dodatkowe informacje</span>
                <textarea
                    className={styles.textarea}
                    placeholder="Teresa. Jestem dojrzałą kobietą, szukam lepszej pracy. Sen był przyjemny."
                    value={additionalInfo}
                    onChange={e => setAdditionalInfo(e.target.value)}
                    onDrop={e => handleFileDrop(e, setAdditionalInfo)}
                    onDragOver={e => e.preventDefault()}
                />
            </label>
        </div>
    );
}