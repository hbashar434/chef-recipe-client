import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipeDetails = ({ recipes }) => {
  const { recipe_name, image, ingredients, cooking_method, rating } = recipes;
  const [favorite, setFavorite] = useState(true);
  const handleFavorite = () => {
    setFavorite(false);
    toast.success("The Recipe is your Favorite", {
      style: {
        backgroundColor: "#FF8400",
        height: "6rem",
        width: "20rem",
        fontSize: "20px",
        color: "white",
      },
    });
  };

  const CustomStar = (
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
  );
  const myStyles = {
    itemShapes: CustomStar,
    itemStrokeWidth: 2,
    activeFillColor: "rgb(249 115 22)",
    activeStrokeColor: "#F5EA5A",
    inactiveFillColor: "#F5EA5A",
    inactiveStrokeColor: "rgb(249 115 22)",
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
            <div className="flex mt-4">
              <p className="text-3xl mr-8">Ingredients: </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {ingredients?.map((ing, idx) => (
                  <button
                    className="btn btn-outline border-orange-500 hover:bg-orange-600 hover:border-orange-600 mr-2 mb-2"
                    key={idx}
                  >
                    {ing}
                  </button>
                ))}
              </div>
            </div>
            <div className=" text-lg flex">
              <Rating
                style={{ maxWidth: 150 }}
                value={rating}
                itemStyles={myStyles}
                readOnly
              />
              <span className=" ml-2 text-2xl">{rating}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-lg font-semibold">
        {" "}
        <span className="text-2xl mr-2">How to Cook :</span> {cooking_method}
      </div>
      <div className="card-actions justify-end mt-4">
        <button
          onClick={handleFavorite}
          className={`btn  hover:bg-orange-600 border-none md:btn-wide text-white lg:text-xl normal-case ${
            !favorite ? "btn-disabled" : "bg-orange-500"
          }`}
        >
          Add to Favorite
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default RecipeDetails;
