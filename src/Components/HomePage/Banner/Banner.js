import React from 'react';
import './Banner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const Banner = () => {
    return (
        <header className='banner'>
            <div className='title--box'>
                <h1 className='title'>ZnajdźWeta</h1>
                <p>Zaufało nam już { 0 } weterynarzy z całej Polski!</p> {/*(tu będzie liczba zarejestrowanych uytkowników)*/}
            </div>

            <div className='user'>
                <button>
                    <p>Zaloguj</p>
                    <a> <FontAwesomeIcon icon={faUserCircle}/></a>
                </button>
            </div>
        </header>
    );
}