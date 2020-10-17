import React, {useEffect} from 'react';
import app from './fire';
import firebase from 'firebase/app';
const db = firebase.firestore();


export const AuthProvider = ({children}) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(()=>{
        db.collection('wets').get().then(snap => {
            localStorage.setItem('numberOfVets', snap.size);
        });
        
        app.auth().onAuthStateChanged((user)=>{
            if(user) {
                localStorage.setItem('currentUser', JSON.stringify(user));

                db.collection("wets").doc(user.uid).get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        localStorage.setItem('userWetProfileExists', true);
                    }});
            } else {
                localStorage.removeItem('currentUser');
                localStorage.setItem('userWetProfileExists', false);
            }
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