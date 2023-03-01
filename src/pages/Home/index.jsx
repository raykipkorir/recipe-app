import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import styles from "./Home.module.css";
import Recipes from "./Recipes";
import SearchBar from "./SearchBar";

function Index() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    function getRecipes() {
      setIsLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setErrorOccurred(false);
          setRecipes(data.hits);
          setIsLoading(false);
        })
        .catch((error) => {
          setErrorOccurred(true);
          setIsLoading(false);
          console.error("Error fetching data", error);
        });
    }
    getRecipes();
  }, [query]);

  const getSearchData = (data) => {
    setQuery(data);
  };

  return (
    <div className={styles.App}>
      <SearchBar getSearchData={getSearchData} isLoading={isLoading} />
      {isLoading ? (
        <LoadingSpinner />
      ) : errorOccurred ? (
        <h2>
          Possible errors: <br /> - Check your internet connection <br /> - You
          have exceeded 10 requests/min. Please wait for some seconds then try
          again.
        </h2>
      ) : (
        <Recipes recipes={recipes} />
      )}
    </div>
  );
}

export default Index;
