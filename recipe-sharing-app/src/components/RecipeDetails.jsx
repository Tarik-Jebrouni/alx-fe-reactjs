import React from "react"; // ✅ This fixes the ReferenceError
import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <p>
        <strong>ID:</strong> {recipe.id}
      </p>{" "}
      {/* ✅ Explicitly show recipe.id */}
      <p>
        <strong>Description:</strong> {recipe.description}
      </p>
      <EditRecipeForm recipe={recipe} />
      <h3>Danger Zone</h3>
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
