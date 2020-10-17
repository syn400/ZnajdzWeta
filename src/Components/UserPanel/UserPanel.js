import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import app from '../../fire'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons';
import './UserPanel.scss';

import { animations } from 'react-animation';

import * as firebase from 'firebase/app';
import 'firebase/auth';

export const UserPanel = () => {
    const [isVisible, setIsVisible] = useState(false);
    const email = firebase.auth().currentUser.email;
    // const email = localStorage.getItem('currentUser').email;


    const userMenu = () => {
        if(isVisible) {
            return (
                <div className='user--panel--container' style={{ animation: animations.popIn}}>
                    <h3>{email}</h3>

                    <Link to='/ustawienia/utworz-profil' style={{textDecoration: 'none', color: '#1f4b88'}}>
                        <p>Jesteś weterynarzem? <br />Stwórz swój profil!</p>
                    </Link>

                    <Link to='/ustawienia/profil' style={{textDecoration: 'none', color: '#1f4b88'}}>
                        <p><FontAwesomeIcon icon={faCog} /> Ustawienia konta</p>
                    </Link>

                    <button onClick={() => app.auth().signOut()}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Wyloguj
                    </button>
                </div>
            );
        } else {
            return null
        }
    }

    return (
        <>
        <button onClick={()=>setIsVisible(!isVisible)} style={{position: 'absolute'}}>
            <h3>Konto</h3>
            <p><FontAwesomeIcon icon={faGrinAlt}/></p>
        </button>

        {userMenu()}
        </>
    )
}