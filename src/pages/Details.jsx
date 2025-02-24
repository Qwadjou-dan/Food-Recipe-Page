import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useOutletContext, useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const { favoritesList, setFavoritesList } = useOutletContext();
  const { recipeDetailsData, setRecipeDetailsData } = useOutletContext();
  const { setSearchParam } = useOutletContext();
  // const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  // const [favoritesList, setFavoritesList] = useState([]);

  const getRecipeDetails = async () => {
    try {
      const response = await axios(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      if (response?.data?.data?.recipe) {
        setRecipeDetailsData(response.data.data.recipe);
        setSearchParam("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, [id]);

  const handleAddToFavorite = (getCurrentItem) => {
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    //if item is not present
    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index); //Remove item from list
    }

    setFavoritesList(cpyFavoritesList);
  };

  // const handleAddToFavorite = (getCurrentItem) => {
  //   console.log("Adding/Removing:", getCurrentItem);

  //   setFavoritesList((prevFavorites) => {
  //     const index = prevFavorites.findIndex(
  //       (item) => item.id === getCurrentItem.id
  //     );

  //     if (index === -1) {
  //       // Add new favorite
  //       return [...prevFavorites, getCurrentItem];
  //     } else {
  //       // Remove existing favorite
  //       return prevFavorites.filter((item) => item.id !== getCurrentItem.id);
  //     }
  //   });
  // };

  // const handleAddToFavorite = (getCurrentItem) => {
  //   console.log(getCurrentItem);

  //   setFavoritesList((prevFavorites) => {
  //     const index = prevFavorites.findIndex(
  //       (item) => item.id === getCurrentItem.id
  //     );

  //     if (index === -1) {
  //       // Add new favorite
  //       return [...prevFavorites, getCurrentItem];
  //     } else {
  //       // Remove existing favorite
  //       return prevFavorites.filter((item) => item.id !== getCurrentItem.id);
  //     }
  //   });
  // };

  console.log(favoritesList, "favoritesList");

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.publisher}
        </span>
        <h3 className="font-bold text-xl truncate text-black">
          {recipeDetailsData?.title}
        </h3>
        <div>
          <button
            className="text-sm p-3 mt-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
            onClick={() => {
              handleAddToFavorite(recipeDetailsData);
            }}
          >
            {/* {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.id
            ) !== -1
              ? "Remove favorite"
              : "Add to favorite"} */}

            {favoritesList?.some((item) => item.id === recipeDetailsData?.id)
              ? "Remove favorite"
              : "Add to favorite"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.ingredients.map((ingredient) => (
              <li>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
