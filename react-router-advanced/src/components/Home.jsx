// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Home() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {isAuthenticated ? (
        <div>
          <p>You are logged in.</p>
          <button onClick={logout}>Logout</button>
          <Link to="/profile">Go to Profile</Link>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Home;
