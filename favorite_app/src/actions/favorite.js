import { FAVORITE_REQUEST, FAVORITE_FAILURE, FAVORITE_SUCCESS } from '../types/favorite'


export const favoriteAction = data => (dispatch) => {

    dispatch(request(data));

    dispatch(success(data));

};

const request = (credentials) => {
    return {
        type: FAVORITE_REQUEST,
        payload: credentials
    };
};

const success = (data) => {
    return {
        type: FAVORITE_SUCCESS,
        payload: data
    };
};
