import { useState, useEffect } from 'react'
import axios from 'axios'
import serverComm from './assets/serverComm'
import {SearchResult} from './assets/components'


function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {serverComm
      .getAll()
      .then(countrydata => {
        //const countrylist = countrydata.map(country => country.name.common)
        //console.log(countrylist[0])
        setCountries(countrydata.map(country => country.name.common))
        
      })}
    
    ,[])
  console.log(countries[1])

  const handleSearch = (e) =>{
    console.log('search for ' + e.target.value)
    setSearch(e.target.value)
  }

  const handleSelectCountry = (country) =>{
    console.log(country)
    setSearch(country)
  }

  return (
    <>  
    <p>Find country</p> 
    <input value={search} onChange={handleSearch}/>
    <SearchResult search={search} countries={countries} handleSelectCountry={handleSelectCountry}/>
    </>
  )
}

export default App
