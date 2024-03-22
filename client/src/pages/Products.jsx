import React from "react";
import { LatestProducts } from "../components/LatestProducts";
import { Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <LatestProducts />
    </>
  );
};
