import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ChefInfo from "./ChefInfo/ChefInfo";
import RecipeDetails from "./RecipeDetails/RecipeDetails";

const Recipe = () => {
  const data = useLoaderData();
  const recipe = data.recipes;

  return (
    <div>
      <ChefInfo data={data}></ChefInfo>
      <div className="bg-base-100">
        {recipe.map((recipes, idx) => (
          <RecipeDetails key={idx} recipes={recipes}></RecipeDetails>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
