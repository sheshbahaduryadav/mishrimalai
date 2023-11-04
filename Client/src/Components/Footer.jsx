import React from "react";

import Logo from "../assets/LOGO.png";

import { BsLinkedin } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="px-3 pt-4 lg:px-9  border-t-2 bg-[#fcf9ed]">
        <div className="grid lg:pl-40 gap-10 row-gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-between py-8">
          <div className="sm:col-span-1">
            <img src={Logo} className="h-24 w-32" alt="Misri Malai" />
            <div className="mt-6 lg:max-w-xl">
              <p className="text-xl text-gray-800">
                We delivered the best quality of products.
                <br />
                Everyday 7 AM - 10 PM
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <p className="lg:text-4xl md:text-4xl text-2xl font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex items-center gap-1 px-2 text-4xl mb-2">
              <div className="flex flex-col text-lg gap-1 ">
                <p className="mr-1 text-gray-800 font-semibold">Email :</p>
                <a href="#" title="send email">
                  Mishrimalai@gmail.com
                </a>
                <p className="mr-1 text-gray-800 font-semibold">Phone : </p>
                <a href="#" title="For Call">
                  +91 9335103392, 9118103392
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4  text-sm">
            <p className="lg:text-4xl md:text-2xl text-2xl font-bold tracking-wide text-gray-900">
              Social Links
            </p>
            <div className="flex items-center gap-4 py-5 px-2 text-3xl mb-2">
              <Link to="https://www.instagram.com/mishri.malai/">
                <FaInstagramSquare />
              </Link>
              <Link to="https://www.facebook.com/mishri.malai2020/">
                <FaFacebookSquare />
              </Link>
            </div>
          </div>
        </div>

        {/* <h6 className="text-sm font-bold">Product by Wing Of Wire</h6> */}
      </footer>
      <div className="text-center p-4 bg-yellow-100  w-full lg:text-lg text-sm ">
        <a href="">Copyright</a> @ · <a href="">Privacy Policy</a> · Support
      </div>
    </>
  );
};
