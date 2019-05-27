import React from 'react';
import { Redirect, Route } from 'react-router-dom'


const PrivateRoute = ({ component: Component, logged_in, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      (logged_in ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

export default PrivateRoute;
