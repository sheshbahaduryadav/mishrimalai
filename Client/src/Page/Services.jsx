import React from "react";

import img8 from "../assets/skjlfd/mishri2.jpeg";
import img9 from "../Icon/section4-img.png";
import img10 from "../assets/skjlfd/mishri7.jpeg";
import img11 from "../assets/skjlfd/mishri8.jpeg";
import img12 from "../Icon/product-img4-removebg-preview.png";
import img13 from "../Icon/product-img5-removebg-preview.png";
import img14 from "../Icon/product-img6-removebg-preview.png";
import img15 from "../Icon/product-img7-removebg-preview.png";
import img16 from "../Icon/product-img8-removebg-preview.png";

const Services = () => {
  const data = [
    {
      images: img8,
      title: "Sweet Shop",
      description: " ",
    },
    {
      images: img10,
      title: "Restaurant",
      description: "",
    },
    {
      images: img11,
      title: "Party Lawn",
      description: "",
    },
  ];
  return (
    <>
      <div className="w-full text-center text-3xl pb-10 lg:text-3xl font-bold leading-loose">
        <p>
          Indulge, Dine And Epic Celebrations
          <br />
          "All Under One Roof"
        </p>
      </div>
      <div className="container flex flex-wrap mx-auto ">
        {data.map((val, index) => {
          return (
            <div
              className="my-1 w-full md:w-1/2 lg:my-4 lg:w-1/3 pb-28 text-center hover:bg-[#fcf9ed]"
              key={index}
            >
              <img
                className="lg:p-20 w-full hover:scale-110 duration-500 transition-all"
                src={val.images}
                alt=""
              />
              <h2 className="text-2xl">{val.title}</h2>
              {/* <h3 className="text-xl pt-10">{val.description}</h3> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
