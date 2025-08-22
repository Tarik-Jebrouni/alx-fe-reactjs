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
          name="username"
          value={formData.username} // Linking the input value to state
          onChange={handleChange} // Handling change event
          placeholder="Enter your username"
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email} // Linking the input value to state
          onChange={handleChange} // Handling change event
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password} // Linking the input value to state
          onChange={handleChange} // Handling change event
          placeholder="Enter your password"
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
