import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";
import CheckOut from "../Home/Pages/CheckOut";
import Booking from "../Home/Pages/Booking";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <SignIn></SignIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "checkout/:id",
        element: (
          <PrivetRouter>
            <CheckOut></CheckOut>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/services/${params.id}`),
      },
      {
        path: "bookings",
        element: (
          <PrivetRouter>
            <Booking></Booking>
          </PrivetRouter>
        ),
      },
    ],
  },
]);

export default router;
