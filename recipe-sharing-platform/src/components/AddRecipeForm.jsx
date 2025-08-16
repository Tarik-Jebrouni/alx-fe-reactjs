import { useState } from "react";
import "../styles.css";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the inputs
    if (!title || !ingredients || !steps) {
      setError("All fields are required");
      return;
    }

    const ingredientsArray = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());

    if (ingredientsArray.length < 2) {
      setError("Ingredients list must contain at least two items");
      return;
    }

    console.log({ title, ingredients: ingredientsArray, steps });

    // Clear form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="container mx-auto p-6 form-container">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Submit a New Recipe
      </h2>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="custom-input"
            placeholder="Enter recipe title"
          />
        </div>

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
            className="custom-textarea"
            placeholder="Enter ingredients (e.g., flour, sugar, eggs)"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="steps" className="block text-lg font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="custom-textarea"
            placeholder="Enter cooking steps"
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="submit-btn">
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
