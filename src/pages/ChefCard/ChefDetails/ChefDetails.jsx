import React from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefDetails = ({ singleChef }) => {
  const { _id, picture, name, experience, number_of_recipes, likes } =
    singleChef;
  return (
    <div className="card card-side bg-base-100 shadow-xl overflow-hidden">
      <figure>
        <LazyLoadImage
          effect="blur"
          delayTime={600}
          src={picture}
          alt="chef Man"
          className=" w-60 h-full object-cover"
        />
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
            <button className="my-btn normal-case text-sm">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
