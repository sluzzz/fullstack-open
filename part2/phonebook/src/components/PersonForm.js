import React from 'react';

const PersonForm = ({
  onSubmit,
  onNameChange,
  onNumberChange,
  nameVal,
  numberVal
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          name: <input onChange={onNameChange} value={nameVal} />
        </div>
        <div>
          number: <input onChange={onNumberChange} value={numberVal} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
