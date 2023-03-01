import React from "react";
import Recipe from "./Recipe";

function Recipes({ recipes }) {
  return (
    <div className="row">
      {recipes.map((recipe) => {
        return <Recipe recipe={recipe.recipe} />;
      })}
    </div>
  );
}

export default Recipes;
