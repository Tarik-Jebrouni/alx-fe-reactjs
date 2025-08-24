import React from "react";
import "./App.css"; // Import the CSS file
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
};

export default App;
