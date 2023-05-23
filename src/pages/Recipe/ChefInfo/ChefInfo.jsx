import React, { useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ChefInfo = ({ data }) => {
  const { picture, name, bio, experience, number_of_recipes, likes } = data;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex justify-center py-16">
      <div className="md:flex flex-row-reverse gap-16 justify-center items-center w-10/12">
        <figure className="pb-8 md:pb-0 md:w-5/12">
          <img
            src={picture}
            className="rounded-lg shadow-lg"
            data-aos="fade-up-right"
            data-aos-offset="200"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
        </figure>
        <div className="md:w-7/12">
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
