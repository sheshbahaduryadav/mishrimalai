import React from "react";
import Img1 from "../Icon/category-img1.png";
import Img2 from "../Icon/category-img2.png";
import Img3 from "../Icon/category-img3.png";
import Img4 from "../Icon/category-img4.png";
import { Link } from "react-router-dom";
export const SweetsList = () => {
  const data = [
    {
      images: Img1,
      title: "Breakfast",
      description: "Volutpat sit amet efficitur mattis turpis.",
    },
    {
      images: Img2,
      title: "Pastry",
      description: "Volutpat sit amet efficitur mattis turpis.",
    },
    {
      images: Img3,
      title: "Sandwich",
      description: "Volutpat sit amet efficitur mattis turpis.",
    },
    {
      images: Img4,
      title: "Coffee",
      description: "Volutpat sit amet efficitur mattis turpis.",
    },
  ];
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-4xl">Heading</h2>
      </div>
      <div className="container flex flex-wrap my-12 mx-auto  md:px-12">
        {data.map((val, index) => {
          return (
            <div
              className="my-1  w-full md:w-1/2 lg:w-1/4 pb-24 text-center hover:bg-[#fcf9ed]"
              key={index}
            >
              <Link to="/shop">
                <div className="flex justify-center">
                  <img className="pt-20 pl-4" src={val.images} alt="" />
                </div>
                <h2 className="pt-10 text-4xl font-semibold">{val.title}</h2>
                <h3 className="text-xl pt-10">{val.description}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
