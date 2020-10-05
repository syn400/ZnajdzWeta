import React from 'react';
import './LoginWindow.scss';
import { Link } from 'react-router-dom';

export const LoginWindow = (props) => {
    return (
        <div class="login--window" data-aos={props.anim}>
            <form class="login--container">
                <input type="text" placeholder="E-mail" name="email" required />

                <input type="password" placeholder="Hasło" name="psw" required />

                <button type="submit" class="btn">Login</button>
            </form>
            <Link to='/odzyskiwanie-hasla' style={{textDecoration: 'none', color: '#1f4b88'}}>
                <p>Nie pamiętasz hasła?</p>
            </Link>
            <Link to='/rejestracja' style={{textDecoration: 'none', color: '#1f4b88'}}>
                <p>Nie masz jeszcze konta?<br/> Zarejestruj się!</p>
            </Link>
        </div>
    );
}