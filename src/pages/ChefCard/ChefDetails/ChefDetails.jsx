import React from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const ChefDetails = ({ singleChef }) => {
  const { _id, picture, name, experience, number_of_recipes, likes } =
    singleChef;
  return (
    <div className="card card-side bg-base-100 shadow-xl overflow-hidden">
      <figure>
        <LazyLoad offset={300}>
          <img
            className=" w-48 h-72 object-cover"
            src={picture}
            alt="chef Man"
          />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{experience} years of experience</p>
        <p>{number_of_recipes} items in recipe</p>
        <p className="flex items-center text-blue-800 cursor-pointer">
          {" "}
          <FaThumbsUp
            size={"20px"}
            className="text-blue-500 mr-2"
          ></FaThumbsUp>{" "}
          {likes}
        </p>
        <div className="card-actions">
          <Link to={`/chefs/${_id}`}>
            <button className="my-btn normal-case">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
