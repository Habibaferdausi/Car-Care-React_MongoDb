import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };

    console.log(booking);

    fetch("http://localhost:4000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service book successfully");
        }
      });
  };

  return (
    <div>
      <div
        className="bg-cover bg-center relative rounded flex items-center "
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19705.jpg?w=826&t=st=1683877961~exp=1683878561~hmac=d20b060babf427fee9b987527c85d4894eedf241b66b872796270e13f8f8dc5a)`,
          height: "200px",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        <div className="text-start rounded flex items-center relative">
          <h1 className="text-white text-2xl lg:text-5xl lg:ms-5 lg:ps  p-4  mb-5 mt-12 font-semibold ">
            Check Out
          </h1>
        </div>
      </div>
      {/* banner end */}

      <h2 className="text-center mt-10 mb-10 font-bold text-3xl text-red-500">
        Service Name: <span className="ms-3 text-black">{title}</span>
      </h2>
      <form
        onSubmit={handleBookService}
        className="mt-10 bg-slate-200 p-11 rounded"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-red-500 w-2/3 mx-auto border border-0 mt-5 btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
      <div className="card-body"></div>
    </div>
  );
};

export default CheckOut;
