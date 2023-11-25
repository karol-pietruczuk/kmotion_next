'use client'

import Image from 'next/image';
import './logo-section.css';
import './service-section.css';
import './recommendation-section.css';
import './contact-section.css';
import './footer.css';
import useWindowDimensions from './hooks/useWindowDimension';

export default function Home() {
    const { width } = useWindowDimensions();
    return (
        <>
            <section className='logo-section'>
                <header className='logo-section__header'>
                    <h1 className='logo-section__header--title'>
                        KMotion
                    </h1>
                    <h2 className='logo-section__header--desc'>
                        Automatyka przemysłowa
                    </h2>
                    <Image
                        className='logo-section__header--logo'
                        src="/kmotion.svg"
                        alt="KMotion Logo"
                        width={width !== undefined ? (width > 460 ? (width > 1150 ? 0.1 * width : 0.2 * width) : 0.3 * width) : 100}
                        height={24}
                        priority
                    />
                </header>
            </section>
            <section className='service-section'>
                <header className='service-section__header'>
                    <h2 className='service-section__header--title'>
                        Czym się zajmujemy?
                    </h2>
                </header>
                <article className='service-section__article'>
                        <div className='service-section__article--service'>
                            <div className='service-section__article--service-hex'>
                                <p className='service-section__article--service-hex--desc'>Programowanie sterowników, m.in. Allen Bradley, Eaton, Mitsubishi, Siemens</p>
                            </div>
                        </div>
                        <div className='service-section__article--service'>
                            <div className='service-section__article--service-hex'>
                                <p className='service-section__article--service-hex--desc'>Tworzenie wizualizacji na panelach HMI, m.in. Galileo, Allen Bradley</p>
                            </div>
                        </div>
                        <div className='service-section__article--service'>
                            <div className='service-section__article--service-hex'>
                                <p className='service-section__article--service-hex--desc'>Usuwanie usterek maszyn</p>
                            </div>
                        </div>
                        <div className='service-section__article--service'>
                            <div className='service-section__article--service-hex'>
                                <p className='service-section__article--service-hex--desc'>Naprawa/przeróbki sterowania</p>
                            </div>
                        </div>
                        <div className='service-section__article--service'>
                            <div className='service-section__article--service-hex'>
                                <p className='service-section__article--service-hex--desc'>Tworzenie stron internetowych</p>
                            </div>
                        </div>
                        <div className='service-section__article--service'>
                            <div className='service-section__article--service-hex'>
                            <p className='service-section__article--service-hex--desc'>Prefabrykacja szaf sterowniczych</p>
                            </div>
                        </div>
                        <div className='service-section__article--service'>
                            <div className='service-section__article--service-hex'>
                                <p className='service-section__article--service-hex--desc'>Programowanie i naprawa uszkodzonych przemienników częstotliwości, np. Delta, Danfoss, Omron, Lenze, Altivar</p>
                            </div>
                        </div>
                        <div className='service-section__article--service'>
                            <div className='service-section__article--service-hex'>
                                <p className='service-section__article--service-hex--desc'>Implementacja nowych systemów sterowania</p>
                            </div>
                        </div>
                        <div className='service-section__article--service'>
                            <div className='service-section__article--service-hex'>
                                <p className='service-section__article--service-hex--desc'>Tworzenie schematów elektrycznych</p>
                            </div>
                        </div>
                </article>
            </section>
            <section className='recommendation-section'>
                <header className='recommendation-section__header'>
                    <h2 className='recommendation-section__header--title'>
                        Dlaczego warto nas wybrać?
                    </h2>
                </header>
                <article className='recommendation-section__article'>
                    <ul className='recommendation-section__article__list'>
                        <li className='recommendation-section__article__list-item'>
                            <div className='recommendation-section__article__list-item--triangle'>
                                <div className='recommendation-section__article__list-item--triangle-implementation'></div>
                            </div>
                            <p className='recommendation-section__article__list-item--desc'>
                                Program napisany w sposób uporządkowany, umożliwiający rozbudowę systemu
                            </p>
                        </li>
                        <li className='recommendation-section__article__list-item'>
                            <div className='recommendation-section__article__list-item--triangle'>
                                <div className='recommendation-section__article__list-item--triangle-implementation'></div>
                            </div>
                            <p className='recommendation-section__article__list-item--desc'>
                                Design wizualizacji w nowoczesnym stylu
                            </p>
                        </li>
                        <li className='recommendation-section__article__list-item'>
                            <div className='recommendation-section__article__list-item--triangle'>
                                <div className='recommendation-section__article__list-item--triangle-implementation'></div>
                            </div>
                            <p className='recommendation-section__article__list-item--desc'>
                                Schemat elektryczny wykonany z uwzględnieniem najmniejszych szczegółów
                            </p>
                        </li>
                        <li className='recommendation-section__article__list-item'>
                            <div className='recommendation-section__article__list-item--triangle'>
                                <div className='recommendation-section__article__list-item--triangle-implementation'></div>
                            </div>
                            <p className='recommendation-section__article__list-item--desc'>
                                Wsparcie powykonawcze
                            </p>
                        </li>
                        <li className='recommendation-section__article__list-item'>
                            <div className='recommendation-section__article__list-item--triangle'>
                                <div className='recommendation-section__article__list-item--triangle-implementation'></div>
                            </div>
                            <p className='recommendation-section__article__list-item--desc'>
                                Pomoc w naprawie usterek i awarii
                            </p>
                        </li>
                        <li className='recommendation-section__article__list-item'>
                            <div className='recommendation-section__article__list-item--triangle'>
                                <div className='recommendation-section__article__list-item--triangle-implementation'></div>
                            </div>
                            <p className='recommendation-section__article__list-item--desc'>
                                Indywidualne podejście do klienta i problemu
                            </p>
                        </li>
                    </ul>
                </article>
            </section>
            <section className='contact-section'>
                <div className='contact-section__decoration'>
                    <div className='contact-section__decoration--rectangle'></div>
                    <div className='contact-section__decoration--rectangle'></div>
                    <div className='contact-section__decoration--rectangle'></div>
                    <div className='contact-section__decoration--rectangle'></div>
                    <div className='contact-section__decoration--rectangle'></div>
                </div>
                <div className='contact-section__article'>
                    <header className='contact-section__article__header'>
                        <h2 className='contact-section__article__header--title'>
                            Kontakt
                        </h2>
                    </header>
                    <div className='contact-section__article__details'>
                        <a 
                        className='contact-section__article__details--email'
                        href='mailto:biuro@kmotion.pl'
                        title='Wyślij do nas email na adres: biuro@kmotion.pl'
                        target="_blank"
                        >
                            <Image
                                className='contact-section__article__details--email-icon'
                                src="/email.svg"
                                alt="Email icon"
                                width={24}
                                height={24}
                                priority
                            />
                            <u className='contact-section__article__details--email-address'>
                                biuro@kmotion.pl
                            </u>
                        </a>
                        <a 
                        className='contact-section__article__details--phone'
                        href="tel:+48 512 782 634"
                        title='Zadzwoń do nas pod numer: +48 512 782 634'
                        >
                            <Image
                                className='contact-section__article__details--phone-icon'
                                src="/Phone.svg"
                                alt="Phone icon"
                                width={24}
                                height={24}
                                priority
                            />
                            <u className='contact-section__article__details--phone-number'>
                                +48 512 782 634
                            </u>
                        </a>
                        <a 
                        className='contact-section__article__details--phone'
                        href="tel:+48 721 395 285"
                        title='Zadzwoń do nas pod numer: +48 721 395 285'
                        >
                            <Image
                                className='contact-section__article__details--phone-icon'
                                src="/Phone.svg"
                                alt="Phone icon"
                                width={24}
                                height={24}
                                priority
                            />
                            <u className='contact-section__article__details--phone-number'>
                                +48 721 395 285
                            </u>
                        </a>
                    </div>
                    <div className='contact-section__article__socials'>
                        <div className='contact-section__article__socials--desc'>
                            Znajdź nas
                        </div>
                        <div className='contact-section__article__socials--content'>
                            <a 
                            className='contact-section__article__socials--content__instagram'
                            href="https://www.instagram.com/kmotion.pl/"
                            title='Odwiedź nasz profil na Instagramie'
                            >
                                <Image
                                    className='contact-section__article__socials--content__instagram-icon'
                                    src="/Instagram.svg"
                                    alt="Instagram icon"
                                    width={24}
                                    height={24}
                                    priority
                                />
                            </a>
                            <a 
                            className='contact-section__article__socials--content__linkedin'
                            href="https://www.linkedin.com/"
                            title='Odwiedź nasz profil na LinkedInie'
                            >
                                <Image
                                    className='contact-section__article__socials--content__linkedin-icon'
                                    src="/LinkedIn.svg"
                                    alt="LinkedIn icon"
                                    width={24}
                                    height={24}
                                    priority
                                />
                            </a>
                            <a 
                            className='contact-section__article__socials--content__tiktok'
                            href="https://www.tiktok.com/@kmotion.pl"
                            title='Odwiedź nasz profil na TikToku'
                            >
                                <Image
                                    className='contact-section__article__socials--content__tiktok-icon'
                                    src="/TikTok.svg"
                                    alt="TikTok icon"
                                    width={30}
                                    height={30}
                                    priority
                                />
                            </a>  
                        </div>
                    </div>
                </div>
            </section>
            <footer className='footer'>
                Created with Heart & Passion by KMotion | &copy;Copyright KMotion 2023
            </footer>
        </>
    )
}