import React from "react";
import { Link } from "react-router-dom";

function Recipe({ recipe }) {
  const imageUrl = recipe.images.SMALL.url;
  const recipe_id = recipe.uri.split("#")[1];

  return (
    <div className="col-auto">
      <div className="card mb-2" style={{ width: "18rem" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          style={{ width: "18rem", height: "15rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.label}</h5>
          <Link
            to={{ pathname: `${recipe_id}` }}
            state={{ recipe }}
            className="btn btn-warning rounded-pill"
          >
            Get recipe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
