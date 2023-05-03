import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const ChefInfo = ({ data }) => {
  const { picture, name, bio, experience, number_of_recipes, likes } = data;
  return (
    <div className="hero min-h-screen bg-base-200 md:p-16 lg:24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-3 text-2xl font-semibold">{bio}</p>
          <p className="py-1 text-xl">Recipes : {number_of_recipes} items</p>
          <p className="py-1 text-xl">Experience : {experience} years</p>
          <p className="py-1 text-xl flex items-center">
            {" "}
            <FaThumbsUp className="text-orange-500 border-none mr-2 w-6 h-6"></FaThumbsUp>{" "}
            {likes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefInfo;
