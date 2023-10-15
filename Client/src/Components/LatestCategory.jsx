import React from "react";
import Img1 from "../Icon/category-img1.png";
import Img2 from "../Icon/category-img2.png";
import Img3 from "../Icon/category-img3.png";
import Img4 from "../Icon/category-img4.png";
export const LatestCategory = () => {
  const data = [
    {
      images: Img1,
      title: "100% Authentic",
      description: "",
    },
    {
      images: Img2,
      title: "Fresh",
      description: "",
    },
    {
      images: Img3,
      title: "Purified Water in Every Batch",
      description: "",
    },
    {
      images: Img4,
      title: "Traditional Recipies",
      description: "",
    },
  ];
  return (
    <>
      <div className="container flex flex-wrap my-12 mx-auto  md:px-12">
        {data.map((val, index) => {
          return (
            <div
              className="my-1  w-full md:w-1/2 lg:w-1/4 pb-24 text-center hover:bg-[#fcf9ed]"
              key={index}
            >
              <div className="flex justify-center">
                <img className="pt-20 pl-4" src={val.images} alt="" />
              </div>
              <h2 className="pt-10 text-4xl font-semibold">{val.title}</h2>
              <h3 className="text-xl pt-10">{val.description}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};
