import React, { useState } from 'react';
import { NotFound } from '../NotFound/NotFound';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../HomePage/Footer/Footer';
import { SearchBar } from '../SearchBar/SearchBar';
import { Multiselect } from 'multiselect-react-dropdown';
import './SearchSite.scss';

export const SearchSite = ({match}) => {
    const result = match.params.animals;
    const [options] = useState([
        {name: 'test1', id: 1}, 
        {name: 'test2', id: 2},
        {name: 'test3', id: 3}, 
        {name: 'test4', id: 3},
        {name: 'test5', id: 4}, 
        {name: 'test6', id: 5},
        {name: 'test7', id: 6}, 
        {name: 'test8', id: 7},
        {name: 'test9', id: 8}, 
        {name: 'test10', id: 9},
        {name: 'test11', id: 10}, 
        {name: 'test12', id: 11}
    ]);

    if(result === 'psy-i-koty' ||
     result === 'male-zwierzeta' ||
      result === 'gady-i-plazy' ||
       result === 'ptaki' ||
        result === 'ryby' ||
         result === 'egzotyczne') {
        return (
            <>
                <div className='NavBar--overwrite'>
                    <NavBar />
                </div>

                <div className='SearchBar--overwrite'>
                    <SearchBar />
                </div>

                <section className='search--results'>
                    <hr/>
                    <div className='filters'>
                        <Multiselect closeOnSelect={false} placeholder='Wybierz miasto' options={options} selectedValues={options.selectedValue} displayValue="name"
                        style={{
                            multiselectContainer: {width:'20%', fontWeight: 400},
                            chips: { background: '#54a058', color: 'white'}, 
                            searchBox: { background: '#ffffffe5', fontWeight: 600, height:'2.2rem'},
                        }}
                        avoidHighlightFirstOption
                        singleSelect={true}
                        />

                        <Multiselect closeOnSelect={false} placeholder='Wybierz specjalizacje' selectionLimit={4} closeIcon='circle' options={options} selectedValues={options.selectedValue} displayValue="name"
                        style={{
                            multiselectContainer: {width:'40%', fontWeight: 400},
                            chips: { background: '#54a058'}, 
                            searchBox: { background: '#ffffffe5', fontWeight: 600, height:'2.2rem'},
                        }}
                        avoidHighlightFirstOption
                        />
                    </div>
                    <hr/>

                    <div className='result--list'>

                    </div>
                </section>

                <Footer />
            </>
        );
    } else {
        return <NotFound />
    }
}