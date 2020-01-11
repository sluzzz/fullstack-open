import React, { useState, useEffect } from 'react';
import Person from './components/Person';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personService.getAll().then(response => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = e => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to the phonebook`);
      } else {
        setPersons(persons.concat(personObject));
      }
    }
    personService.post(personObject);

    setNewName('');
    setNewNumber('');
  };

  // todo
  // const addPerson = e => {
  //   e.preventDefault();
  //   const personObject = {
  //     name: newName,
  //     number: newNumber
  //   };
  //   for (let i = 0; i < persons.length; i++) {
  //     if (persons[i].name === newName) {
  //       if (
  //         window.confirm(
  //           `${newName} is already added to the phonebook, replace the old number with a new one?`
  //         )
  //       ) {
  //         const id = persons[i].id;
  //         const changedPerson = { ...persons, number: newNumber };
  //         personService.put(id, changedPerson).then(response => {
  //           setPersons(
  //             persons.map(person => (person.id !== id ? person : response.data))
  //           );
  //         });
  //       }
  //     } else {
  //       setPersons(persons.concat(personObject));
  //     }
  //   }
  //   personService.post(personObject);

  //   setNewName('');
  //   setNewNumber('');
  // };

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

  const handleDeleteClick = e => {
    if (window.confirm(`Delete ${e.target.name}?`)) {
      personService.del(e.target.id);
    }
  };

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
        <Person key={person.name} person={person} onClick={handleDeleteClick} />
      ))}
    </div>
  );
};

// todo usestate na results, finish 2.18

export default App;
