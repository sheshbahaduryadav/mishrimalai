import React from "react";
import Img1 from "../assets/skjlfd/north indian (1).jpg";
import Img2 from "../assets/skjlfd/samosa.jpg";
import Img3 from "../assets/skjlfd/sweets 1.jpg";
import Img4 from "../assets/skjlfd/suth indian.jpg";
import { Link } from "react-router-dom";
export const SweetsList = () => {
  const data = [
    {
      images: Img1,
      title: "North Indian",
      description: "",
    },
    {
      images: Img2,
      title: "Snacks",
      description: "",
    },
    {
      images: Img3,
      title: "Sweets",
      description: "",
    },
    {
      images: Img4,
      title: "South Indian",
      description: "",
    },
  ];
  return (
    <>
      <div className="flex justify-center lg:my-10 my-20 mb-10">
        <h2 className="text-xl lg:text-3xl lg:w-2/4 md:w-2/4 text-center font-bold">
          Taste The Wonders Of Our Food Offerings And Our Sweet Creations.
        </h2>
      </div>
      <div className="flex flex-wrap mx-auto md:px-12">
        {data.map((val, index) => {
          return (
            <div
              className="w-full px-5 md:w-1/2 lg:my-4 lg:w-1/4 lg:pb-10 md:pb-10 m:pb-10 pb-10 text-center hover:bg-[#fbf7e5]"
              key={index}
            >
              <img
                className="w-full h-60 lg:hover:scale-110 duration-500 transition-all"
                src={val.images}
                alt=""
              />
              <h2 className="pt-10 lg:text-2xl md:text-2xl sm:text-xl text-xl">
                {val.title}
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
};
