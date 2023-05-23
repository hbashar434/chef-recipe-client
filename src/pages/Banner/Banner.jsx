import React from "react";
import Lottie from "lottie-react";
import cooking from "../../assets/cooking.json";
const Banner = () => {
  return (
    <div className="md:flex md:min-h-screen items-center py-4 md:py-10 px-4">
      <div className="w-9/12 pb-4">
        <Lottie className="h-60" animationData={cooking} loop={true} />
      </div>
      <div className="w-9/12">
        <div className=" text-5xl font-bold grid gap-3">
          <h1>One Step</h1>
          <h1>Closer To Your</h1>
          <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Dream Job
          </h1>
        </div>
        <p className="mt-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
      </div>
    </div>
  );
};

export default Banner;
