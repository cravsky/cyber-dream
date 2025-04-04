import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import styles from './Cancel.module.css';

export default function Cancel() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    <FaTimes />
                </div>
                <h2>Płatność anulowana</h2>
                <p>Twoja płatność została anulowana. Możesz spróbować ponownie w dowolnym momencie.</p>
                <button onClick={() => navigate('/')}>
                    Strona Główna
                </button>
            </div>
        </div>
    );
}