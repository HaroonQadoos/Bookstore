import React from "react";

function Cards({ item }) {
  //   console.log(item);

  // Here, you would fetch the data from an API and populate the item object with the relevant data.
  // For demonstration purposes, we're hardcoding some values.
  return (
    <>
      <div className=" mt-5 my-4 p-3">
        <div className="card bg-base-100 w-80 shadow-xl mt-10 hover:scale-105 duration-200 dark:border dark:bg-slate-900 dark:text-white">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline  hover:text-orange-500 duration-200">
                ${item.price}
              </div>
              <div className=" cursor-pointer badge badge-outline hover:text-orange-500 duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
