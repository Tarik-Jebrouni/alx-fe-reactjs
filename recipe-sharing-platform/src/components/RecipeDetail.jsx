import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the id from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe with the given id
    const selectedRecipe = data.find((recipe) => recipe.id.toString() === id);
    setRecipe(selectedRecipe);
  }, [id]);

  // If recipe is still loading or not found, display loading or error message
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">{recipe.title}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
        />

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold">Ingredients</h2>
          <ul className="list-disc pl-5 mt-4">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Cooking Instructions</h2>
          <ol className="list-decimal pl-5 mt-4">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="text-gray-700">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
