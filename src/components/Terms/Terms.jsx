import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import styles from './Terms.module.css';

export default function Terms() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <button 
                    className={styles.closeButton}
                    onClick={() => navigate('/')}
                    aria-label="Close terms"
                >
                    <FaTimes />
                </button>
                <h1>Regulamin</h1>
                
                <section>
                    <h2>1. Postanowienia ogólne</h2>
                    <p>1.1. Niniejszy regulamin określa zasady korzystania z serwisu sennik.dev.</p>
                    <p>1.2. Korzystanie z serwisu oznacza akceptację niniejszego regulaminu.</p>
                </section>

                <section>
                    <h2>2. Usługi</h2>
                    <p>2.1. Serwis świadczy usługi w zakresie interpretacji snów przy pomocy sztucznej inteligencji.</p>
                    <p>2.2. Interpretacje są generowane automatycznie i mają charakter orientacyjny.</p>
                </section>

                <section>
                    <h2>3. Płatności</h2>
                    <p>3.1. Opłaty za usługi są pobierane z góry.</p>
                    <p>3.2. Płatności są realizowane za pośrednictwem serwisu Stripe.</p>
                </section>

                <section>
                    <h2>4. Odpowiedzialność</h2>
                    <p>4.1. Serwis nie ponosi odpowiedzialności za decyzje podjęte na podstawie interpretacji snów.</p>
                    <p>4.2. Użytkownik korzysta z serwisu na własną odpowiedzialność.</p>
                </section>

                <section>
                    <h2>5. Postanowienia końcowe</h2>
                    <p>5.1. Regulamin wchodzi w życie z dniem publikacji.</p>
                    <p>5.2. Serwis zastrzega sobie prawo do zmiany regulaminu.</p>
                </section>
            </div>
        </div>
    );
}