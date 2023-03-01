import React from "react";

function RecipeDetail({ recipe }) {
  const imageUrl = recipe.images.SMALL.url;

  return (
    <div className="row mt-5">
      <div className="col-md-3 offset-md-1">
        <img
          src={imageUrl}
          alt=""
          style={{ width: "25rem", height: "22rem" }}
        />
      </div>

      <div className="col-md-5 offset-md-1">
        <h2>{recipe.label}</h2>
        <p className="mt-5">
          {recipe.cuisineType.map((cuisine) => {
            return (
              <span className="border border-warning rounded-pill p-2">
                {cuisine}
              </span>
            );
          })}
        </p>

        <p className="text-muted">
          Total time<b> {recipe.totalTime}m</b>{" "}
        </p>
        <h4>Ingredients</h4>
        <ol>
          {recipe.ingredients.map((ingredient) => {
            return <li>{ingredient.text}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
