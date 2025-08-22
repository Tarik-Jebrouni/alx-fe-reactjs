import React from "react"; // ✅ This fixes the ReferenceError
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by name..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: "100%",
        padding: "0.5rem",
        marginBottom: "1rem",
        fontSize: "1rem",
      }}
    />
  );
};

export default SearchBar;
