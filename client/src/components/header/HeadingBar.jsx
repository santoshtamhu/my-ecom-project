import React from "react";
import { LuMail, LuPhone, LuShoppingCart } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

export const HeadingBar = () => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");
  console.log(access_token);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };
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
              {access_token ? (
                <li>
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
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
