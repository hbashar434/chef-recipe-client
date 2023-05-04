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
    <div className="bg-base-200 mt-24 pb-24">
      <h1 className="text-5xl text-center font-bold pt-12 text-orange-500">
        Recipes By Category
      </h1>
      <div className="grid justify-center lg:grid-cols-4 gap-4 px-12">
        {category.map((ct, idx) => (
          <div key={idx} className="pt-8 lg:flex gap-6">
            <div className="card w-96 bg-base-100 shadow-xl relative transition duration-300">
              <figure className="px-10 pt-10 overflow-hidden">
                <img
                  src={ct.image}
                  alt="Shoes"
                  className="rounded-xl object-cover w-32"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-5xl  text-orange-700">
                  {ct.name}
                </h2>
              </div>
              {/* new sec */}
              <div className="card bg-black text-gray-300 bg-opacity-75 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="m-auto text-3xl font-semibold ">
                  <span className="flex items-center">
                    <p className="text-orange-300 mr-2">Visit</p>{" "}
                    <BsBoxArrowInUpRight></BsBoxArrowInUpRight>
                  </span>
                </button>
              </div>
              {/* new sec end  grid justify-center items-center*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryRecipe;
