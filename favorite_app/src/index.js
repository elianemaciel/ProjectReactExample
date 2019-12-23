import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseLayout from './layouts/BaseLayout';
import Login from './components/Login';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { Store, history } from './store';
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";


ReactDOM.render(
    <Provider store={Store}>
        <ConnectedRouter history={history}>
        <div style={{height: '100%'}}>
            <BaseLayout />
            <Switch>
                {/* <Route path="/login" component={Login}/> */}
                <PrivateRoute path="/" component={App}/>
                <PrivateRoute path="/dashboard" component={Dashboard}/>
            </Switch>
        </div>
        </ConnectedRouter>
    </Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
