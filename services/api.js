import axios from 'axios';

const api = axios.create({
    baseURL: 'https://barbervip-backend.herokuapp.com/'
})

export default api;