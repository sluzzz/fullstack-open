import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';
import Details from './components/Details';

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
  // let results = filter
  //   ? countries.filter(
  //       country => country.name.toLowerCase().search(filter) !== -1
  //     )
  //   : countries;
  // if (results.length > 10) limit = 'Too many matches, specify another filter';

  if (filter) {
    results = countries.filter(
      country => country.name.toLowerCase().search(filter) !== -1
    );
    if (results.length > 10) limit = 'Too many matches, specify another filter';
  }

  if (filter === '') results = [];
  console.log(results);

  return (
    <div>
      find countries
      <input onChange={handleChange} value={filter} />
      {limit ? (
        <div>{limit}</div>
      ) : (
        results.map(country => <Country key={country.name} country={country} />)
      )}
      {results.length === 1 ? (
        <Details
          name={results[0].name}
          capital={results[0].capital}
          pop={results[0].population}
          lang={results[0].languages}
          flag={results[0].flag}
        />
      ) : (
        <div>results > 1</div>
      )}
    </div>
  );
}

export default App;

// todo map list of languages and remove country filtered name
