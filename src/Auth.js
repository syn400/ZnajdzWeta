import React, {useEffect, useState} from 'react';
import app from './fire';


export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    // const currentUser = localStorage.getItem('currentUser');
    // const [currentUser, setCurrentUser] = useState('')

    useEffect(()=>{
        app.auth().onAuthStateChanged((user)=>{
            setCurrentUser(user)
            // if(user) {
            //     localStorage.setItem('currentUser', JSON.stringify(user));
            // } else {
            //     localStorage.removeItem('currentUser');
            // }
        });
    }, []);

    return (
        <AuthContext.Provider
        value={{
            currentUser
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const AuthContext = React.createContext();