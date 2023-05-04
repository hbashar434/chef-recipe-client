import React from "react";
import banner from "../../assets/banner.avif";
const Banner = () => {
  return (
    <div
      className="hero min-h-[calc(100vh-64px)]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-neutral-content">
        <div>
          <h1 className="mb-5 text-gray-50 font-bold">
            <p className="text-4xl">
              Browse the latest recipes and popular recipes.
            </p>
            <p className="text-3xl">
              and Learn how to make your favorite dishes.
            </p>
          </h1>
          <button className="my-btn font-semibold normal-case">
            Book a Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
