import React from "react";
import RecipeItem from "../Components/recipe-item";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

// const Favorites = () => {
//   const { favoritesList } = useOutletContext();
//   console.log(favoritesList);

//   return (
//     <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
//       {favoritesList && favoritesList.length > 0 ? (
//         favoritesList.map((item) => <RecipeItem item={item} />)
//       ) : (
//         <div>
//           <p className="lg:text-4xl text-xl text-center text-black font-bold ">
//             Nothing is added in favorites
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Favorites;

const Favorites = () => {
  const { favoritesList } = useOutletContext();
  console.log("Favorites List:", favoritesList); // Let's keep this for debugging

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-none rounded-sm"
          >
            <div className="h-40 flex justify-center items-center rounded-xl overflow-hidden ">
              <img
                src={item?.image_url}
                alt="recipe item"
                className="block w-full h-full object-cover"
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
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-bold">
            No favorites added yet
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
