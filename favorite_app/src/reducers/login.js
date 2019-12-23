import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../types/login';
import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../types/login';

const initialState = {
    isRequesting: false,
    userEmail: null,
    user: {},
    name: '',
    favorite: [],
    loggedIn: false,
    message: null,
    userName: null
};

export const login = (state = initialState, action) => {

  switch (action.type) {

    case LOGIN_REQUEST:
        return {
            ...state,
            isRequesting: true,
            message: null,
        };

    case LOGIN_SUCCESS:
        return {
            ...state,
            isRequesting: false,
            userToken: action.payload.token,
            userEmail: action.payload.email,
            userName: action.payload.name,
            message: action.payload.message,
            user: action.payload.user,
            loggedIn: true,
            name: action.payload.username
        };

    case LOGIN_FAILURE:
        return {
            ...state,
            isRequesting: false,
            message: action.payload.message,
            loggedIn: false
        };

    case LOGOUT_REQUEST:
        return {
            ...state,
            isRequesting: true
        };

    case LOGOUT_SUCCESS:
        return {
            ...initialState
        };

    case LOGOUT_FAILURE:
        return {
            ...state,
            isRequesting: false,
            message: action.payload.message
        };

    default:
        return state;
  }
};
