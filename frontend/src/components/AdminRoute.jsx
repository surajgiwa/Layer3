import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AdminRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Route
      {...rest}
      element={
        isAuthenticated && user?.isAdmin ? (
          <Element /> // Render the desired element
        ) : (
          <Navigate to="/login" replace /> // Redirect to login if not admin
        )
      }
    />
  );
};

export default AdminRoute;
