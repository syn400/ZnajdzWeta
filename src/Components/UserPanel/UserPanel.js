import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import app from '../../fire'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons';
import './UserPanel.scss';
import { AuthContext } from "../../Auth";
import { animations } from 'react-animation';

export const UserPanel = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {currentUser} = useContext(AuthContext);
    const email = currentUser.email;


    const userMenu = () => {
        if(isVisible) {
            return (
                <div className='user--panel--container' style={{ animation: animations.popIn}}>
                    <h3>{email}</h3>

                    <Link onClick={()=>setIsVisible(false)} to='/ustawienia/utworz-profil' style={{textDecoration: 'none', color: '#1f4b88'}}>
                        <p>Jesteś weterynarzem? <br />Stwórz swój profil!</p>
                    </Link>

                    <Link onClick={()=>setIsVisible(false)} to='/ustawienia/profil' style={{textDecoration: 'none', color: '#1f4b88'}}>
                        <p><FontAwesomeIcon icon={faCog} /> Ustawienia konta</p>
                    </Link>

                    <button onClick={() => {
                        app.auth().signOut()
                        window.location.reload()
                        }}>
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