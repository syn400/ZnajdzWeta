import React from 'react';
import './MainView.scss';

import { Banner } from '../Banner/Banner';
import { Footer } from '../Footer/Footer';
import { SearchBar } from '../../SearchBar/SearchBar';
import { About } from '../About/About';
import { Info } from '../Info/Info';

export const MainView = () => {
    return (
        <>
        <Banner />
        <SearchBar />
        <About />
        <Info />
        <Footer />
        </>
    );
}