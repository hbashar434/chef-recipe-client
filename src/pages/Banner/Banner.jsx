import React from "react";
import banner from "../../assets/banner.avif";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">
            Learn how to make your favorite restaurant’s dishes.
          </h1>
          <button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white font-bold normal-case">
            Book a Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
