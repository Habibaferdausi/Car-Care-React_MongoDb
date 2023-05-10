import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <p className=" text-start font-bold text-red-500">Price: ${price}</p>
          <button className="btn bg-red-500 border border-0">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
