import React, {useState} from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { LoginWindow } from '../LoginWindow/LoginWindow';

export const NavBar = () => {
    const [IsVisible, setIsVisible] = useState(false);

    return (
        <nav>
            <div>
                <Link style={{textDecoration: 'none'}} to='/'>
                    <h1 className='title'>ZnajdźWeta</h1>
                </Link>
                <ul>
                    <li>
                        <button onClick={() => setIsVisible(prevState => !prevState)}>
                        {IsVisible ? <h3>Zamknij</h3> : <h3>Zaloguj</h3>}
                        {IsVisible ? <p><FontAwesomeIcon icon={faTimesCircle}/></p> : <p><FontAwesomeIcon icon={faUserCircle}/></p> }
                        </button>
                        {IsVisible ? <LoginWindow anim='fade-down'/> : null}
                    </li>
                </ul>
            </div>
        </nav>
    );
}