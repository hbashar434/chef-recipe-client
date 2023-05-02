import React from "react";
import { useLoaderData } from "react-router-dom";

const Recipe = () => {
  const recipe = useLoaderData();
  console.log(recipe);

  return <div></div>;
};

export default Recipe;
