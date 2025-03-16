import React, { useRef } from 'react';
import styles from './UserInput.module.css';

export default function UserInput({ userInput, setUserInput, additionalInfo, setAdditionalInfo }) {
    const inputRef = useRef(null);
    const additionalInputRef = useRef(null);

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
        <div className={styles.coreContainer}>
            <label className={styles.coreLabel}>
                <span>Opisz swój sen</span>
                <textarea
                    className={styles.coreTextarea}
                    placeholder="Np. śniło mi się, że..."
                    value={userInput}
                    onChange={e => setUserInput(e.target.value)}
                    onDrop={e => handleFileDrop(e, setUserInput)}
                    onDragOver={e => e.preventDefault()}
                    ref={inputRef}
                />
            </label>
            <label className={styles.coreLabel}>
                <span>Dodatkowe informacje</span>
                <textarea
                    className={styles.coreTextarea}
                    placeholder="Np. jestem studentem informatyki, niedawno rozstałem się z dziewczyną..."
                    value={additionalInfo}
                    onChange={e => setAdditionalInfo(e.target.value)}
                    onDrop={e => handleFileDrop(e, setAdditionalInfo)}
                    onDragOver={e => e.preventDefault()}
                    ref={additionalInputRef}
                />
            </label>
        </div>
    );
}
