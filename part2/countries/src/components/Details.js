import React from 'react';

const Details = ({ name, capital, pop, lang, flag }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>population {pop}</p>
      <h2>languages</h2>
      {lang.map(language => (
        <li key={language.name}>{language.name}</li>
      ))}
      <p></p>
      <div>
        <img src={flag} style={{ width: 250, height: 125 }} alt="flag" />
      </div>
    </div>
  );
};

export default Details;
