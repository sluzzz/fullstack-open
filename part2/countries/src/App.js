import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';
import Details from './components/Details';

console.log(process.env.REACT_APP_DARKSKY_API_KEY);
console.log(process.env.NODE_ENV);

function App() {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data);
    });
  }, []);

  const handleChange = e => {
    setFilter(e.target.value.toLowerCase());
  };

  let limit = '';
  let results = [];

  if (filter) {
    results = countries.filter(
      country => country.name.toLowerCase().search(filter) !== -1
    );
    if (results.length > 10) limit = 'Too many matches, specify another filter';
  }

  if (filter === '') results = [];

  const handleShowClick = e => {
    setFilter(e.target.id.toLowerCase());
  };

  let display;
  if (limit) {
    display = <div>{limit}</div>;
  } else if (results.length === 1) {
    display = <div></div>;
  } else {
    display = results.map(country => (
      <Country key={country.name} country={country} onClick={handleShowClick} />
    ));
  }

  return (
    <div>
      find countries
      <input onChange={handleChange} value={filter} />
      {display}
      {results.length === 1 ? (
        <Details
          name={results[0].name}
          capital={results[0].capital}
          pop={results[0].population}
          lang={results[0].languages}
          flag={results[0].flag}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
