import React from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";

const ChefDetails = ({ singleChef }) => {
  const { _id, picture, name, experience, number_of_recipes, likes } =
    singleChef;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-48 h-64" src={picture} alt="chefMan" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience : {experience} years</p>
        <p>Recipes : {number_of_recipes} items</p>
        <p className="flex items-center">
          {" "}
          <FaThumbsUp className="text-orange-400 mr-2 w-4 h-4"></FaThumbsUp>{" "}
          {likes}
        </p>
        <div className="card-actions">
          <Link to={`/${_id}`}>
            <button className="btn bg-orange-300 hover:bg-orange-400 border-none text-xs text-white normal-case">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
