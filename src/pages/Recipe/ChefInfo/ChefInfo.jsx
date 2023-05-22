import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const ChefInfo = ({ data }) => {
  const { picture, name, bio, experience, number_of_recipes, likes } = data;
  return (
    <div className="flex justify-center py-16">
      <div className="md:flex flex-row-reverse gap-16 justify-center items-center w-10/12">
        <figure className="md:w-9/12 pb-8 md:pb-0">
          <img src={picture} className="rounded-lg shadow-2xl" />
        </figure>
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-3 text-2xl font-semibold">{bio}</p>
          <p>
            <span className="py-1 text-xl my-btn-green">
              Recipes : {number_of_recipes} items
            </span>
          </p>
          <p className="my-6">
            <span className="py-1 text-xl my-btn-yellow">
              Experience : {experience} years
            </span>
          </p>

          <p className="py-1 text-xl w-28 flex items-center my-btn-blue">
            {" "}
            <FaThumbsUp className="text-blue-500 border-none mr-2 w-6 h-6"></FaThumbsUp>{" "}
            {likes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefInfo;
