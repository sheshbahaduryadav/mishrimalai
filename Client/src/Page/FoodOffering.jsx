import React from "react";
import post1 from "../assets/skjlfd/mishri5.jpeg";
import post2 from "../assets/skjlfd/mishri4.jpeg";
import post3 from "../assets/skjlfd/mishri6.jpeg";

const Contacts = () => {
  const data = [
    {
      images: post1,
      title:
        "Discover The Irresistible Flavors Of Lucknow's Premier Sweet Haven.",
      description: "",
    },
    {
      images: post2,
      title:
        "From Flavors To Ambiance, Explore Our Premier Restaurant's offerings.",
      description: "",
    },
    {
      images: post3,
      title: "Create Timeless Memories At Our Stunning Atmospheric Party Lawn.",
      description: "",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto pt-10 md:p-16">
      <div className="text-center text-3xl">
        <p className="text-amber-500 mb-2 font-bold text-xl "></p>
        <p className="lg:text-3xl text-xl px-2 font-bold leading-tight">
          Dine With Your Eyes: <br /> Our Restaurant's Visual Story
        </p>
      </div>

      <div className="grid p-5 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {data.map((val, i) => {
          return (
            <div className="rounded overflow-hidden shadow-lg" key={i}>
              <div className="relative">
                <div className="w-full p-5">
                  <img src={val.images} alt="" />
                  <div className=" py-4">
                    <h2 className=" text-xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                      {val.title}
                    </h2>
                    <h3 className="text-gray-500 text-sm">{val.description}</h3>
                  </div>
                  <div className="px-6 py-4 flex flex-row items-center">
                    <span
                      href="#"
                      className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
                    >
                      <span className="ml-1"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
