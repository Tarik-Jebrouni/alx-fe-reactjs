import React from "react"; // ✅ This fixes the ReferenceError
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description.slice(0, 60)}...</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
