import React from 'react';
import './SearchBar.scss';

import dogs from '../../images/psy i koty.png';
import small from '../../images/Małe zwierzęta.png';
import reptiles from '../../images/gady i płazy.png';
import birds from '../../images/ptaki.png';
import fish from '../../images/ryby.png';
import exotic from '../../images/Zwierzęta egzotyczne.png';

export const SearchBar = () => {
    return (
           
        <section className='search--bar'>
            <h2 >Wybierz specjalizację weterynarza</h2>
            <div className='container'>
                <div className='first--row'>
                    <a href='/psy-i-koty'>
                        <img src={dogs} alt='Psy i Koty' style={{width:'140px'}} />
                        Psy i koty
                    </a>
                    <a href='/male-zwierzeta'>
                        <img src={small} alt='Małe zwierzęta' style={{width:'140px'}} />
                        Małe zwierzęta
                    </a>
                    <a href='/gady-i-plazy'>
                        <img src={reptiles} alt='Gady i Płazy' style={{width:'140px'}} />
                        Gady i płazy
                    </a>
                </div>
                <div className='second--row'>
                    <a href='/ptaki'>
                        <img src={birds} alt='Ptaki' style={{width:'140px'}} />
                        Ptaki
                    </a>
                    <a href='/ryby'>
                        <img src={fish} alt='Ryby' style={{width:'140px'}} />
                        Ryby
                    </a>
                    <a href='/egzotyczne'>
                        <img src={exotic} alt='Zwierzęta egzotyczne' style={{width:'140px'}} />
                        Zwierzęta egzotyczne
                    </a>
                </div>
            </div>
        </section>
    );
}