import axios from "axios";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const AddProducts = () => {
  let initialValue = {
    title: "",
    price: "",
    image: null,
  };
  const [data, setData] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("image", data.image);

    let access_token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWU4M2Q4MWZjZDhkNDUyOGJkMjgyNTEiLCJuYW1lIjoic2VsbGVyIiwiZW1haWwiOiJzMUBzMS5jb20iLCJwaG9uZSI6OTg1NjUyMiwicm9sZSI6InNlbGxlciIsIl9fdiI6MCwiaWF0IjoxNzEwODQ1MDE1fQ.xNNtbZZsOqE9gUZYySzuUaBoTMADuMtjwnW2j1wknb4";

    axios
      .post("http://localhost:8000/api/products", formData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log("product created");
        console.log(data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    console.log(e.target);
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "file" ? e.target?.files[0] : e.target.value,
    });
  };

  return (
    <>
      <div className="p-4 my-28">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              for="product_name"
              className="block text-gray-700 font-bold mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder="Enter price"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label for="price" className="block text-gray-700 font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
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
