import React from "react";

const ChefInfo = ({ data }) => {
  const { picture, name, bio, experience, number_of_recipes, likes } = data;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-3 font-semibold">{bio}</p>
          <p className="py-1">Recipes : {number_of_recipes}</p>
          <p className="py-1">Experience : {experience} years</p>
          <p className="py-1">Likes : {likes}</p>
        </div>
      </div>
    </div>
  );
};

export default ChefInfo;
