import React from "react";
import { LuMail, LuPhone, LuShoppingCart } from "react-icons/lu";

export const HeadingBar = () => {
  return (
    <>
      <div className=" bg-purple-600">
        <div className="container h-11 text-white flex justify-between items-center">
          <div className="flex gap-5">
            <span className="flex gap-2 items-center">
              <LuMail />
              santosh@santosh.com
            </span>
            <span className="flex gap-2 items-center">
              <LuPhone />
              (9818)456123
            </span>
          </div>
          <div>
            <ul className="flex gap-5">
              <li>English</li>
              <li>USD</li>
              <li>Login</li>
              <li>Wishlist</li>
              <li className=" flex items-center">
                <LuShoppingCart />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
