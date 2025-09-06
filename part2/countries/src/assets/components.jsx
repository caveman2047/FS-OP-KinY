import { useState } from 'react'
import serverComm from './serverComm'
import { useEffect } from 'react'

export const SearchResult = ({search, countries, handleSelectCountry}) =>{
    //console.log('countries: ' + countries + ' search: ' + search.search)
    if (!countries ) {
        console.log('no data yet...')
        return(null)
    }

    const searchResult = countries.filter(
            country =>country.toLowerCase().includes(search.toLowerCase()))
    if (search === ''){
        return (<h3>Result will be shown here.</h3>)
    } 
    else if (searchResult.length > 10){
        return(<h2>Too many matches, please specify another filter.</h2>)
    } 
    else if (1 < searchResult.length && searchResult.length < 10){
        return(
            searchResult.map(country => 
                <>
                <h2>{country}</h2>
                <button type='button' value={country} onClick={() => handleSelectCountry(country)}>Show</button>
                </>
                
            ))  
    } 
    else if (searchResult.length == 1) {
            console.log(searchResult[0])
            var selectedCountry = searchResult[0]
        return(
            <CountryInfo country={selectedCountry} />
            
        )
    } 
    else { return (<h2>No result. Please make another search.</h2>)}
}

export const CountryInfo = ({country}) =>{
    const [test,setTest] = useState([])
    //var test = []

    useEffect(() =>{serverComm
        .getCountry(country)
        .then(response => setTest(response),
            console.log(`done`),
            //setTest(true)),
            console.log(test))
    },[])

    //console.log(test)

    if (test.length == 0){
        return(
            <h2>Loading...</h2>
        )
    } else {
        return(
        
        <div>
        <>
            <h1>{test.name.common}</h1>
            <h3>{test.name.official}</h3>
        </>
        <>
            <p>Capital: {test.capital[0]}</p>
            <p>Area: {test.area}</p>
        </>
        <>
            <h2>Languages</h2>
            {Object.values(test.languages).map(language => 
                <h3>{language}</h3>
            )}
        </>
        <>
            <img src={test.flags.png} alt={test.flags.alt}/>
        </>
        <CityWeather city={test.capital[0]}/>
        </div>
        
          
    )
    }
    
}

export const CityWeather = ({city}) => {
    const [weather, setWeather] = useState([])
    const weatherIconURL = ''

    useEffect(() =>{
        serverComm
        .getWeather(city)
        .then(response => setWeather(response))
    },[])

    if (weather.length === 0){
        return(
            <><h3>weather data here...</h3></>
        )
    } else {
        const weatherIconURL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
        return(
        <div>
            <>
                <h1>Weather in {city}</h1>
                <h2>Temperature is {weather.main.temp} C</h2>
                <img src={weatherIconURL} alt={weather.weather[0].description}/> 
                <h2>{weather.weather[0].main}</h2>
                <h2>{weather.wind.speed} km/h</h2>
            </>
        </div>
        )
    }

}