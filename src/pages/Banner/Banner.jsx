import React from "react";
import Lottie from "lottie-react";
import cooking from "../../assets/cooking.json";
const Banner = () => {
  return (
    <div className="md:flex items-center py-4 md:py-16 px-4">
      <div className="w-9/12 pb-4">
        <Lottie className="h-60" animationData={cooking} loop={true} />
      </div>
      <div className="w-9/12">
        <div className=" font-bold">
          <p className="text-5xl mb-4 md:mb-10">
            Browse the latest recipes and popular recipes.
          </p>
          <h1 className="text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Learn how to make your favorite dishes.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
