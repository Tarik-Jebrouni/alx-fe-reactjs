// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BlogPost from "./components/BlogPost"; // Import the BlogPost component
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css"; // Import global CSS file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />{" "}
        {/* Dynamic Route for BlogPost */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
