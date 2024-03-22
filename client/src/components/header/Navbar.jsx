import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="container my-5">
        <nav id="menubar" className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="/">logo</Link>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <Link>Home</Link>
              </li>
              <li>Pages</li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  Products
                </NavLink>
              </li>

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
