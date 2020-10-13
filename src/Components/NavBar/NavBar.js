import React, {useState, useContext} from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { LoginWindow } from '../LoginWindow/LoginWindow';

import { PrivateRoute } from '../PrivateRoute';
import { UserPanel } from '../UserPanel/UserPanel';
import { AuthContext } from "../../Auth.js";



export const NavBar = () => {
    const [loginVisible, setLoginVisible] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const isLoggedIn = () => {

        if(currentUser) {
            return <PrivateRoute component={UserPanel} />
        } else {
            return (
                <>
                    <button onClick={()=>setLoginVisible(!loginVisible)}>
                        {loginVisible ? <h3>Zamknij</h3> : <h3>Zaloguj</h3>}
                        {loginVisible ? <p><FontAwesomeIcon icon={faTimesCircle}/></p> : <p><FontAwesomeIcon icon={faUserCircle}/></p> }
                    </button>
                    {loginVisible ? <LoginWindow/> : null}
                </>
            )
        }
    }

    return (
        <nav className='banner nav--overwrite'>
            <div className='title--box'>
                <Link to='/' style={{textDecoration: 'none', color: '#ffffffe5'}}>
                    <h1 className='title'>ZnajdźWeta</h1>
                </Link>
            </div>

            <div className='user'>
                {isLoggedIn()}
            </div>
        </nav>
    );
}