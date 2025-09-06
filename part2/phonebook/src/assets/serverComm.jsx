import axios from "axios";
const serverURL = "http://localhost:3001/persons"

const getAll = () => {
    const request = axios.get(serverURL)
    return (request.then(response => response.data))
    .catch(error =>{
        console.log('Error in get')
    })
    
}

const create = (newObject) => {
    const request = axios.post(serverURL, newObject)
    return (request.then(response => response.data))
}

const change = (newObject, id) =>{
    const request = axios.put(`${serverURL}/${id}`, newObject)
    return (request.then(response => response.data))
    .catch(error =>{
        console.log('Error in put')
    })
}

const del = (id) => {
    return axios.delete(`${serverURL}/${id}`)
}

export default { getAll, create, del, change }