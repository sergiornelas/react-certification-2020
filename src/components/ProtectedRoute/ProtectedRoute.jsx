import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../providers/Auth/Auth.provider';

// const ProtectedRoute = ({ children, ...rest }) => {
const ProtectedRoute = (props) => {
  const { authenticated } = useAuth();
  console.log('authenticated', authenticated);
  return authenticated ? <Route {...props} /> : <Redirect to="/" />;

  // const { authenticated } = useAuth();
  // return (
  //   <Route {...rest} render={() => (authenticated ? children : <Redirect to="/" />)} />
  // );
};

export default ProtectedRoute;
