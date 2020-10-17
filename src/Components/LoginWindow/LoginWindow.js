import React, { useCallback, useState} from 'react';
import './LoginWindow.scss';
import { Link } from 'react-router-dom';
import app from '../../fire';

import { animations } from 'react-animation';


export const LoginWindow = ({history}) => {
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
          } catch (error) {
            setPasswordError('Błędny login lub hasło');
          }
        },
        [history]
      );

    return (
        <div className="login--window" style={{ animation: animations.popIn}}>
            <form className="login--container" onSubmit={handleLogin}>
                <input type="email" placeholder="E-mail" name="email" required />

                <input type="password" placeholder="Hasło" name="password" required />
                <span className='login--error'>{passwordError}</span>

                <button type="submit" className="btn">Zaloguj</button>
            </form>
            <div>
              <Link to='/odzyskiwanie-hasla' style={{textDecoration: 'none', color: '#1f4b88'}}>
                <p>Nie pamiętasz hasła?</p>
              </Link>
              <Link to='/rejestracja' style={{textDecoration: 'none', color: '#1f4b88'}}>
                  <p>Nie masz jeszcze konta?<br/> Zarejestruj się!</p>
              </Link>
            </div>

        </div>
    );
}