// Success.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Success() {
    const location = useLocation();
    const navigate = useNavigate();
    const response = location.state?.response || "Payment was successful!";

    return (
        <div className="success-container">
            <h2>Payment Successful!</h2>
            <p>{response}</p>
            <button onClick={() => navigate('/')}>Go Back Home</button>
        </div>
    );
}
