import React, { useState } from 'react';
import './Banner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { LoginWindow } from '../../LoginWindow/LoginWindow';

export const Banner = () => {
    const [IsVisible, setIsVisible] = useState(false);

    return (
        <header className='banner'>
            <div className='title--box'>
                <h1 className='title'>ZnajdźWeta</h1>
                <p>Zaufało nam już { 0 } weterynarzy z całej Polski!</p> {/*(tu będzie liczba zarejestrowanych uytkowników)*/}
            </div>

            <div className='user'>
                <button onClick={() => setIsVisible(prevState => !prevState)}>
                    {IsVisible ? <h3>Zamknij</h3> : <h3>Zaloguj</h3>}
                    {IsVisible ? <p><FontAwesomeIcon icon={faTimesCircle}/></p> : <p><FontAwesomeIcon icon={faUserCircle}/></p> }
                </button>
                {IsVisible ? <LoginWindow anim='fade-left'/> : null}
            </div>
        </header>
    );
}