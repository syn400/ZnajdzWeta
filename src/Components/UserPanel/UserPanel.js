import React, {useState} from 'react';
import app from '../../fire'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons';

import * as firebase from 'firebase/app';
import 'firebase/auth';

export const UserPanel = () => {
    const [isVisible, setIsVisible] = useState(false);
    const email = firebase.auth().currentUser.email;

    const userMenu = () => {
        if(isVisible) {
            return <p>menu</p>
        } else {
            return null
        }
    }

    return (
        <>
        <button onClick={()=>setIsVisible(!isVisible)} style={{position: 'absolute'}}>
            <h3>{email}</h3>
            <p><FontAwesomeIcon icon={faGrinAlt}/></p>
        </button>

        {userMenu()}
        
         <button onClick={() => app.auth().signOut()}>
            wyloguj
        </button>
        </>
    )
}