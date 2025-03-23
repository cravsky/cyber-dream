import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cancel.module.css';

export default function Cancel() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Płatność anulowana</h2>
                <p>Twoja płatność została anulowana.</p>
                <button onClick={() => navigate('/')}>Strona Główna</button>
            </div>
        </div>
    );
}