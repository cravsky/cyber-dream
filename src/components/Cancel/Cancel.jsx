import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cancel() {
    const navigate = useNavigate();

    return (
        <div className="cancel-container">
            <h2>Payment Canceled</h2>
            <p>Your payment was canceled. You can try again or return to the home page.</p>
            <button onClick={() => navigate('/')}>Go Back Home</button>
        </div>
    );
}
