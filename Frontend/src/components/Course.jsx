import React from "react";
import list from "../../public/list.json";
import Cards from "./cards";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className=" max-w-screen 2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center justify-center items-center">
          <h1 className=" text-2xl md:text-4xl">
            "We are Delighted to have you{" "}
            <span className="text-orange-500">Here !"</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur necessitatibus eum, consequatur voluptatum ipsum, qui
            error nulla corporis optio tenetur facilis nostrum, assumenda
            laboriosam reiciendis incidunt sint. Aut, adipisci commodi! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Ipsam molestias
            libero deleniti odio corrupti quas similique hic nam reiciendis
            suscipit?
          </p>
          <Link to="/">
            <button className="btn btn-neutral border-none text-white bg-orange-500 mt-3 hover:bg-orange-400">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12   grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
