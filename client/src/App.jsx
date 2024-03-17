import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { HeadingBar } from "./components/header/HeadingBar";
import { Navbar } from "./components/header/Navbar";
import { SignUp } from "./pages/SignUp";
import { Cart } from "./pages/Cart";
import { Footer } from "./components/Footer";
import { Products } from "./pages/Products";
import { AddProducts } from "./pages/AddProducts";
import { Root } from "postcss";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products",
        children: [
          {
            path: "",
            element: <Products />,
          },
          {
            path: "add_products",
            element: <AddProducts />,
          },
        ],
      },
    ],
  },
]);
export default function App() {
  return (
    <>
      <HeadingBar />
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
