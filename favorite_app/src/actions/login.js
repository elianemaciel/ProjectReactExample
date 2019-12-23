import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from '../types/login'
import { push } from 'connected-react-router';
import Authentication from './Autentication';


export const loginAction = credentials => (dispatch) => {

    dispatch(request(credentials));

    let auth = new Authentication(credentials);

    let result = auth.authenticate();

    if (result.status === false) {
        dispatch(failure({...result}));
    }
    else {
        dispatch(success(result));
        dispatch(push('/dashboard'));
    }
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
