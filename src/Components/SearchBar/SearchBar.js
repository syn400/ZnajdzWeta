import React from 'react';
import './SearchBar.scss';

import { NavLink } from 'react-router-dom';
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
                <div>
                    <NavLink style={{textDecoration: 'none'}} activeClassName='active' to='/psy-i-koty'>
                        <span>
                            <img src={dogs} alt='Psy i Koty' />
                            Psy i koty
                        </span>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} activeClassName='active' to='/male-zwierzeta'>
                        <span>
                            <img src={small} alt='Małe zwierzęta'/>
                            Małe zwierzęta
                        </span>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} activeClassName='active' to='/gady-i-plazy'>
                        <span>
                            <img src={reptiles} alt='Gady i Płazy' />
                            Gady i płazy
                        </span>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} activeClassName='active' to='/ptaki'>
                        <span>
                            <img src={birds} alt='Ptaki' />
                            Ptaki
                        </span>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} activeClassName='active' to='/ryby'>
                        <span>
                            <img src={fish} alt='Ryby' />
                            Ryby
                        </span>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} activeClassName='active' to='/egzotyczne'>
                        <span>
                            <img src={exotic} alt='Zwierzęta egzotyczne' />
                            Zwierzęta egzotyczne
                        </span>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}