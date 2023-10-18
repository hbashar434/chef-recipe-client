import React from "react";
import Banner from "../pages/Banner/Banner";
import ChefCard from "../pages/ChefCard/ChefCard";
import CategoryRecipe from "../pages/CategoryRecipe/CategoryRecipe";
import NewsLetter from "../pages/NewsLetter/NewsLetter";
import FeaturedRecipes from "../pages/FeaturedRecipes/FeaturedRecipes";
import CookingTips from "../pages/CookingTips/CookingTips";
import IngredientOfWeek from "../pages/IngredientOfWeek/IngredientOfWeek";
import SeasonalRecipes from "../pages/SeasonalRecipes/SeasonalRecipes";
import Testimonials from "../pages/Testimonials/Testimonials";

const HomeLayout = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefCard></ChefCard>
      <CategoryRecipe></CategoryRecipe>
      <FeaturedRecipes></FeaturedRecipes>
      <CookingTips></CookingTips>
      <IngredientOfWeek></IngredientOfWeek>
      <SeasonalRecipes></SeasonalRecipes>
      <Testimonials></Testimonials>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default HomeLayout;
