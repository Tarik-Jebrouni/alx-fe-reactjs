import React, { useState } from "react";

const TodoList = () => {
  // Initial state with two demo todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write tests", completed: false },
  ]);

  // Function to add a new todo
  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: text, completed: false },
    ]);
  };

  // Function to toggle completion of a todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`todo-text ${todo.completed ? "completed" : ""}`}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add Todo Form component
const AddTodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="input-field"
      />
      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );
};

export default TodoList;
