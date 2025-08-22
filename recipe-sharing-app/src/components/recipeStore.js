import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',

  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    set({
      recipes: updated,
      filteredRecipes: filterBySearch(updated, get().searchTerm),
    });
  },

  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({
      recipes: updated,
      filteredRecipes: filterBySearch(updated, get().searchTerm),
    });
  },

  deleteRecipe: (id) => {
    const updated = get().recipes.filter((r) => r.id !== id);
    set({
      recipes: updated,
      filteredRecipes: filterBySearch(updated, get().searchTerm),
      favorites: get().favorites.filter((fid) => fid !== id),
    });
  },

  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: filterBySearch(recipes, get().searchTerm),
    }),

  setSearchTerm: (term) =>
    set({
      searchTerm: term,
      filteredRecipes: filterBySearch(get().recipes, term),
    }),

  addFavorite: (id) => {
    if (!get().favorites.includes(id)) {
      set({ favorites: [...get().favorites, id] });
    }
  },

  removeFavorite: (id) =>
    set({
      favorites: get().favorites.filter((fid) => fid !== id),
    }),

  generateRecommendations: () => {
    const all = get().recipes;
    const favs = get().favorites;
    const recommended = all.filter(
      (r) => !favs.includes(r.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));

function filterBySearch(recipes, term) {
  return recipes.filter((r) =>
    r.title.toLowerCase().includes(term.toLowerCase())
  );
}
