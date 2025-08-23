// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Import the useAuth hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Check if user is authenticated

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/" />;
  }

  return children; // If authenticated, render the protected content
}

export default ProtectedRoute;
