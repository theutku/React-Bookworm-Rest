import axios from 'axios';

const port = 3001;
axios.defaults.baseURL = window.location.protocol + '//' + window.location.hostname + ':' + port;

export default {
    user: {
        login: (credentials) => axios.post('api/v1/auth', { credentials }).then((res) => {
            return res.data.user;
        })
    }
}