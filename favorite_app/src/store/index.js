import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();

const middlewareApps = [thunk, routerMiddleware(history)];


const middleware = applyMiddleware(
  ...middlewareApps
);


export const Store = createStore(
  createRootReducer(history),
  compose(middleware),
);