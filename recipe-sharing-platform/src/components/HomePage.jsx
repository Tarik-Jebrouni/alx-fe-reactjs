import { useState, useEffect } from "react";
import data from "../data.json"; // Import the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setRecipes(data);
  }, []); // Empty dependency array means this will run only once when the component mounts

  return (
    <div className="home-container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="recipe-title">{recipe.title}</h2>
              <p className="recipe-summary">{recipe.summary}</p>
              <a href={`/recipe/${recipe.id}`} className="view-recipe-link">
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
