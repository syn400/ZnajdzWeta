import React, { useState, useEffect } from 'react';
import { NotFound } from '../NotFound/NotFound';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../HomePage/Footer/Footer';
import { SearchBar } from '../SearchBar/SearchBar';
import { Multiselect } from 'multiselect-react-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch, faMapMarkerAlt, faUserMd, faPaw, faPhone } from '@fortawesome/free-solid-svg-icons';
import './SearchSite.scss';
import { PlacesSearch } from '../PlacesSearch/PlacesSearch';
import firebase from 'firebase/app';

const db = firebase.firestore();

export const SearchSite = ( {match} ) => {
    const [specialization, setSpecialization] = useState([]);
    const [results, setResults] = useState([]);
    const [city, setCity] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('Wybierz specjalizację oraz miasto aby wyszukać');
    
    const result = match.params.animals;

    const [specializations] = useState([
        {name: 'Profilaktyka'},
        {name: 'Dermatologia'},
        {name: 'Okulistyka'},
        {name: 'Stomatologia'},
        {name: 'Diagnostyka'},
        {name: 'Chirurgia'}
    ]);

    const getCategory = () => {
        switch(result) {
            case 'psy-i-koty':
                setCategory('Psy i koty');
                break;
            case 'male-zwierzeta':
                setCategory('Małe zwierzęta');
                break;
            case 'gady-i-plazy':
                setCategory('Gady i płazy');
                break;
            case 'ptaki':
                setCategory('Ptaki');
                break;
            case 'ryby':
                setCategory('Ryby');
                break;
            case 'egzotyczne':
                setCategory('Zwierzęta egzotyczne');
                break;
            default: (console.log('error'));
        }
    }

    useEffect(()=>{
        getCategory();
    });

    const getResults = (spec, city, cat) => {
        setMessage('Wyszukiwanie...')
        db.collection("wets")
            .where('Category', 'array-contains', cat)
            .where('Verified', '==', true)
            .where('City', '==', city)
            .get().then((documentSnapshot) => {
            const array = [];
            documentSnapshot.forEach((doc) => {
                if(spec.some((e) => doc.data().Specialization.includes(e))) {
                    array.push(doc.data());
                }
            })
            if(array.length === 0) {
                setMessage('Brak wyników wyszukiwania :(')
            };
            setResults(array)
        })
    }

    const getSpecialization = (e) => {
        if(e.length > 1) {
            const [{name: first}, {name: second}] = e;
            setSpecialization([first, second]);
        } else if (e.length === 1 ){
            const [{name: one}] = e;
            setSpecialization([one]);
        } else {
            setSpecialization([]);
        }
    }

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
                            <Multiselect 
                                options={specializations} 
                                placeholder='Wybierz specjalizację' 
                                selectionLimit={2} 
                                closeIcon='circle' 
                                displayValue="name"
                                hidePlaceholder={true}
                                emptyRecordMsg="Brak opcji."
                                onSelect={getSpecialization}
                                onRemove={getSpecialization}
                                style={{
                                    multiselectContainer: { fontWeight: 400},
                                    chips: { background: '#54a058'}, 
                                    searchBox: { background: '#ffffffe5', fontWeight: 600, height:'2.2rem', cursor: 'text'},
                                }}
                                avoidHighlightFirstOption
                            />

                            <PlacesSearch currentSelection={(e) => setCity(e)} />
                            <button className='search--button' onClick={()=>getResults(specialization, city, category)}>
                                <FontAwesomeIcon icon={faSearch}/><span>Szukaj</span>
                            </button>
                    </div>

                    <hr/>

                    <div className='result--list'>
                        {results.length !== 0 ? 
                            results.map((e) => {
                            return (
                                <div className='wet--widget' key={e.Name}>
                                    <div className='info--container'>
                                        <div>
                                            <img className='usr--avatar' src={e.Avatar} alt='Avatar'/>
                                        </div>
                                        <div className='info'>
                                            <h2>{e.Name}</h2>
                                            <p className='rating'>{
                                                [...Array(e.Rating)].map((elementInArray, index) => ( 
                                                    <FontAwesomeIcon key={index} icon={faStar}/>
                                                    ) 
                                                )}
                                            </p>
                                            <hr />
                                            <span>
                                                <p><FontAwesomeIcon icon={faPaw}/> {e.Category.length > 1 ? e.Category.join(', ') : e.Category}</p>
                                                <p><FontAwesomeIcon icon={faUserMd}/> {e.Specialization.length > 1 ? e.Specialization.join(', ') : e.Specialization}</p>
                                                <p><FontAwesomeIcon icon={faMapMarkerAlt}/> {e.Address}, {e.City}</p>
                                                <p><FontAwesomeIcon icon={faPhone}/> {e.Phone}</p>
                                            </span>
                                        </div>
                                    </div>
                                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${e.City}+${e.Address.replace(" ","+")}+Polska&zoom=14&scale=2&size=600x400&maptype=roadmap&key=AIzaSyAaT7cD6zvSuMc8kw92S9V9c4CmxPYgs8w&format=jpg&visual_refresh=true&markers=size:big%7Ccolor:0x68b66b%7Clabel:%7C${e.City}+${e.Address.replace(" ","+")}+Polska`} alt="Zdjęcie mapy google"/>
                                </div>
                            )})
                        : <h1 className='result--message'>{message}</h1>}
                    </div>
                </section>
                <Footer />
            </>
        );
    } else {
        return <NotFound />
    }
}