import React from 'react';

const Number = ({ person }) => {
  return (
    <div>
      {person.name} {person.number}
    </div>
  );
};

export default Number;
