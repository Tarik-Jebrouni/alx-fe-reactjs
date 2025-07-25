// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // 🔁 This file must exist in src/
import "./index.css"; // ✅ Optional, remove if not created

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
