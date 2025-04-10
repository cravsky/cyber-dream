import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import styles from './Privacy.module.css';

export default function Privacy() {
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
                    aria-label="Close privacy policy"
                >
                    <FaTimes />
                </button>
                <h1>Polityka Prywatności</h1>

                <section>
                    <h2>1. Informacje ogólne</h2>
                    <p>1.1. Niniejsza Polityka Prywatności opisuje zasady przetwarzania danych osobowych użytkowników serwisu <strong>sennik.dev</strong>.</p>
                    <p>1.2. Administratorem danych osobowych jest osoba fizyczna prowadząca nierejestrowaną działalność gospodarczą, kontakt: <strong>kontakt@sennik.dev</strong>.</p>
                </section>

                <section>
                    <h2>2. Zakres zbieranych danych</h2>
                    <p>2.1. Przetwarzane mogą być następujące dane:</p>
                    <ul>
                        <li>treść snu oraz informacje dodatkowe podane dobrowolnie przez użytkownika,</li>
                        <li>adres e-mail (tylko w celu realizacji zamówienia i wysyłki potwierdzenia transakcji),</li>
                        <li>dane transakcyjne przetwarzane przez operatora płatności Stripe.</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Cel i podstawa prawna przetwarzania</h2>
                    <p>3.1. Dane przetwarzane są w celu:</p>
                    <ul>
                        <li>świadczenia usługi interpretacji snu,</li>
                        <li>obsługi płatności i wysyłki potwierdzenia transakcji,</li>
                        <li>kontaktu z użytkownikiem w związku z realizacją zamówienia.</li>
                    </ul>
                    <p>3.2. Podstawą prawną przetwarzania danych jest <strong>art. 6 ust. 1 lit. b oraz lit. a RODO</strong> – przetwarzanie jest niezbędne do wykonania umowy oraz odbywa się na podstawie zgody użytkownika.</p>
                </section>

                <section>
                    <h2>4. Przechowywanie i przekazywanie danych</h2>
                    <p>4.1. Dane są przechowywane w bezpiecznych systemach hostingowych dostarczanych przez platformę Railway.app. Fizyczna lokalizacja danych może obejmować serwery znajdujące się poza Europejskim Obszarem Gospodarczym (EOG), w tym w Stanach Zjednoczonych.</p>
                    <p>4.2. Dane mogą być udostępniane operatorowi płatności Stripe wyłącznie w celu realizacji transakcji.</p>
                    <p>4.3. W przypadku przekazywania danych poza EOG stosowane są odpowiednie środki ochrony, w tym standardowe klauzule umowne zatwierdzone przez Komisję Europejską, zgodnie z wymogami RODO.</p>
                </section>

                <section>
                    <h2>5. Twoje prawa</h2>
                    <p>5.1. Zgodnie z RODO przysługuje Ci prawo do:</p>
                    <ul>
                        <li>dostępu do swoich danych,</li>
                        <li>ich sprostowania,</li>
                        <li>usunięcia,</li>
                        <li>ograniczenia przetwarzania,</li>
                        <li>sprzeciwu wobec przetwarzania,</li>
                        <li>przenoszenia danych.</li>
                    </ul>
                    <p>5.2. Możesz skontaktować się w tej sprawie pod adresem: <strong>kontakt@sennik.dev</strong>.</p>
                    <p>5.3. Przysługuje Ci również prawo wniesienia skargi do Prezesa UODO.</p>
                </section>

                <section>
                    <h2>6. Pliki cookies i analityka</h2>
                    <p>6.1. Serwis korzysta z narzędzia <strong>Plausible Analytics</strong>, które nie wykorzystuje plików cookies i nie gromadzi danych osobowych.</p>
                    <p>6.2. Nie stosujemy reklam, remarketingu ani narzędzi śledzących.</p>
                </section>

                <section>
                    <h2>7. Kontakt</h2>
                    <p>W razie pytań dotyczących prywatności skontaktuj się: <strong>kontakt@sennik.dev</strong>.</p>
                </section>

            </div>
        </div>
    );
}