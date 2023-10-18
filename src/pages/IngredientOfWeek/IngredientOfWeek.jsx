import React from 'react';

const ingredientData = [
  {
    id: 1,
    name: 'Avocado',
    description: 'Discover the benefits and recipes using avocado.',
    image: 'https://i.ibb.co/GWx1QFh/Avocado.jpg',
  },
  {
    id: 2,
    name: 'Blueberries',
    description: 'Explore the goodness of blueberries and their versatile uses.',
    image: 'https://i.ibb.co/0ftLcMF/Blueberries.jpg',
  },
  {
    id: 3,
    name: 'Spinach',
    description: 'Learn about the health benefits of spinach and tasty spinach recipes.',
    image: 'https://i.ibb.co/hyHvTzk/Spinach.jpg',
  },
  {
    id: 4,
    name: 'Broccoli',
    description: 'Explore the world of nutritious broccoli and enjoy a variety of recipes using this green vegetable.',
    image: 'https://i.ibb.co/bJ53X9C/Broccoli.jpg',
  },
];

const IngredientOfWeek = () => {
  return (
    <div className="bg-pink-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="my-title text-rose-600">
          Ingredient of the Week
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ingredientData.map((ingredient) => (
            <div
              key={ingredient.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border border-gray-300"
            >
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-rose-600">
                  {ingredient.name}
                </h3>
                <p className="text-gray-600 mt-2">{ingredient.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientOfWeek;
