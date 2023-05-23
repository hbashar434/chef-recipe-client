import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-t-lg flex items-center">
            <h2 className="text-2xl font-bold">The Chef&apos;s Table</h2>
          </div>
          <div className="p-4">
            <p className="mb-4">
              The Chef&apos;s Table is a website dedicated to sharing delicious
              recipes from all around the world. Our team of expert chefs
              curates the best recipes and shares them with you so you can
              impress your family and friends with your cooking skills.
            </p>
            <p className="mb-4">
              We believe that food is not just fuel for the body, but also
              nourishment for the soul. That&apos;s why we are passionate about
              creating and sharing recipes that are not only delicious but also
              healthy and sustainable.
            </p>
            <p className="mb-4">
              Our recipes are categorized by cuisine, meal type, and dietary
              restrictions so you can easily find the perfect recipe for your
              needs. We also provide step-by-step instructions with pictures and
              videos to make cooking even easier for you.
            </p>
            <div className="flex flex-wrap mb-4">
              <span className="my-btn-blue">Healthy</span>
              <span className="my-btn-green">Sustainable</span>
              <span className="my-btn-yellow">Vegetarian</span>
              <span className="my-btn-orange">Gluten-Free</span>
            </div>
            <div className="flex justify-center">
              <Link to="/" className="my-btn">
                Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
