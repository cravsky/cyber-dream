import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaStar, FaDownload } from 'react-icons/fa';
import styles from './Success.module.css';
import Feedback from '../Feedback/Feedback';
import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { generateDreamPDF } from '../../utils/pdfUtils';
import exampleDream from '../../data/exampleDream.json';

pdfMake.vfs = pdfFonts?.default?.vfs || pdfFonts.pdfMake?.vfs;

export default function Success() {
    const navigate = useNavigate();
    const location = useLocation();
    const [interpretation, setInterpretation] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [showFeedback, setShowFeedback] = useState(false);
    const [dreamText, setDreamText] = useState('');
    const [additional, setAdditional] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const isExample = urlParams.get("testSession") === "example";

        if (isExample) {
            setDreamText(exampleDream.text);
            setAdditional(exampleDream.additional);
            setInterpretation(exampleDream.interpretation);
            setIsLoading(false);
            return;
        }

        const testSessionId = urlParams.get("testSession");
        if (testSessionId) {
            localStorage.setItem("sessionId", testSessionId);
        }
        
        const sessionId = localStorage.getItem("sessionId");
    
        if (!sessionId) {
            navigate('/');
            return;
        }
    
        const storedText = localStorage.getItem("text") || "Brak opisu snu.";
        const storedAdditional = localStorage.getItem("additional") || "Brak dodatkowych informacji.";
    
        setDreamText(storedText);
        setAdditional(storedAdditional);
        fetchInterpretation(storedText, storedAdditional);
    }, []);

    const fetchInterpretation = async (text, additional) => {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
        const sessionId = localStorage.getItem("sessionId");

        if (!text) {
            setInterpretation("❌ Nie znaleziono danych snu. Spróbuj ponownie.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}/api/interpret/dream`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sessionId, text, additional }),
            });

            const data = await response.json();
            setInterpretation(data.response);
            setIsLoading(false);
        } catch (error) {
            console.error("❌ Error processing interpretation:", error);
            setInterpretation("Wystąpił błąd podczas przetwarzania interpretacji snu.");
            setIsLoading(false);
        }
    };

    const handleDownloadPDF = () => {
        generateDreamPDF({ dreamText, additional, interpretation });
        localStorage.removeItem("text");
        localStorage.removeItem("additional");
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Interpretacja Twojego Snu</h2>
                <div className={styles.interpretationBox}>
                    <h3>Twoja analiza snu</h3>
                    {isLoading ? (
                        <div className={styles.loading}>
                            <div className={styles.spinner}></div>
                            <p>Analiza w trakcie...</p>
                        </div>
                    ) : (
                        <>
                            <p className={styles.interpretation}>{interpretation}</p>
                            <div className={styles.actions}>
                                <button 
                                    className={styles.feedbackButton}
                                    onClick={() => setShowFeedback(true)}
                                >
                                    <FaStar /> Oceń interpretację
                                </button>
                                <button 
                                    className={styles.feedbackButton}
                                    onClick={handleDownloadPDF}
                                >
                                    <FaDownload /> Pobierz PDF
                                </button>
                            </div>
                        </>
                    )}
                </div>
                <button 
                    className={styles.button} 
                    onClick={() => navigate('/')}
                    disabled={isLoading}
                >
                    Strona Główna
                </button>
            </div>
            {showFeedback && (
                <Feedback onClose={() => setShowFeedback(false)} />
            )}
        </div>
    );
}