// src/TodoList.js
import React, { useState } from "react";

const TodoList = () => {
  // Initialize state with a few todo items
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: false },
    { id: 3, text: "Build Todo App", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  // Function to add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return; // Avoid adding empty todos

    const newTodoItem = {
      id: Date.now(), // Unique ID using current time
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]); // Add new todo to state
    setNewTodo(""); // Clear input field after adding todo
  };

  // Function to toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Remove the todo
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
