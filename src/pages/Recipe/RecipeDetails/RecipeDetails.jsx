import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const RecipeDetails = ({ recipes }) => {
  const { recipe_name, image, ingredients, cooking_method, rating } = recipes;
  const [favorite, setFavorite] = useState(true);
  const handleFavorite = () => {
    setFavorite(false);
    toast.success("The Recipe is your Favorite");
  };

  return (
    <div className="card bg-base-100 shadow-xl my-16 p-8">
      <div className="card lg:card-side">
        <figure className="p-10">
          <img
            src={image}
            alt="Food Image"
            className=" rounded-full w-72 h-72"
          />
        </figure>
        <div className="grid items-center">
          <div className="card-body">
            <h2 className="card-title text-3xl">Recipe name : {recipe_name}</h2>
            <p className=" text-xl">Ingredients : {ingredients}</p>
            <p className=" text-lg">Ratings : {rating}</p>
          </div>
        </div>
      </div>
      <div className="text-lg font-semibold">
        {" "}
        <span className="text-2xl">How to Cook :</span> {cooking_method}
      </div>
      <div className="card-actions justify-end mt-4">
        <button
          onClick={handleFavorite}
          className={`btn btn-info md:btn-wide text-white lg:text-xl normal-case ${
            !favorite ? "btn-disabled" : ""
          }`}
        >
          Favorite
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default RecipeDetails;
