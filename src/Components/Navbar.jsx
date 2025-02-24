import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ searchParam, setSearchParam }) => {
  const handleSearchWord = (e) => {
    setSearchParam(e.target.value);
  };

  return (
    <div>
      <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl font-semibold">
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Food Recipe
          </NavLink>
        </h2>
        <form>
          <input
            type="text"
            placeholder="Enter item..."
            name="search"
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
            value={searchParam}
            onChange={handleSearchWord}
          ></input>
        </form>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className="text-black hover:text-gray-700 duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className="text-black hover:text-gray-700 duration-300"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
