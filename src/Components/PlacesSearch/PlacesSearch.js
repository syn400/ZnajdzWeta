import React, {useState} from 'react';
import './PlacesSearch.scss';
import PlacesAutocomplete from 'react-places-autocomplete';


export const PlacesSearch = ({currentSelection}) => {
    const [address, setAdress] = useState('');

    const handleSelect = (value) => {
        setAdress(value.replace(/, Polska/g,''));
        currentSelection(value.replace(/, Polska/g,''));
    };

    const handleChange = (value) => {
        setAdress(value.replace(/, Polska/g,''));
    }

    const searchOptions = {
        types: ['(cities)'],
        componentRestrictions: {country: "pl"}
       }


    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
            highlightFirstSuggestion={true}
            searchOptions={searchOptions}
            >

            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className='PlacesSearch--container'>
                    <div className='input--container'>
                        <input {...getInputProps({placeholder: 'Wyszukaj miasto'})} />

                        <div style={{display: suggestions.length === 0 ? 'none' : 'block' }} className="autocomplete-dropdown-container" >
                            <div className="autocomplete-options-dropdown-container">
                                {loading ? <div>Wyszukiwanie...</div> : null}

                                {suggestions.map( (suggestion) => {

                                const style = {
                                    backgroundColor: suggestion.active ? '#54a058' : '#fff',
                                    color: suggestion.active ? '#fff' : '#757575',
                                }

                                return (
                                        <div {...getSuggestionItemProps(suggestion, {style})} key={suggestion.description}>
                                            {suggestion.description.replace(/, Polska/g,'')}
                                        </div>
                                    ); 
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
}