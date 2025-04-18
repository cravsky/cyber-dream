import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import styles from './Privacy.module.css';
import privacyContent from '../../data/privacy.md?raw';

export default function Privacy() {
    const navigate = useNavigate();
    const location = useLocation();
    const { modalOpen, formData } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClose = () => {
        if (modalOpen) {
            navigate('/', { state: { openModal: true, formData } });
        } else {
            navigate('/');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <button
                    className={styles.closeButton}
                    onClick={handleClose}
                    aria-label="Close privacy policy"
                >
                    <FaTimes />
                </button>
                <div className={styles.markdown}>
                    <ReactMarkdown>{privacyContent}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}