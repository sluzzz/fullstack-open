import React from 'react';

const Details = ({ name, capital, pop, lang, flag }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>population {pop}</p>
      <h2>languages</h2>
      mapiraj listu
      <div>
        <img src={flag} style={{ width: 200, height: 100 }} />
      </div>
    </div>
  );
};

export default Details;
