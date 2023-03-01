import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<RecipeDetail />} path=":recipe_id" />
        </Routes>
      </div>
    </>
  );
}

export default App;
