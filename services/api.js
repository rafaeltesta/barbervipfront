import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.8.232:3333'
})

export default api;


// 'https://barbervip-backend.herokuapp.com/'