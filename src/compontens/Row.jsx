import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export const Row = ({ tittle, FeatchURl }) => {
  const [movies, setmovies] = useState([]);
  const [likes, setlikes] = useState(false);
  useEffect(() => {
    axios.get(FeatchURl).then((response) => {
      setmovies(response.data.results);
    });
  }, [FeatchURl]);
  console.log(movies);
  return (
    <>
      <div>
        <h2 className="text-white font-bold p-5 md:text-lg ">{tittle}</h2>

        <div className="relative items-center">
          <AiFillCaretLeft />
          <div
            className="w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hidden no-scrollbar relative scrollbar-hide"
            id={"slider"}
          >
            {movies.map((item, id) => (
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3">
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt={item.tittle}
                />

                <div className=" text-white w-full h-full absolute top-0 left-0 hover:bg-black/70 opacity-0 hover:opacity-90 ">
                  <p className="py-2 font-bold text-xs md:text-sm flex items-center justify-center text-center">
                    {item?.title}
                  </p>
                  <p>
                    {likes ? <AiFillHeart className="" /> : <AiOutlineHeart />}
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
