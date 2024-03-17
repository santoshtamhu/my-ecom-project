import axios from "axios";
import React from "react";

export const AddProducts = () => {
  axios.post("http://localhost:8000/api/products").then(res => {
    
  })
  return (
    <>
      <div className="p-4">
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              for="product_name"
              className="block text-gray-700 font-bold mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="product_name"
              name="product_name"
              placeholder="Enter product name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label for="price" className="block text-gray-700 font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter price"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
