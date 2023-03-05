import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import AppContext from "./AppContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLogin } = useContext(AppContext);
  if (!isAuthenticated && !isLogin) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default PrivateRoute;
