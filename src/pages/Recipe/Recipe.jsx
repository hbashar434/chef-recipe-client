import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefInfo from "./ChefInfo/ChefInfo";
import RecipeDetails from "./RecipeDetails/RecipeDetails";

const Recipe = () => {
  const data = useLoaderData();

  return (
    <div>
      <ChefInfo data={data}></ChefInfo>
      {data.recipes.map((idx, recipes) => {
        <RecipeDetails key={idx} recipes={recipes}></RecipeDetails>;
      })}
    </div>
  );
};

export default Recipe;
