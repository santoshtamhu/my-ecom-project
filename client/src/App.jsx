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

const router = createBrowserRouter([
  {
    path: "/",

    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);
export default function App() {
  return (
    <>
      <HeadingBar />
      <Navbar />
      <RouterProvider router={router} />;
      <Footer />
    </>
  );
}
