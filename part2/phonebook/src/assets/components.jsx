


  export const Persons = ({newSearch, persons, handleDelete}) => {
      var personArray = [];
      newSearch === '' ?
      personArray = persons :
      personArray = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
      return (
        personArray.map(person => 
              <div>
              <h2 key={person.id}>{person.name} {person.number}</h2> 
              <button type='{button}' onClick={() => handleDelete(person.id)} > Delete</button>
              </div>
              
          )
      )
    }

  export const PersonForm = ({addName, handleNoteChange, handleNumberChange, newName, newNumber}) => {
    return(
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>
        <div>
          number: <input value={newNumber}  onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }

  export const SearchBar = ({newSearch, handleNewSearch}) => {
    return(
        <input value={newSearch} onChange={handleNewSearch}/>
    )
  }
  