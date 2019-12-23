import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { login } from './login';
import { favorite } from './favorite';

export default history => combineReducers({
    router: connectRouter(history),
    login,
    favorite,
});