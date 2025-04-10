import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import styles from './Terms.module.css';

export default function Terms() {
    const navigate = useNavigate();
    const location = useLocation();
    const { previousPath, modalOpen, formData } = location.state || {};

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
                    aria-label="Close terms"
                >
                    <FaTimes />
                </button>
                <h1>Regulamin</h1>

                <section>
                    <h2>1. Informacje ogólne</h2>
                    <p>1.1. Niniejszy regulamin określa zasady świadczenia usług drogą elektroniczną w ramach serwisu <strong>sennik.dev</strong>.</p>
                    <p>1.2. Właścicielem serwisu i świadczącym usługę jest osoba fizyczna prowadząca nierejestrowaną działalność gospodarczą. Kontakt: <strong>kontakt@sennik.dev</strong>.</p>
                    <p>1.3. Korzystanie z serwisu oznacza akceptację niniejszego regulaminu oraz polityki prywatności.</p>
                </section>

                <section>
                    <h2>2. Charakter usługi</h2>
                    <p>2.1. Serwis umożliwia jednorazowe zamówienie interpretacji snu wygenerowanej przez system sztucznej inteligencji.</p>
                    <p>2.2. Interpretacje mają charakter poglądowy, rozrywkowy i subiektywny. Nie stanowią porady medycznej, psychologicznej ani zawodowej.</p>
                </section>

                <section>
                    <h2>3. Zamówienie i płatność</h2>
                    <p>3.1. Usługa jest płatna z góry, a płatności obsługiwane są przez operatora Stripe.</p>
                    <p>3.2. Po dokonaniu płatności użytkownik otrzymuje potwierdzenie transakcji oraz dostęp do interpretacji snu.</p>
                    <p>3.3. Nie wystawiamy faktur VAT, ponieważ usługa świadczona jest w ramach nierejestrowanej działalności gospodarczej. Użytkownik otrzymuje automatyczne potwierdzenie płatności od operatora Stripe na podany adres e-mail.</p>
                </section>

                <section>
                    <h2>4. Odpowiedzialność</h2>
                    <p>4.1. Serwis nie ponosi odpowiedzialności za decyzje podejmowane na podstawie otrzymanej interpretacji snu.</p>
                    <p>4.2. Użytkownik korzysta z serwisu dobrowolnie i na własną odpowiedzialność.</p>
                </section>

                <section>
                    <h2>5. Reklamacje i zwroty</h2>
                    <p>5.1. Z uwagi na charakter usługi cyfrowej, która realizowana jest natychmiast po dokonaniu płatności, użytkownik wyraża zgodę na utratę prawa do odstąpienia od umowy.</p>
                    <p>5.2. W przypadku problemów technicznych lub błędów można zgłosić reklamację mailowo: <strong>kontakt@sennik.dev</strong>.</p>
                </section>

                <section>
                    <h2>6. Postanowienia końcowe</h2>
                    <p>6.1. Regulamin może zostać zaktualizowany, a nowa wersja będzie publikowana w serwisie z odpowiednią datą.</p>
                    <p>6.2. W sprawach nieuregulowanych regulaminem zastosowanie mają przepisy prawa polskiego.</p>
                </section>

            </div>
        </div>
    );
}