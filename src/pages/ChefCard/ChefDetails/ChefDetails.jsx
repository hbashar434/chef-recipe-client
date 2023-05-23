import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ChefDetails = ({ singleChef }) => {
  const { _id, picture, name, experience, number_of_recipes, likes } =
    singleChef;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="card w-full bg-orange-50 border-x-2 hover:shadow-lg">
      <figure className="hover:shadow-lg">
        <img
          src={picture}
          alt="Shoes"
          className="w-full h-60 rounded-t-lg object-cover"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
        />
        <div className="absolute top-3 right-2 bg-black rounded-full py-1 px-3 bg-opacity-20">
          <p className="text-gray-200 font-semibold">Likes: {likes}</p>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{experience} years of experience</p>
        <p>{number_of_recipes} items in recipe</p>
        <div className="card-actions mt-2">
          <Link to={`/chefs/${_id}`}>
            <button className="my-btn normal-case text-sm">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
