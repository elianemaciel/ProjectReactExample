import React, { Component } from 'react';
import { Redirect, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class PrivateRoute extends Component {

  render() {

    const {component, exact, path, state, login} = this.props;
    const Component = component;

    return (
      <Route
        exact={exact}
        path={path}
        state={state}
        render={props => login.loggedIn ?
          (
            <Component {...props}  />
          ) :
          (
            <Redirect
              to={{
                pathname: '/login',
                push: true,
                exact: true,
                from: this.props.location
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = ({ login }) => {
  return { login };
};

export default withRouter(connect(mapStateToProps)(PrivateRoute));
