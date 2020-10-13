import React from 'react';
import './NotFound.scss';
import { Footer } from '../HomePage/Footer/Footer';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <>
        <header className='not--found'>
            <h1>404</h1>
            <h2>Strona nie istnieje</h2>
            <Link to='/' style={{textDecoration: 'none'}}><p>Powrót na stronę główną</p></Link>
        </header>
        <Footer />
        </>
    );
}