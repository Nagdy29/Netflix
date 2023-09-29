import axios from "axios";
import React, { useEffect, useState } from "react";
import request from "../Request";
export const Account = ({ tittle }) => {
  const [movies, setMoviefa] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMoviefa(response.data.results);
    });
  }, []);
  console.log(movie);
  return (
    <>
      <div className="py-16">
        <h2 className="text-white font-bold p-5 md:text-lg ">{tittle}</h2>

        <div className="relative items-center">
          <div className="w-full h-full" id={"slider"}>
            {movies.map((item, id) => (
              <div className="hover:border border-3px border-b-gray-400 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[350px] inline-block cursor-pointer relative p-3">
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt={item.tittle}
                />

                <div className=" text-white w-full h-full absolute top-0 left-0 hover:bg-black/70 opacity-0 hover:opacity-90 ">
                  <p className="py-2 font-bold text-xs md:text-sm flex items-center justify-center text-center">
                    {item?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
