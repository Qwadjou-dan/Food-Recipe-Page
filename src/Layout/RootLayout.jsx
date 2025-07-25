import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";

const RootLayout = () => {
  const [searchParam, setSearchParam] = useState("");
  const [favoritesList, setFavoritesList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Navbar searchParam={searchParam} setSearchParam={setSearchParam} />
      <Outlet
        context={{
          searchParam,
          favoritesList,
          setFavoritesList,
          recipeDetailsData,
          setRecipeDetailsData,
          recipes,
          setRecipes,
          loading,
          setLoading,
        }}
      />
    </div>
  );
};

export default RootLayout;
