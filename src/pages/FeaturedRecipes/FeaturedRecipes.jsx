import React from "react";
import { Link } from "react-router-dom";

const recipesData = [
  {
    id: 1,
    title: "Delicious Pasta",
    description: "A classic pasta recipe that everyone will love.",
    image: "https://i.ibb.co/HVqJGSD/pasta.jpg",
  },
  {
    id: 2,
    title: "Spicy Tacos",
    description: "Spice up your day with these amazing taco recipes.",
    image: "https://i.ibb.co/ZzTVVHx/Spicy-Tacos.jpg",
  },
  {
    id: 3,
    title: "Sweet Desserts",
    description: "Indulge in these mouthwatering dessert creations.",
    image: "https://i.ibb.co/CPpQfnw/Sweet-Desserts.jpg",
  },
  {
    id: 4,
    title: "Savory Breakfast",
    description: "Start your day with a delicious and savory breakfast.",
    image: "https://i.ibb.co/DpL9Ps6/Savory-Breakfast.jpg",
  },
];

const FeaturedRecipes = () => {
  return (
    <div className="bg-yellow-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="my-title">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recipesData.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-pink-100 text-pink-700 rounded-lg p-4 shadow hover:shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-amber-700 text-lg font-semibold">
                {recipe.title}
              </h3>
              <p className="text-green-700">{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipes;
