import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").closest()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg py-3">Login</h3>

            <div>
              <span className="">Email</span>
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
              <span className="">Password</span>
              <br />
              <input
                type="Password"
                placeholder="Enter your Password"
                className=" w-80  px-3 py-1 outline-none border rounded-md"
                {...register("password", { required: true })}
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
                Login
              </button>
              <p className=" mt-4">
                Not register?{" "}
                <Link
                  to="/signup"
                  className="underline text-orange-500 cursor-pointer"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
