import axios from 'axios';

//Base URL
const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;