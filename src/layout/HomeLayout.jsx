import React from "react";
import Banner from "../pages/Banner/Banner";
import ChefCard from "../pages/ChefCard/ChefCard";
import CategoryRecipe from "../pages/CategoryRecipe/CategoryRecipe";
import NewsLetter from "../pages/NewsLetter/NewsLetter";

const HomeLayout = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefCard></ChefCard>
      <CategoryRecipe></CategoryRecipe>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default HomeLayout;
