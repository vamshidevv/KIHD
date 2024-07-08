// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const canNavigate = sessionStorage.getItem("canNavigate") === "true";

  return canNavigate ? children : <Navigate to="/mytickets" />;
};

export default ProtectedRoute;
