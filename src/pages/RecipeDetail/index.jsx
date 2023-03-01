import React from "react";
import RecipeDetail from "./RecipeDetail";
import { useLocation } from "react-router";

function Index() {
  const location = useLocation();
  return (
    <div>
      <RecipeDetail recipe={location.state.recipe} />
    </div>
  );
}

export default Index;
