import { useState } from "react";
import "../styles.css";

const AddRecipeForm = () => {
  // State for form fields
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors before validation
    setErrors({});

    // Validate form fields
    const validationErrors = validate();

    // If there are validation errors, set them and stop form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit the form (e.g., log the data or send it to the server)
    console.log({ title, ingredients, steps });

    // Clear the form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  // Validate form fields
  const validate = () => {
    const errors = {};

    // Check if title is empty
    if (!title) {
      errors.title = "Title is required";
    }

    // Check if ingredients are empty
    if (!ingredients) {
      errors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      // Check if ingredients contain at least 2 items
      errors.ingredients = "Ingredients should be at least two items";
    }

    // Check if preparation steps are empty
    if (!steps) {
      errors.steps = "Preparation steps are required";
    }

    return errors;
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg md:rounded-xl">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Submit a New Recipe
      </h2>

      {/* Display errors if there are any */}
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 mb-4">
          {Object.values(errors).map((error, index) => (
            <div key={index} className="error-message">
              {error}
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <div className="text-red-500 text-sm">{errors.title}</div>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-lg font-medium mb-2"
          >
            Ingredients (comma separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            placeholder="Enter ingredients (e.g., flour, sugar, eggs)"
          ></textarea>
          {errors.ingredients && (
            <div className="text-red-500 text-sm">{errors.ingredients}</div>
          )}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-lg font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            placeholder="Enter cooking steps"
          ></textarea>
          {errors.steps && (
            <div className="text-red-500 text-sm">{errors.steps}</div>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="submit-button w-full bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
