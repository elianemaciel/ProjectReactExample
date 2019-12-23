import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from '../types/login'
import { push } from 'connected-react-router';


export const loginAction = credentials => (dispatch) => {

    dispatch(request(credentials));

    dispatch(success(credentials));
    dispatch(push('/dashboard'));
    // dispatch(failure({...credentials, ...response}));
};

const request = (credentials) => {
    return {
        type: LOGIN_REQUEST,
        payload: credentials
    };
};

const success = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    };
};

const failure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    };
};
