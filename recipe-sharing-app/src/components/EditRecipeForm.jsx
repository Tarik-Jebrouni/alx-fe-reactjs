import React from "react"; // ✅ This fixes the ReferenceError
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleUpdate = (event) => {
    event.preventDefault(); // ✅ Required to prevent default form submission
    updateRecipe({ id: recipe.id, title, description });
  };

  return (
    <form onSubmit={handleUpdate}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
