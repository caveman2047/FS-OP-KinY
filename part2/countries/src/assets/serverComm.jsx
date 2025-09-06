import axios from 'axios'

const serverURL = 'https://studies.cs.helsinki.fi/restcountries/api/'
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q='
const apikey = import.meta.env.VITE_WEATHER_API_KEY

const getAll = () => {
    const request = axios.get(`${serverURL}all`)
    return request.then(response => response.data)
}

const getCountry = (country) => {
    const request = axios.get(`${serverURL}name/${country}`)
    return request.then(response => response.data)
}

const getWeather = (city) => {
    const request = axios.get(`${weatherURL}${city}&appid=${apikey}&units=metric`)
    return request.then(response => response.data)
}

export default { getAll, getCountry, getWeather }