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
        <section className='p-5 text-center mx-auto'>
            <div className='max-w-lg mx-auto'>
                <label className="block text-center mb-2">
                    <div className="label">
                        <span className="label-text">Opisz swój sen</span>
                    </div>
                    <textarea
                        className="textarea textarea-bordered textarea-primary h-24 w-full max-w-xl"
                        placeholder="Np. śniło mi się, że..."
                        onChange={e => setUserInput(e.target.value)}
                    />
                </label>
                <label className="block text-center mb-2">
                    <div className="label">
                        <span className="label-text">Dodatkowe informacje</span>
                    </div>
                    <textarea
                        className="textarea textarea-bordered textarea-secondary h-24 w-full max-w-xl"
                        placeholder="Np. jestem studentem informatyki, niedawno rozstałem się z dziewczyną..."
                        onChange={e => setAdditionalInfo(e.target.value)}
                    />
                </label>
            </div>

            <button
                className="btn btn-primary mt-2 mx-2"
                onClick={() => getInterpretation(requestUrl)}
                disabled={loading}
            >
                {loading ? 'Ładowanie...' : 'PROD'}
            </button>
            <button
                className="btn btn-primary mt-2"
                onClick={() => getInterpretation(requestTestUrl)}
                disabled={loading}
            >
                {loading ? 'Ładowanie...' : 'TEST'}
            </button>

            {loading && (
                <div className="flex justify-center items-center mt-4">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
                </div>
            )}
            {!loading && response && (
                <p
                    className="max-w-lg mx-auto py-4 px-4 text-left border border-gray-300 bg-white bg-opacity-30 text-gray-900 rounded-lg shadow-md backdrop-blur-md break-words overflow-auto max-h-60">
                    {response}
                </p>
            )}
        </section>
    );
}
