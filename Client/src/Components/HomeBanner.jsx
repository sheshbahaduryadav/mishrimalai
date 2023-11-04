import React from "react";
import bgImg from "../assets/banner/image-1920x600.jpg";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const HomeBanner = () => {
  return (
    <BannerWrapper>
      <div className="bg-orange-900 lg:h-[550px] md:h-[500px] sm:lg:h-[300px] h-[250px] banner-image text-white w-full px-2 lg:px-40 lg:pb-36">
        <div className="lg:py-24 md:py-20 sm:py-4 py-4 lg:w-2/4 ">
          <div className="lg:bg-opacity-30 rounded-3xl p-5 lg:bg-gray-600">
            <h1 className="text-[20px] lg:text-5xl pb-4 font-semibold ">
              MISHRI MALAI - "A Symphony of Flavors."
            </h1>

            <p className="text-[16px] pb-[18px] lg:text-xl font-medium ">
              From Sweet to Savory, We've Got It All Join Us for a Feast to
              Remember.
            </p>

            <div className="lg:pt-5 md:pt-5">
              <Link
                to="tel:9335103392"
                className="bg-[#fda326] border-2 p-2 border-white hover:scale-105 hover:bg-yellow-800 duration-300 transition-all lg:h-12 lg:w-40 lg:text-xl h-10 w-28 rounded-full font-bold"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  .banner-image {
    background-image: url(${bgImg});
    background-size: 100% 100%;
    background: cover;
    background-position: center;
  }
`;
