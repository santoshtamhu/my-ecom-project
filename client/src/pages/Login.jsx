import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .post("http://localhost:8000/api/auth/login", { email, password })
      .then((res) => {
        toast.success("login successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <>
      <div className="my-48 grid mx-auto place-content-center shadow-2xl lg:h-[474px] lg:w-[544px]">
        <div className="w-[350px] text-center">
          <p className="mb-2 text-2xl font-bold md:text-4xl">Log In</p>
          <div className="text-sm text-slate-400">
            Please log in using account detail below.
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-3 grid place-items-center gap-2 text-center"
          >
            <input
              className="form-control"
              type="email"
              // defaultValue="b@b.com"
              name="email"
              placeholder="Email Address"
            />
            <input
              className="form-control"
              type="password"
              defaultValue="password"
              name="password"
              placeholder="Password"
            />
            <p className="text-sm text-slate-400 md:text-base">
              Forgot your password?
            </p>
            <button type="submit" className="btn mt-5 h-full w-full">
              Log In
            </button>
          </form>
          <div className="pt-3 text-sm text-slate-400 md:text-base">
            Don't have an account?
            <span>
              <Link className="hover:underline" to="/signup">
                Create an account!
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
