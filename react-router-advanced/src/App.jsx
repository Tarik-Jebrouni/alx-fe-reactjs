// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./components/BlogPost";
import "./App.css"; // Import global CSS file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dynamic Route for BlogPost */}
        <Route path="/blog/:id" element={<BlogPost />} />{" "}
        {/* Protected Route for Profile */}
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* Catch-all route for NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
