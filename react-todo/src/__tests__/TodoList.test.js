// src/__tests__/TodoList.test.js
import React from 'react'; // Ensure React is imported
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../component/TodoList'; // Import TodoList component

describe('TodoList Component', () => {

  test('renders TodoList component', () => {
    render(<TodoList />);
    const heading = screen.getByText(/Todo List/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    const todo1 = screen.getByText(/Learn React/i);
    const todo2 = screen.getByText(/Write Tests/i);
    const todo3 = screen.getByText(/Build Todo App/i);
    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
    expect(todo3).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    // Simulate user typing and clicking the add button
    fireEvent.change(input, { target: { value: 'Test adding todo' } });
    fireEvent.click(button);

    // Check if the new todo is rendered
    const newTodo = screen.getByText('Test adding todo');
    expect(newTodo).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    
    // Click the todo item to toggle completion
    fireEvent.click(todoItem);

    // Check if the text decoration is applied (line-through)
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Simulate clicking again to mark it as not completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0]; // Get the first delete button
    fireEvent.click(deleteButton);

    // Check if the todo item is removed from the DOM
    const todoItem = screen.queryByText('Learn React');
    expect(todoItem).not.toBeInTheDocument();
  });

});
