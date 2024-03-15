import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <>
      <div className="bg-purple-100">
        <div className="grid container py-7 grid-cols-5">
          <div className="col-span-2 flex flex-col gap-5">
            <span className="text-2xl font-bold">logo</span>
            <div>
              <form className="w-80 border-2 h-10 flex items-center">
                <input
                  type="text"
                  placeholder="enter email address"
                  name="searchBar"
                  className="w-[271px] h-full pl-2"
                />
                <button
                  type="submit"
                  className="text-white w-32 h-10 bg-pink-600"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold">Categoires</span>
            <ul>
              <li>Laptops and Computers</li>
              <li>Cameras and Photography</li>
              <li>Smartphones and Tablets</li>
              <li>Chairs and Furniture</li>
              <li>Books and Music</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold">Customer Care</span>
            <ul>
              <li>My Account</li>
              <li>Discounts</li>
              <li>Return Policy</li>
              <li>Track Orders</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold">Pages</span>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>Shop</li>
              <li>Products</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-purple-200">
        <footer className="h-12 flex container items-center justify-between py-2">
          <span>All rights reserved</span>
          <div className="flex gap-3">
            <FiInstagram />
            <FiFacebook />
            <FiTwitter />
          </div>
        </footer>
      </div>
    </>
  );
};
