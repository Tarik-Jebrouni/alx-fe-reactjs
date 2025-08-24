import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../component/TodoList'; // Adjust the import path based on your file structure
import React from 'react'; // Add this line


// Test: Render the TodoList component and check initial todos
 
test('renders TodoList component with initial todos', () => {
  render(<TodoList />);
    // Check if the demo todos are rendered
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Write tests')).toBeInTheDocument();
});
// Test: Adding a new todo
test('adds a new todo', () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');
  // Simulate user typing in the input field
  fireEvent.change(input, { target: { value: 'New Todo' } });
  
  // Simulate clicking the add button
  fireEvent.click(button);
  
  // Check if the new todo appears in the list
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

// Test: Toggling todo completion status
test('toggles todo completion status', () => {
  render(<TodoList />);
  
  const todoText = screen.getByText('Learn React');
  
  // Simulate clicking on the todo to mark it as completed
  fireEvent.click(todoText);
  
  // Check if the todo is crossed out (completed)
  expect(todoText).toHaveStyle('text-decoration: line-through');
  
  // Simulate clicking again to mark it as not completed
  fireEvent.click(todoText);
  
  // Check if the crossing out is removed (not completed)
  expect(todoText).toHaveStyle('text-decoration: none');
});

// Test: Deleting a todo
test('deletes a todo', () => {
  render(<TodoList />);
  
  const deleteButton = screen.getByText('Delete');
  
  // Simulate clicking the delete button
  fireEvent.click(deleteButton);
  
  // Check if the todo is removed from the list
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
