import React, { useState } from "react";
import "../App.css";

const RegistrationForm = () => {
  // Initialize state for the form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Initialize state for error messages
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update the state dynamically
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Simulate API request and show form data in console
      console.log("Form Submitted:", formData);

      // Clear form after submission
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    }
  };
  const username = formData.username;
  const email = formData.email;
  const password = formData.password;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Enter your username"
          autoComplete="username"
        />
        {errors.username && <div className="error">{errors.username}</div>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          autoComplete="email"
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
          autoComplete="current-password"
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
