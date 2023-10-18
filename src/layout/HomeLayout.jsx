import React from "react";
import Banner from "../pages/Banner/Banner";
import ChefCard from "../pages/ChefCard/ChefCard";
import CategoryRecipe from "../pages/CategoryRecipe/CategoryRecipe";
import NewsLetter from "../pages/NewsLetter/NewsLetter";
import FeaturedRecipes from "../pages/FeaturedRecipes/FeaturedRecipes";
import CookingTips from "../pages/CookingTips/CookingTips";

const HomeLayout = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefCard></ChefCard>
      <CategoryRecipe></CategoryRecipe>
      <FeaturedRecipes></FeaturedRecipes>
      <CookingTips></CookingTips>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default HomeLayout;
