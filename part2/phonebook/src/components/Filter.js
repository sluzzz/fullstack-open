import React from 'react';
import { useState } from 'react';

const Filter = ({ persons }) => {
  const [filtered, setFiltered] = useState('');

  const handleFilterChange = e => {
    setFiltered(e.target.value);
  };

  console.log(persons);
  console.log(filtered);

  return (
    <div>
      filter shown with
      <input onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
