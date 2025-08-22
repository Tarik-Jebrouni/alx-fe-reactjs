import React, { useState } from "react";
import "../App.css";

const RegistrationForm = () => {
  // Initialize state for the form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update the state dynamically
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    // Simulate API request and show form data in console
    console.log("Form Submitted:", formData);

    // Clear form after submission
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username" // Ensures this input updates formData.username
          value={formData.username} // Links the input value to formData.username
          onChange={handleChange} // Handles change and updates the state
          placeholder="Enter your username"
          autoComplete="username" // Added autocomplete attribute
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email" // Ensures this input updates formData.email
          value={formData.email} // Links the input value to formData.email
          onChange={handleChange} // Handles change and updates the state
          placeholder="Enter your email"
          autoComplete="email" // Added autocomplete attribute
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password" // Ensures this input updates formData.password
          value={formData.password} // Links the input value to formData.password
          onChange={handleChange} // Handles change and updates the state
          placeholder="Enter your password"
          autoComplete="current-password" // Added autocomplete attribute
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
