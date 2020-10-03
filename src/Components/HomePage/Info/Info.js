import React from 'react';
import './Info.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

export const Info = () => {
    return (
        <section className='contact'>
            <div>
                <div className='register' data-aos='zoom-out'>
                    <h2>Jesteś weterynarzem?</h2>
                    <p>Na co czekasz? Załóż swój profil!</p>
                    <button>Zarejestruj się</button>
                </div>

                <div className='info--container'  data-aos='fade-left'>
                    <div>
                        <h2>Kontakt</h2>
                        <p><span><FontAwesomeIcon icon={faPhone}/></span> 755 555 557</p>
                        <p><span><FontAwesomeIcon icon={faEnvelope}/></span> reply@znajdzweta.pl</p>
                    </div>

                    <div>
                        <h2 className='socials'>Nasze sociale</h2>
                        <a className='fb' href='https://facebook.com/znajdzweta' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                        <a className='ig' href='https://instagram.com/znajdzweta' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                        <a className='tt' href='https://twitter.com/znajdzweta' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}