import React from "react";
import newsletter from "../../assets/newsletter.avif";
const NewsLetter = () => {
  return (
    <div
      className="flex items-center lg:h-96 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${newsletter})` }}
    >
      <div className="text-white ml-6 md:ml-24 my-6">
        <h1 className="mb-5 md:text-5xl font-bold">
          Subscribe to our Newsletter
        </h1>
        <p className=" text-sm md:text-xl md:font-semibold w-8/12">
          Our newsletter is the perfect way to stay up-to-date on the latest
          culinary trends and expand your cooking skills. Plus, it&apos;s
          completely free!
        </p>
        <button className="py-2 px-8 md:px-16 rounded-3xl mt-3 border-none bg-emerald-700  hover:bg-emerald-800">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
