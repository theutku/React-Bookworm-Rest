import { USER_LOGGED_IN } from '../types';
import api from '../api';

const userLoggedIn = (user) => {
    return {
        type: USER_LOGGED_IN,
        user
    }
}

export const login = (credentials) => {
    return (dispatch) => {
        return api.user.login(credentials).then((user) => {
            return dispatch(userLoggedIn(user));
        });
    }
}