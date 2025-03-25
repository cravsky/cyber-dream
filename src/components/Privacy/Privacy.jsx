import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import styles from './Privacy.module.css';

export default function Privacy() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <button 
                    className={styles.closeButton}
                    onClick={() => navigate('/')}
                    aria-label="Close privacy policy"
                >
                    <FaTimes />
                </button>
                <h1>Polityka Prywatności</h1>
                
                <section>
                    <h2>1. Informacje ogólne</h2>
                    <p>1.1. Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych użytkowników serwisu sennik.dev.</p>
                    <p>1.2. Administratorem danych osobowych jest sennik.dev.</p>
                </section>

                <section>
                    <h2>2. Dane osobowe</h2>
                    <p>2.1. Podczas korzystania z serwisu możemy zbierać następujące dane:</p>
                    <p>- Treść wprowadzonych snów</p>
                    <p>- Informacje dodatkowe podane przez użytkownika</p>
                    <p>- Dane związane z płatnościami (przetwarzane przez Stripe)</p>
                </section>

                <section>
                    <h2>3. Cel przetwarzania danych</h2>
                    <p>3.1. Dane są przetwarzane w celu:</p>
                    <p>- Świadczenia usług interpretacji snów</p>
                    <p>- Obsługi płatności</p>
                    <p>- Poprawy jakości usług</p>
                </section>

                <section>
                    <h2>4. Bezpieczeństwo danych</h2>
                    <p>4.1. Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić dane osobowe.</p>
                    <p>4.2. Dane są przechowywane na bezpiecznych serwerach.</p>
                </section>

                <section>
                    <h2>5. Prawa użytkownika</h2>
                    <p>5.1. Użytkownik ma prawo do:</p>
                    <p>- Dostępu do swoich danych</p>
                    <p>- Sprostowania danych</p>
                    <p>- Usunięcia danych</p>
                    <p>- Ograniczenia przetwarzania</p>
                </section>
            </div>
        </div>
    );
}