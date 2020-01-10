import React from 'react';

const Country = ({ country, onClick }) => {
  return (
    <div>
      {country.name}
      <button id={country.name} onClick={onClick}>
        show
      </button>
    </div>
  );
};

export default Country;
