import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Success() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const response = queryParams.get("response") || "Payment was successful!";

    return (
        <div className="success-container">
            <h2>Payment Successful!</h2>
            <p>{decodeURIComponent(response)}</p>
            <button onClick={() => navigate('/')}>Go Back Home</button>
        </div>
    );
}
