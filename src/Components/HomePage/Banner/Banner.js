import React, { useState } from 'react';
import './Banner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Banner = () => {
    const [IsVisible, setIsVisible] = useState(false);

    const loginWindow = () => {
        return (
            <div class="login--window" data-aos='zoom-in'>
                <form class="login--container">
                    <input type="text" placeholder="E-mail" name="email" required />

                    <input type="password" placeholder="Hasło" name="psw" required />

                    <button type="submit" class="btn">Login</button>
                </form>
                <Link to='/register' style={{textDecoration: 'none', color: '#1f4b88'}}>
                    <p>Nie pamiętasz hasła?</p>
                </Link>
                <Link to='/register' style={{textDecoration: 'none', color: '#1f4b88'}}>
                    <p>Nie masz jeszcze konta?<br/> Zarejestruj się!</p>
                </Link>
            </div>
        );
    }

    return (
        <header className='banner'>
            <div className='title--box'>
                <Link to='/' style={{textDecoration: 'none', color: '#ffffffe5'}}>
                    <h1 className='title'>ZnajdźWeta</h1>
                </Link>
                <p>Zaufało nam już { 0 } weterynarzy z całej Polski!</p> {/*(tu będzie liczba zarejestrowanych uytkowników)*/}
            </div>

            <div className='user'>
                <button onClick={() => setIsVisible(prevState => !prevState)}>
                    <p>Zaloguj</p>
                    <a> <FontAwesomeIcon icon={faUserCircle}/></a>
                </button>
                {IsVisible ? loginWindow() : null}
            </div>
        </header>
    );
}