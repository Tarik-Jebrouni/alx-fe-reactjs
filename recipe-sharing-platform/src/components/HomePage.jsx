import { Link } from "react-router-dom";

const HomePage = () => {
  // Assuming `recipes` is an array of recipe objects.
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      summary:
        "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      summary:
        "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato-based gravy.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <Link to={`/recipe/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-600 mt-2">{recipe.summary}</p>
                <a href="#" className="text-blue-500 mt-4 inline-block">
                  View Recipe
                </a>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
