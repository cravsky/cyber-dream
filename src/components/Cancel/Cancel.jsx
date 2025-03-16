import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cancel.module.css';

export default function Cancel() {
    const navigate = useNavigate();

    return (
        <div className={styles.cancelContainer}>
            <h2>Payment Canceled</h2>
            <p>Your payment was canceled. You can try again or return to the home page.</p>
            <button className={styles.cancelButton} onClick={() => navigate('/')}>Go Back Home</button>
        </div>
    );
}
