import React from 'react';
import './Country.css';

const Country = ({name, population, area}) => {

    return (
        <div className='countryCard'>
            <h2>Country Name: {name}</h2>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;