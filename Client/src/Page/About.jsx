import React from "react";
import logo from "../assets/LOGO.png";
import post1 from "../Icon/post-img1.jpg";
import post2 from "../Icon/post-img2.jpg";
import post3 from "../Icon/post-img3.jpg";
import { BsLinkedin } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const About = () => {
  const data = [
    {
      images: post1,
      title: "Aenean Laoreet",
      description: "By Bakeryblocks1",
    },
    {
      images: post2,
      title: "Praesent Accum Aesan",
      description: "By Bakeryblocks1",
    },
    {
      images: post3,
      title: "Aenean Laoreet Nibh",
      description: "By Bakeryblocks1",
    },
  ];
  return (
    <div>
      <div className="te">
        <h3>Customer Review</h3>
        <h1>
          What Is Going On In <br /> Our Blog?
        </h1>
      </div>
      <div className="post">
        {data.map((val, i) => {
          return (
            <div className="post-img" key={i}>
              <img src={val.images} alt="" />
              <h2>{val.title}</h2>
              <h3>{val.description}</h3>
            </div>
          );
        })}
      </div>
      <footer className="mt-10 p-10 bg-" className='f'>
        <div className="flex justify-between px-20">
          <div className="text-large font-semibold">
            <img src={logo} className="a" alt="Misri Malai" />
            <br />
            We delivered the best quality
            <br />
            of products.
          </div>
          <div className=" text-sl font-semibold m-1 items-center">
            <h2 className="font-bold text-4xl mb-5 ">Restaurant</h2>
            Mishri Malai
            <br /> <br />
            xyz@mail.com
            <br />
            <br />
            Everyday 9 AM - 10 PM
          </div>

          <div>
            <h2 className="font-bold text-2xl">Social Links</h2>
            <div className="">
              <div className="flex justify-between">
                <FaFacebookSquare />

                <FaInstagramSquare />

                <FaTwitterSquare />

                <BsLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div></div>
        </div>
      </footer>
    </div>
  );
};

export default About;
