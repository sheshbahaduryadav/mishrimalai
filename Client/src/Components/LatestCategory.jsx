import React from "react";
import Img1 from "../assets/home category/authentic.jpg";
import Img2 from "../assets/home category/fresh.jpg";
import Img3 from "../assets/home category/purify.jpg";
import Img4 from "../assets/home category/traditional.jpg";
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
      title: "Purified Water In Every Batch",
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
      <div className="container flex flex-wrap my-28 mx-auto  md:px-12">
        {data.map((val, index) => {
          return (
            <div className="w-1/2 md:w-1/2 lg:w-1/4  text-center " key={index}>
              <div className="flex justify-center items-center">
                <div
                  style={{ filter: "grayscale(100%)" }}
                  className="overflow-hidden border-2  border-black rounded-full h-32 w-32 flex justify-center items-center"
                >
                  <img className="" src={val.images} alt="" />
                </div>
              </div>
              <h2 className="pt-10 px-2 pb-10 lg:text-2xl md:text-lg sm:text-lg text-lg">
                {val.title}
              </h2>
              {/* <h3 className="text-xl pt-10">{val.description}</h3> */}
            </div>
          );
        })}
      </div>
    </>
  );
};
