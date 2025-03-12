import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Success() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const sessionId = queryParams.get("sessionId");
    const [interpretation, setInterpretation] = useState('');

    useEffect(() => {
        if (sessionId) {
            fetchInterpretation();
        }
    }, [sessionId]);

    const fetchInterpretation = async () => {
        try {
            const response = await fetch(`https://cyber-dream-be-test.up.railway.app/api/get-interpretation?sessionId=${sessionId}`);
            const data = await response.json();
            setInterpretation(data.response);
        } catch (error) {
            setInterpretation('Error fetching interpretation');
        }
    };

    return (
        <div className="success-container">
            <h2>Payment Successful!</h2>
            <p>Your dream interpretation:</p>
            <p>{interpretation || 'Fetching interpretation...'}</p>
            <button onClick={() => navigate('/')}>Go Back Home</button>
        </div>
    );
}
