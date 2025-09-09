import { useState, useEffect} from 'react'
import axios from 'axios'
import { PersonForm, Persons, SearchBar } from './assets/components'
import serverComm from './assets/serverComm'
import { Notification, NegNotification} from './assets/notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

    useEffect(() => {
      serverComm
        .getAll()
        .then(persondata => {
          setPersons(persondata)
        })
    }, [])

  const handleNoteChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
    console.log('new name input: ' + newName)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
    console.log('number input : ' + newNumber)
  }

  const handleNewSearch = (event) =>{
    setNewSearch(event.target.value)
    console.log('search for: ' + newSearch)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObj = {
      name: newName,
      number: newNumber
    }
    console.log('new name is ' + newName + ' and number is ' + newNumber)
    persons.find(person => person.name === newName) ? (
      window.confirm( newName + ' is already added to phonebook. Do you wish to replace the number?') ? (
        serverComm
          .change(nameObj, persons.find(person => person.name === newName).id)
          .then(persondata => setPersons(
            persons.map(
              person => person.id === persondata.id? persondata : person)))
          .catch(error => {
            setError(`${newName} has already been removed from the server`)
            setTimeout(()=>{setError(null)}, 3000)
          }),
        console.log(newName + ' number updated')

      ) : (console.log('User rejected replacement of number'))
    ) : (
      serverComm
        .create(nameObj)
        .then(response => {setPersons(persons.concat(response)),
          setMessage(response.name + ` has been added.`),
          setTimeout(()=>{setMessage(null)}, 3000)}),
      console.log(persons)
    )
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (ID) =>{
    const deletePerson = persons.find(person => person.id === ID)
    window.confirm(`Are you sure you want to delete ${deletePerson.name} ?`) ?
    (
    serverComm
      .del(ID)
      .then(response =>{
        setPersons(persons.filter(person => person.id !== ID))
        console.log(`id : ${ID} was deleted`)
      })
    ) : console.log(`Delete process on id: ${ID} was terminated`)
  }

  

  const display = newSearch === ''  ?
   persons : 
   persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
   
  
  

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
      <NegNotification message={error} />
      <h2>Searching someone?</h2>
      <h3>Filter with keywords...</h3>
      <SearchBar newSearch={newSearch} handleNewSearch={handleNewSearch}/>
      <h1>Add new contact</h1>
      <PersonForm 
      addName={addName} 
      handleNoteChange={handleNoteChange} 
      handleNumberChange={handleNumberChange} 
      newName={newName}
      newNumber={newNumber}
      />
      <h1>Numbers</h1>
      <div>
        <Persons newSearch={newSearch} persons={persons} handleDelete={handleDelete}/>
      </div>
      
      
    </div>

    
  )
}

//{display.map(person =>
//         <h2 key={person.id}>{person.name} {person.number}</h2>
//        )}

export default App