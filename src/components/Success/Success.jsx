import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const navigate = useNavigate();
    const [interpretation, setInterpretation] = useState('');

    useEffect(() => {
            fetchInterpretation();
    }, []);

    const fetchInterpretation = async () => {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

        // ✅ Get saved dream data from localStorage
        const storedText = localStorage.getItem("text");
        const storedAdditional = localStorage.getItem("additional");

        if (!storedText) {
            setInterpretation("❌ No dream data found. Please try again.");
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}/api/interpret-dream`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: storedText, additional: storedAdditional }),
            });

            const data = await response.json();
            setInterpretation(data.response);

            // ✅ Remove stored input after successful interpretation
            localStorage.removeItem("text");
            localStorage.removeItem("additional");

        } catch (error) {
            console.error("❌ Error processing interpretation:", error);
            setInterpretation("Error processing dream interpretation.");
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
