import React from "react";
const Banner = () => {
  return (
    <section>
      <div className=" bg-pink-100">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 ">
          <h1 className="text-2xl font-bold sm:text-6xl xl:max-w-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Browse the latest recipes and popular recipes.
          </h1>
          <p className="mt-6 mb-8 text-lg md:text-3xl sm:mb-12 xl:max-w-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Learn how to make your favorite dishes.
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded my-btn"
            >
              Get started
            </button>
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg border-y border-y-pink-400 rounded font-bold"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://i.ibb.co/jM685s6/cooking.jpg"
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
      />
    </section>
  );
};

export default Banner;
