import React, { useState } from "react";

const cookingTipsData = [
  {
    id: 1,
    title: "Perfectly Seasoning Your Food",
    description: "Learn the art of seasoning to elevate your dishes.",
  },
  {
    id: 2,
    title: "The Chopping and Dicing",
    description: "Master the techniques for precise chopping and dicing.",
  },
  {
    id: 3,
    title: "The Science of Baking",
    description: "Understand the science behind successful baking.",
  },
  {
    id: 4,
    title: "Flavor Pairing Tips",
    description: "Discover unique combinations to enhance your dishes.",
  },
];

const CookingTips = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTip, setSelectedTip] = useState(null);

  const openModal = (tip) => {
    setSelectedTip(tip);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedTip(null);
    setModalIsOpen(false);
  };

  return (
    <div className="py-10 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className=" text-amber-500 my-title">
          Cooking Tips and Tricks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cookingTipsData.map((tip) => (
            <div
              key={tip.id}
              className="bg-green-100 text-green-700 rounded-lg p-4 shadow hover:shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <h3 className="text-amber-700 text-lg font-semibold">
                {tip.title}
              </h3>
              
              <button
                onClick={() => openModal(tip)}
                className="text-orange-500 hover:underline mt-2 my-btn"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-4 rounded-lg z-10">
            <h3 className="text-xl font-bold text-amber-700 mb-4">
              {selectedTip.title}
            </h3>
            <p className="text-green-700 text-2xl font-bold">{selectedTip.description}</p>
            <button
              onClick={closeModal}
              className="text-orange-500 hover:underline mt-2 my-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookingTips;
