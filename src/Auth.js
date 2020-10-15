import React, {useEffect, useState} from 'react';
import app from './fire';


export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userExists, setUserExists] = useState(false);

    useEffect(()=>{
        app.auth().onAuthStateChanged(setCurrentUser);
    });

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