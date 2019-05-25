import axios from 'axios';
// const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
    },
});

export default instance;