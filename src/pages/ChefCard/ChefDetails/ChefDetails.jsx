import React from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const ChefDetails = ({ singleChef }) => {
  const { _id, picture, name, experience, number_of_recipes, likes } =
    singleChef;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <LazyLoad offset={300} once>
          <img className="w-48 h-64" src={picture} alt="chef Man" />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience : {experience} years</p>
        <p>Recipes : {number_of_recipes} items</p>
        <p className="flex items-center">
          {" "}
          <FaThumbsUp size={'20px'} className="text-blue-500 mr-2"></FaThumbsUp>{" "}
          {likes}
        </p>
        <div className="card-actions">
          <Link to={`/chefs/${_id}`}>
            <button className="my-btn normal-case">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
