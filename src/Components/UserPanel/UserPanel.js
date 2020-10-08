import React, {useState} from 'react';
import app from '../../fire'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons';

export const UserPanel = () => {
    const [isVisible, setIsVisible] = useState(false);

    const userMenu = () => {
        if(isVisible) {
            return <p>menu</p>
        } else {
            return null
        }
    }

    return (
        <>
        <button onClick={()=>setIsVisible(!isVisible)}>
            <h3>Panel użytkownika</h3>
            <p><FontAwesomeIcon icon={faGrinAlt}/></p>
        </button>

        {userMenu()}
        
         <button onClick={() => app.auth().signOut()}>
            wyloguj
        </button>
        </>
    )
}