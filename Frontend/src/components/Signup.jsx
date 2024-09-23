import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div
        id="my_modal_3"
        className=" flex items-center justify-center h-screen"
      >
        <div className="modal-box border-[2px] shadow-md rounded-md p-5">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").closest()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg py-3">Signup</h3>
            <div>
              <span className="text-orange-500">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className=" w-80  px-3 py-1 outline-none border rounded-md"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-orange-500">
                  Name is required
                </span>
              )}
            </div>

            <div>
              <span className="text-orange-500">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className=" w-80  px-3 py-1 outline-none border rounded-md"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-orange-500">
                  Email is required
                </span>
              )}
            </div>
            <div>
              <span className="text-orange-500">Password</span>
              <br />
              <input
                type="Password"
                placeholder="Enter your Password"
                className=" w-80  px-3 py-1 outline-none border rounded-md"
                {...register("Password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className=" text-sm text-orange-500">
                  Password is required
                </span>
              )}
            </div>
            <div className="flex justify-around">
              <button className=" bg-orange-500 text-white mt-3 px-3 py-1 rounded-md hover:bg-orange-700">
                Signup
              </button>
              <p className=" mt-4">
                Have an account?{" "}
                <button
                  className="underline text-orange-500 cursor-pointer hover:text-orange-600"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
