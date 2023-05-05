import React from "react";
import newsletter from "../../assets/newsletter.avif";
const NewsLetter = () => {
  return (
    <div
      className="flex items-center lg:min-h-[calc(100vh-120px)] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${newsletter})` }}
    >
      <div className="text-white ml-6 md:ml-24 my-6">
        <h1 className="mb-5 text-5xl font-bold">Subscribe to our Newsletter</h1>
        <p className=" text-sm md:text-xl md:font-semibold">
          Our newsletter is the perfect way to stay up-to-date on the latest
        </p>
        <p className="mb-5 text-sm md:text-xl md:font-semibold">
          culinary trends and expand your cooking skills. Plus, it's completely
          free!
        </p>
        <button className="btn rounded-3xl border-none bg-emerald-700 px-16 hover:bg-emerald-800">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
