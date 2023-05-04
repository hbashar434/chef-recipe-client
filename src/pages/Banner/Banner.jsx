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
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-xl text-gray-50 font-bold">
            <p>Browse the latest recipes and popular recipes.</p>
            <p>and Learn how to make your favorite dishes.</p>
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
