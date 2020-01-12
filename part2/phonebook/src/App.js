import React, { useState, useEffect } from 'react';
import Person from './components/Person';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Notification from './components/Notification';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [personsFiltered, setPersonsFiltered] = useState([]);
  const [clicked, setClicked] = useState(false);
  // const [notification, setNotification] = useState('');

  useEffect(() => {
    personService.getAll().then(response => {
      setPersons(response.data);
    });
  }, [clicked]);

  useEffect(() => {
    setPersonsFiltered(
      persons.filter(person => person.name.toLowerCase().search(filter) !== -1)
    );
  }, [filter, persons, clicked]);
  // todo rerender when clicking on a button

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
    //todo put instead of post so json server updates automatically

    setNewName('');
    setNewNumber('');
  };

  // todo number change
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

  const handleDeleteClick = e => {
    // if (window.confirm(`Delete ${e.target.name}?`)) {
    //   personService.del(e.target.id);
    // }
    personService.del(e.target.id);

    setClicked(!clicked);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={'poruka'} />
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
      {filter
        ? personsFiltered.map(person => (
            <Person
              key={person.name}
              person={person}
              onClick={handleDeleteClick}
            />
          ))
        : persons.map(person => (
            <Person
              key={person.name}
              person={person}
              onClick={handleDeleteClick}
            />
          ))}
    </div>
  );
};

// todo finish 2.18

export default App;
