import React from "react";
import Banner from "../pages/Banner/Banner";
import ChefCard from "../pages/ChefCard/ChefCard";
import CategoryRecipe from "../pages/CategoryRecipe/CategoryRecipe";

const HomeLayout = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefCard></ChefCard>
      <CategoryRecipe></CategoryRecipe>
    </div>
  );
};

export default HomeLayout;
