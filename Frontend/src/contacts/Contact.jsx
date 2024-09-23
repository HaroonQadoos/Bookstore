import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
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
            <h3 className="font-bold text-lg py-3">Contact Us</h3>
            <div>
              <span className="text-black">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className=" w-[450px]  px-3 py-1 outline-none border rounded-md"
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
              <span className="text-black">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className=" w-[450px]  px-3 py-1 outline-none border rounded-md"
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
              <span className="text-black">Message</span>
              <br />
              <input
                type="text"
                placeholder="Type your Message"
                className=" w-[450px] h-[130px] px-3 py-1 outline-none border rounded-md"
                {...register("Message", { required: true })}
              />
              <br />
              {errors.message && (
                <span className=" text-sm text-orange-500">
                  Message is required
                </span>
              )}
            </div>
            <div className="flex justify-around">
              <button className=" bg-orange-500 text-white mt-3 px-3 py-1 rounded-md hover:bg-orange-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
