import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivetRoute = ({ children }) => {
  const { user } = use(AuthContext);

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivetRoute;
