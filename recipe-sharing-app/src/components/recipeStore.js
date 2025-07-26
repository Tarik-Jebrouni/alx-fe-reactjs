import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterBySearch(updatedRecipes, state.searchTerm)
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterBySearch(updatedRecipes, state.searchTerm)
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterBySearch(updatedRecipes, state.searchTerm)
      };
    }),

  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: filterBySearch(recipes, state.searchTerm)
    })),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterBySearch(state.recipes, term)
    })),
}));

function filterBySearch(recipes, term) {
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
}
