import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Todo App</h1>
      </header>
      <main>
        <TodoList />{/* Render the TodoList component */}
      </main>
    </div>
  );
}

export default App;
