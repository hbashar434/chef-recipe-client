import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ChefInfo from "./ChefInfo/ChefInfo";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import Loading from "../shared/Loading/Loading";

const Recipe = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  const data = useLoaderData();
  const recipe = data.recipes;

  return (
    <div>
      <ChefInfo data={data}></ChefInfo>
      <div className="my-24 md:p-24 bg-base-200">
        {recipe.map((recipes, idx) => (
          <RecipeDetails key={idx} recipes={recipes}></RecipeDetails>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
