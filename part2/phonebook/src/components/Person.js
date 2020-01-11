import React from 'react';

const Number = ({ person, onClick }) => {
  return (
    <div>
      {person.name} {person.number}{' '}
      <button id={person.id} onClick={onClick} name={person.name}>
        delete
      </button>
    </div>
  );
};

export default Number;
