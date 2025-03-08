// CoreSection.jsx
import React, { useState } from 'react';

export default function CoreSection({ loading, setLoading }) {
    const [userInput, setUserInput] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [response, setResponse] = useState('');

    const requestUrl = 'https://cyber-dream-be-test.up.railway.app/api';
    const requestTestUrl = 'https://cyber-dream-be-test.up.railway.app/api/test';

    const getInterpretation = async (url) => {
        setLoading(true);
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({ text: userInput, additional: additionalInfo }),
                mode: 'cors',
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (error) {
            setResponse('Error fetching interpretation');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='core-section'>
            <div className='core-container'>
                <label className="core-label">
                    <span>Opisz swój sen</span>
                    <textarea
                        className="core-textarea"
                        placeholder="Np. śniło mi się, że..."
                        onChange={e => setUserInput(e.target.value)}
                    />
                </label>
                <label className="core-label">
                    <span>Dodatkowe informacje</span>
                    <textarea
                        className="core-textarea"
                        placeholder="Np. jestem studentem informatyki, niedawno rozstałem się z dziewczyną..."
                        onChange={e => setAdditionalInfo(e.target.value)}
                    />
                </label>
            </div>

            <button
                className="core-button"
                onClick={() => getInterpretation(requestUrl)}
                disabled={loading}
            >
                {loading ? 'Ładowanie...' : 'PROD'}
            </button>
            <button
                className="core-button"
                onClick={() => getInterpretation(requestTestUrl)}
                disabled={loading}
            >
                {loading ? 'Ładowanie...' : 'TEST'}
            </button>

            {loading && (
                <div className="loading-spinner"></div>
            )}
            {!loading && response && (
                <p className="response-box">{response}</p>
            )}
        </section>
    );
}
