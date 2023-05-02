import React from "react";
import { Link } from "react-router-dom";

const ChefDetails = ({ singleChef }) => {
  const { _id, picture, name, experience, number_of_recipes, likes } =
    singleChef;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-48">
        <img src={picture} alt="chefMan" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience : {experience} years</p>
        <p>Recipes : {number_of_recipes} items</p>
        <p>Likes : {likes}</p>
        <div className="card-actions">
          <Link to={`/${_id}`}>
            <button className="btn btn-info text-xs text-white normal-case">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
