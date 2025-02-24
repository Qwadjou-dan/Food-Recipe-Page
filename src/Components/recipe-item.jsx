import React from "react";
import Home from "../pages/home";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const RecipeItem = () => {
  const { recipes, setRecipes } = useOutletContext();
  const { loading, setLoading } = useOutletContext();
  return (
    <div>
      <div>
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
          {loading ? (
            <p>Loading...</p>
          ) : recipes.length > 0 ? (
            recipes.map((item) => (
              <div
                key={item.id}
                className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-none rounded-sm"
              >
                <div className="h-40 flex justify-center items-center rounded-xl overflow-hidden ">
                  <img
                    src={item?.image_url}
                    alt="recipe item"
                    className="block full"
                  />
                </div>
                <div>
                  <span className="text-sm text-cyan-700 font-medium">
                    {item?.publisher}
                  </span>
                  <h3 className="font-bold text-xl truncate text-black">
                    {item?.title}
                  </h3>
                  <Link
                    to={`/recipe-item/${item?.id}`}
                    className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
                  >
                    Recipe Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center font-bold">
              Nothing to show... Try another search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
