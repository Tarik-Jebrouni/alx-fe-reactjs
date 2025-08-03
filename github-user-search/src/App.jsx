import "./index.css";
import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
