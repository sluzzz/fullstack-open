import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';

function App() {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data);
    });
  }, []);

  const handleChange = e => {
    setFilter(e.target.value.toLowerCase());
  };

  let limit = '';
  let results = filter
    ? countries.filter(
        country => country.name.toLowerCase().search(filter) !== -1
      )
    : countries;

  if (filter) {
    results = countries.filter(
      country => country.name.toLowerCase().search(filter) !== -1
    );
    if (results.length > 10) limit = 'Too many matches, specify another filter';
  }

  if (filter === '') results = [];

  return (
    <div>
      find countries
      <input onChange={handleChange} value={filter} />
      {limit ? (
        <div>{limit}</div>
      ) : (
        results.map(country => <Country key={country.name} country={country} />)
      )}
    </div>
  );
}

export default App;
