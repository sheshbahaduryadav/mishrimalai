import React from "react";
import Img1 from "../Icon/category-img1.png";
import Img2 from "../Icon/category-img2.png";
import Img3 from "../Icon/category-img3.png";
import Img4 from "../Icon/category-img4.png";
const Shop = () => {
  const data = [
    {
      images: Img1,
      title: "Kaju Barfi",
      description: "",
    },
    {
      images: Img2,
      title: "Mewa Bite",
      description: "",
    },
    {
      images: Img3,
      title: "Kaju Anjeer Barfi",
      description: "",
    },
    {
      images: Img4,
      title: "Motichoor laddoo",
      description: "",
    },
  
    {
      images: Img4,
      title: "Mathura Peda",
      description: "",
    },
    {
      images: Img4,
      title: "Rasgulla",
      description: "",
    },
    {
      images: Img4,
      title: "Magdal",
      description: "",
    },
    {
      images: Img4,
      title: "Maysor Pak",
      description: "",
    },
    {
      images: Img4,
      title: "Besan Gajak",
      description: "",
    },
    {
      images: Img4,
      title: "Choco Bite",
      description: "",
    },
    {
      images: Img4,
      title: "Samosa",
      description: "",
    },
    {
      images: Img4,
      title: "Khasta",
      description: "",
    },
    {
      images: Img4,
      title: "Jalebi",
      description: "",
    },
    {
      images: Img4,
      title: "Sandwich",
      description: "",
    },
    {
      images: Img4,
      title: "Dry Chilli Paneer",
      description: "",
    },
    
    {
      images: Img4,
      title: "Corn Chilli Dry",
      description: "",
    },
    {
      images: Img4,
      title: "Steam Momo",
      description: "",
    },
    {
      images: Img4,
      title: "Masala Dosa",
      description: "",
    },
    {
      images: Img4,
      title: "Idli Sambhar ",
      description: "",
    },
    {
      images: Img4,
      title: "Uttapam",
      description: "",
    },
    {
      images: Img4,
      title: "Haandi Paneeer",
      description: "",
    },
    {
      images: Img4,
      title: "Kadahi Paneer",
      description: "",
    },
    {
      images: Img4,
      title: "Paneer Tikka",
      description: "",
    },
    {
      images: Img4,
      title: "Hara bhara Kabab",
      description: "",
    },
    {
      images: Img4,
      title: "Mushroom Boti",
      description: "",
    },
  ];
  return (
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
  );
};

export default Shop;
