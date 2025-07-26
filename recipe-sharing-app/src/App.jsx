import React from "react"; // ✅ This fixes the ReferenceError
import { useRecipeStore } from "./components/recipeStore";
import { useEffect } from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import "./App.css"; // Import the CSS

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    const sampleRecipes = [
      {
        id: 1,
        title: "Classic Pancakes",
        description:
          "Mix flour, milk, eggs, and baking powder. Fry in butter until golden brown. Serve with syrup.",
      },
      {
        id: 2,
        title: "Spaghetti Bolognese",
        description:
          "Cook ground beef with onions. Add tomato sauce and herbs. Serve over spaghetti.",
      },
      {
        id: 3,
        title: "Greek Salad",
        description:
          "Combine cucumbers, tomatoes, olives, and feta. Dress with olive oil and lemon juice.",
      },
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
