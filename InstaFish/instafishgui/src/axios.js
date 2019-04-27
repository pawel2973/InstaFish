import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fish-it-7e338.firebaseio.com/'
});

export default instance;