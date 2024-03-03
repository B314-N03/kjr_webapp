import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from './components/UserProvider';

const PrivateRoute = ({ component: Component, ignoreProfileNotYetCreated, ...rest }) => {
  const { user } = useContext(UserContext);

  const isLoggedIn = user != null;

  return isLoggedIn ? ignoreProfileNotYetCreated ? <Outlet /> : <Navigate to="/register/create-profile" /> : <Navigate to="/login" />;
}

export default PrivateRoute