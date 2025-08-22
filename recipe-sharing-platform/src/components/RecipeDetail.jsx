import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"; // Adjust the path if necessary
import "../styles.css";

const RecipeDetail = () => {
  const { id } = useParams(); // Extract the 'id' from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe based on the ID from the URL
    const selectedRecipe = data.find((recipe) => recipe.id.toString() === id);
    setRecipe(selectedRecipe);
  }, [id]); // Re-run when the ID changes

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail-container">
      <h1 className="recipe-title">{recipe.title}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />

        <div className="md:w-1/2">
          <h2 className="recipe-section-heading">Ingredients</h2>
          <ul className="recipe-list">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="recipe-section-heading mt-8">Cooking Instructions</h2>
          <ol className="recipe-list">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <a href="#" className="view-recipe-button">
            Back to Recipes
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
