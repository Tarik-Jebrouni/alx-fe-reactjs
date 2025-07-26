import React from "react"; // ✅ This fixes the ReferenceError
import { useRecipeStore } from "./recipeStore";
import { useEffect } from "react";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations =
    useRecipeStore.getState().generateRecommendations;

  const favorites = useRecipeStore((state) => state.favorites);

  useEffect(() => {
    generateRecommendations();
  }, [favorites]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Favorite more recipes!</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
