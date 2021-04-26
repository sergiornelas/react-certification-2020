import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../providers/Auth/Auth.provider';

const ProtectedRoute = (props) => {
  // if the user is logged in or not
  // const isLoggedIn = '????';

  const { authenticated } = useAuth();

  // return isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
  return authenticated ? <Route {...props} /> : <Redirect to="/login" />;
  // if the user is logged in or not
};

export default ProtectedRoute;
