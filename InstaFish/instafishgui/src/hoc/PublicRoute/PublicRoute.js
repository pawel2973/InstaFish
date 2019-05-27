import React from 'react';
import { Redirect, Route } from 'react-router-dom'


const PublicRoute = ({ component: Component, logged_in, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      (!logged_in ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

export default PublicRoute;
