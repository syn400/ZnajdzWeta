import React from 'react';
import './SearchBar.scss';

import { Link } from 'react-router-dom';
import dogs from '../../images/psy i koty.png';
import small from '../../images/Małe zwierzęta.png';
import reptiles from '../../images/gady i płazy.png';
import birds from '../../images/ptaki.png';
import fish from '../../images/ryby.png';
import exotic from '../../images/Zwierzęta egzotyczne.png';
// import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

export const SearchBar = () => {
    return (
           
        <section className='search--bar'>
            <h2 >Wybierz specjalizację weterynarza</h2>
            <div className='container'>
                <div className='first--row'>
                    <Link style={{textDecoration: 'none'}} to='/psy-i-koty'>
                        <span>
                            <img src={dogs} alt='Psy i Koty' style={{width:'140px'}} />
                            Psy i koty
                        </span>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/male-zwierzeta'>
                        <span>
                            <img src={small} alt='Małe zwierzęta' style={{width:'140px'}} />
                            Małe zwierzęta
                        </span>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/gady-i-plazy'>
                        <span>
                            <img src={reptiles} alt='Gady i Płazy' style={{width:'140px'}} />
                            Gady i płazy
                        </span>
                    </Link>
                </div>
                <div className='second--row'>
                    <Link style={{textDecoration: 'none'}} to='/ptaki'>
                        <span>
                            <img src={birds} alt='Ptaki' style={{width:'140px'}} />
                            Ptaki
                        </span>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/ryby'>
                        <span>
                            <img src={fish} alt='Ryby' style={{width:'140px'}} />
                            Ryby
                        </span>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/egzotyczne'>
                        <span>
                            <img src={exotic} alt='Zwierzęta egzotyczne' style={{width:'140px'}} />
                            Zwierzęta egzotyczne
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}