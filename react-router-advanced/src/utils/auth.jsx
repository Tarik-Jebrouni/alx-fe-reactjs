// src/utils/auth.js
export const isAuthenticated = () => {
  // Simulate authentication logic (e.g., check if a token exists in localStorage)
  return localStorage.getItem("auth") === "true";
};
