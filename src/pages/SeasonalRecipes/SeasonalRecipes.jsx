import React from "react";

const seasonalRecipeData = [
  {
    id: 1,
    title: "Spring Salad",
    description: "Fresh and vibrant salad recipe for the spring season.",
    image: "https://i.ibb.co/8KLHBY0/Spring-Salad.jpg",
    color: "bg-green-200",
  },
  {
    id: 2,
    title: "Autumn Pie",
    description: "Warm and comforting pie recipe for the autumn season.",
    image: "https://i.ibb.co/HKNyxj4/Autumn-Pie.jpg",
    color: "bg-orange-200",
  },
  {
    id: 3,
    title: "Summer Smoothie",
    description: "Cool down with a refreshing summer smoothie.",
    image: "https://i.ibb.co/YDn72Q8/Fruit-Smoothie.jpg",
    color: "bg-teal-200",
  },
  {
    id: 4,
    title: "Fruit Smoothie",
    description: "Enjoy a delicious fruit smoothie for a refreshing treat.",
    image: "https://i.ibb.co/SJ0dwQh/Summer-Smoothie.jpg",
    color: "bg-pink-200",
  },
  {
    id: 5,
    title: "Winter Soup",
    description: "Hearty and warming soup recipe for the winter season.",
    image: "https://i.ibb.co/M7QnDM0/Winter-Soup.jpg",
    color: "bg-yellow-200",
  },

  {
    id: 6,
    title: "Summer Grilling",
    description: "Savor the flavors of summer with these grilled dishes.",
    image: "https://i.ibb.co/cgrV6Wm/Summer-Grilling.jpg",
    color: "bg-red-200",
  },
];

const SeasonalRecipes = () => {
  return (
    <div className="py-10 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="my-title text-amber-700">Seasonal Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {seasonalRecipeData.map((recipe) => (
            <div
              key={recipe.id}
              className={`rounded-lg p-4 shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 cursor-pointer ${recipe.color}`}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold text-orange-600">
                {recipe.title}
              </h3>
              <p className="text-green-800">{recipe.description}</p>
              <button className="text-blue-600 hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonalRecipes;
