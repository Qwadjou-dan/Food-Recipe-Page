import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Navbar from "../Components/Navbar";
import RecipeItem from "../Components/recipe-item";

const Home = () => {
  const { searchParam } = useOutletContext();
  const { recipes, setRecipes } = useOutletContext();
  const { loading, setLoading } = useOutletContext();

  const recipeList = async () => {
    if (!searchParam.trim()) return;
    setLoading(true);
    try {
      const response = await axios(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      setRecipes(response.data.data.recipes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    recipeList();
  }, [searchParam]);

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <RecipeItem recipes={recipes} setRecipes={setRecipes} loading={loading} />
  );
};

export default Home;
