import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const role = e.target.role.value;
    const password = e.target.password.value;
    axios
      .post("http://localhost:8000/api/auth/signup", {
        name,
        email,
        role,
        password,
      })
      .then((res) => {
        toast.success("you have created an accout successfully!");
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="mb-96 mt-9 grid h-96 w-80 place-content-center font-lato shadow-2xl  lg:mt-28 lg:h-[474px] lg:w-[544px]">
          <div className=" text-center">
            <p className=" mb-2 font-josefin text-2xl font-bold md:text-4xl">
              Sign Up
            </p>
            <div className="text-sm text-slate-400">
              Please sign up using account details below.
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-3 grid place-items-center gap-2 text-center"
            >
              <input
                className="h-12 w-[230px] border-2 pl-3 text-sm focus:border-customPink focus:outline-none lg:w-[432px]"
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <select name="role">
                <option value="">select</option>
                <option value="buyer">buyer</option>
                <option value="seller">seller</option>
              </select>
              <input
                className="h-12 w-[230px] border-2 pl-3 text-sm focus:border-customPink focus:outline-none lg:w-[432px]"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <input
                className="h-12 w-[230px] border-2 pl-3 text-sm focus:border-customPink focus:outline-none lg:w-[432px]"
                type="password"
                name="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="h-[47px] w-[230px] btn  lg:w-[432px] lg:font-bold"
              >
                Sign Up
              </button>
            </form>
            <div className="pt-3 text-sm text-slate-400 md:text-base">
              Already have an account?
              <span>
                <Link className="hover:underline" to="/login">
                  Login!
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
