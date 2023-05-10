import React from "react";

const Banner = () => {
  return (
    <div className="carousel mt-8 w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/4488644/pexels-photo-4488644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-red-500 mr-5">Discover More</button>
              <button className=" btn bg-transparent hover:bg-red-500 border border-red-500">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white mr-5"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white mr-5"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/4315570/pexels-photo-4315570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-red-500 mr-5">Discover More</button>
              <button className="btn bg-transparent hover:bg-red-500 border border-red-500">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white mr-5"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white mr-5"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-red-500 mr-5">Discover More</button>
              <button className=" btn bg-transparent hover:bg-red-500 border border-red-500">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white mr-5"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white mr-5"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/auto-mechanic-working-garage-repair-service_146671-19690.jpg?w=740&t=st=1683726737~exp=1683727337~hmac=4fab7593b02d61730de2077f38419a3be1d72210fcb37ea1c024e2e389014ca6"
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-red-500 mr-5">Discover More</button>
              <button className=" btn bg-transparent hover:bg-red-500 border border-red-500">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white mr-5"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white mr-5"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
