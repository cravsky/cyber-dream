import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import styles from './Success.module.css';

export default function Success() {
    const navigate = useNavigate();
    const [interpretation, setInterpretation] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchInterpretation();
    }, []);

    const fetchInterpretation = async () => {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

        const storedText = localStorage.getItem("text");
        const storedAdditional = localStorage.getItem("additional");
        const sessionId = localStorage.getItem("sessionId");

        if (!storedText) {
            setInterpretation("❌ No dream data found. Please try again.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}/api/interpret/dream`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                  sessionId, // NEW!
                  text: storedText, 
                  additional: storedAdditional 
                }),
              });

            const data = await response.json();
            setInterpretation(data.response);
            setIsLoading(false);

            localStorage.removeItem("text");
            localStorage.removeItem("additional");
        } catch (error) {
            console.error("❌ Error processing interpretation:", error);
            setInterpretation("Error processing dream interpretation.");
            setIsLoading(false);
        }
    };

    const handleDownloadPDF = () => {
        const dreamText = localStorage.getItem("text") || "Brak opisu snu.";
        const doc = new jsPDF();
    
        // Title
        doc.setFontSize(18);
        doc.text("Interpretacja snu", 105, 20, null, null, "center");
    
        // Dream description
        doc.setFontSize(14);
        doc.text("Opis snu:", 10, 40);
        doc.setFontSize(12);
        const dreamLines = doc.splitTextToSize(dreamText, 180);
        doc.text(dreamLines, 10, 50);
    
        // Interpretation content
        const interpretationStartY = 60 + dreamLines.length * 6;
        doc.setFontSize(14);
        doc.text("Interpretacja:", 10, interpretationStartY);
        doc.setFontSize(12);
        const interpretationLines = doc.splitTextToSize(interpretation || "Brak interpretacji.", 180);
        doc.text(interpretationLines, 10, interpretationStartY + 10);
    
        // Save as PDF
        doc.save("interpretacja-snu.pdf");
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Płatność zakończona powodzeniem</h2>
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
                            {/* <button 
                                className={styles.downloadButton}
                                onClick={handleDownloadPDF}
                            >
                                <FaDownload /> Pobierz interpretację
                            </button> */}
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
        </div>
    );
}