import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-web-89e77-default-rtdb.firebaseio.com/'
});

export default instance;