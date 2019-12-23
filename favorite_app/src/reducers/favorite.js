import { FAVORITE_REQUEST, FAVORITE_SUCCESS, FAVORITE_FAILURE } from '../types/favorite';

const initialState = {
    isRequesting: false,
    favorite: [],
    message: null,
};

export const favorite = (state = initialState, action) => {

  switch (action.type) {

    case FAVORITE_REQUEST:
        return {
            ...state,
            isRequesting: true,
            message: null,
        };

    case FAVORITE_SUCCESS:
        return {
            ...state,
            isRequesting: false,
            message: action.payload.message,
            favorite: state.favorite.concat(action.payload.favorite)
        };

    case FAVORITE_FAILURE:
        return {
            ...state,
            isRequesting: false,
            message: action.payload.message,
        };

     default:
        return state;
  }
};
