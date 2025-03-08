// components/UserInput/UserInput.jsx
import React from 'react';

export default function UserInput({ userInput, setUserInput, additionalInfo, setAdditionalInfo }) {
    return (
        <div className='core-container'>
            <label className="core-label">
                <span>Opisz swój sen</span>
                <textarea
                    className="core-textarea"
                    placeholder="Np. śniło mi się, że..."
                    value={userInput}
                    onChange={e => setUserInput(e.target.value)}
                />
            </label>
            <label className="core-label">
                <span>Dodatkowe informacje</span>
                <textarea
                    className="core-textarea"
                    placeholder="Np. jestem studentem informatyki, niedawno rozstałem się z dziewczyną..."
                    value={additionalInfo}
                    onChange={e => setAdditionalInfo(e.target.value)}
                />
            </label>
        </div>
    );
}
