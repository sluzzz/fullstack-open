import React, { useState } from 'react';
import Person from './components/Person';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addPerson = e => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber
    };
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to the phonebook`);
      } else {
        setPersons(persons.concat(nameObject));
      }
    }
    setNewName('');
    setNewNumber('');
    // e.target.reset();
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value.toLowerCase());
  };

  const results = filter
    ? persons.filter(person => person.name.toLowerCase().search(filter) !== -1)
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        nameVal={newName}
        numberVal={newNumber}
      />
      <h2>Numbers</h2>
      {results.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default App;
