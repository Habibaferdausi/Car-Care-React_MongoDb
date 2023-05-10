import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src="https://img.freepik.com/free-photo/benchman-fixing-engine-car_114579-2807.jpg?w=740&t=st=1683727552~exp=1683728152~hmac=65f2a71fe9914ae0066ec75130b877009dc776953e6b490ac2a13b56f023cfe6"
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src="https://img.freepik.com/free-photo/different-car-accessories-composition_23-2149030385.jpg?w=740&t=st=1683727650~exp=1683728250~hmac=ec09a4e6f8c1c93fcca36a4dec09d414cb87bfc6340ec5a82b32412c3a4db96b"
            className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4 text-start">
          <h3 className="text-3xl text-red-500 font-bold">About Us</h3>
          <h1 className="text-5xl text-start font-bold w-90">
            We are qualified & of experience in this field
          </h1>
          <p className="pt-5 text-gray-500 text-start">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <p className=" text-start pb-3 text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-red-500 border border-0  ">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
