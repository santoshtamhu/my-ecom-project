import axios from "axios";
import React, { useEffect, useState } from "react";

export const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("error fetchind products:", err);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-7 container">
        {products.map((product) => {
          return (
            <div className="border-2">
              <div>
                <img
                  src={product.image ? product.image : "noImage.jpg"}
                  alt=""
                />
              </div>
              <div>{product.title}</div>
              <div>{product.price}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
