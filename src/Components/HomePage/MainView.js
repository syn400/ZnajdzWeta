import React, {useEffect, useState} from 'react';

import { Banner } from './Banner/Banner';
import { Footer } from './Footer/Footer';
import { SearchBar } from '../SearchBar/SearchBar';
import { About } from './About/About';
import { Info } from './Info/Info';

import firebase from 'firebase/app';
const db = firebase.firestore();

export const MainView = () => {
    const [counter, setCounter] = useState('');
    
    useEffect(()=> {
        db.collection('wets').get().then(snap => {
        setCounter(snap.size);
     });
    }, [])

    return (
        <>
        <Banner users={counter}/>
        <SearchBar />
        <About />
        <Info />
        <Footer />
        </>
    );
}