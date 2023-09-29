import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Navbbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-2 flex-col  md:fixed md:w-full  md:flex-row relative cursor-pointer z-50 ms-auto">
        <Link to="/" className="z-50">
          <h1 className="text-red-700 text-4xl px-4 py-3">Netflix</h1>
        </Link>
        <div className="flex p-1 md:p-6 flex-col md:flex-row gap-3 items-center justify-center">
          <Link to="/account">
            <Button className="bg-blue-900 hover:bg-deep-purple-800  py-3 pr-4 mx-1">
              Account
            </Button>
          </Link>
          <Link to="/singup">
            <Button className="bg-red-800  py-3 pr-4 mx-2">Singup</Button>
          </Link>
          <Link to="/login">
            <Button className="bg-white text-black py-3 pr-4 px-5">
              Singin
            </Button>
          </Link>
          <Link to="/singup">
            <Button className="bg-red-900 text-black py-3 pr-4 px-5 ">
              LongOut
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
