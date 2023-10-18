import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const category = [
  {
    name: "Meat",
    image: "https://rb.gy/bwv3t",
  },
  {
    name: "Bakery",
    image: "https://rb.gy/bgqup",
  },
  {
    name: "Vegetables",
    image: "https://rb.gy/v8r2d",
  },
  {
    name: "Cheese",
    image: "https://rb.gy/7vyu9",
  },
];

const CategoryRecipe = () => {
  return (
    <div className="bg-base-100 pb-24">
      <h1 className="my-title text-emerald-800 pt-12">
        Recipes By Category
      </h1>
      <div className="grid justify-center lg:grid-cols-4 gap-4 px-4 md:px-8">
        {category.map((ct, idx) => (
          <div key={idx} className="pt-8 lg:flex gap-6">
            <div className="card w-72 md:w-full bg-base-100 shadow-md relative transition duration-300">
              <figure className="px-10 pt-10 overflow-hidden">
                <img
                  src={ct.image}
                  alt="recipe category icon"
                  className="rounded-xl object-cover w-32"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl text-emerald-700">
                  {ct.name}
                </h2>
              </div>
              <div className="card bg-black text-gray-300 bg-opacity-75 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="m-auto text-3xl font-semibold ">
                  <span className="flex items-center">
                    <p className="text-white mr-2">Visit</p>{" "}
                    <BsBoxArrowInUpRight></BsBoxArrowInUpRight>
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryRecipe;
