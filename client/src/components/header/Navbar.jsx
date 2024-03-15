import React from "react";
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <>
      <div className="container my-5">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">logo</div>
          <div>
            <ul className="flex gap-4">
              <li>Home</li>
              <li>Pages</li>
              <li>Products</li>
              <li>Blog</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <form className="w-80 border-2 h-10 flex items-center">
              <input type="text" name="search" className="w-[271px]" />
              <button
                type="submit"
                className="text-white w-12 h-10 bg-pink-600"
              >
                <FiSearch className="size-6 mx-auto" />
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};
