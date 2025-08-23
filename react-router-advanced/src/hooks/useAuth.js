// src/hooks/useAuth.js
import { useState } from 'react';

export const useAuth = () => {
  // Simulating an auth state, e.g., checking a token in localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('auth') === 'true'
  );

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('auth', 'true');  // Simulating login
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('auth', 'false'); // Simulating logout
  };

  return { isAuthenticated, login, logout };
};
