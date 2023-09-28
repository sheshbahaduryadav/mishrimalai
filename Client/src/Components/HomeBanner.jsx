import React from "react";
import  bgImg  from "../assets/1.jpg";
import { styled } from "styled-components";


export const HomeBanner = () => {
  return (
    <BannerWrapper>
      <div className="bg-orange-900 banner-image text-white h-full w-full px-5 lg:px-40 lg:pb-36">
        <div className=" pt-14 lg:pt-28 lg:w-2/4  ">
          <h1 className=" text-[25px] lg:text-7xl pb-4 font-semibold leading-loose ">
            We Bake With Passion
          </h1>
          
          <p className="text-[16px] pb-[18px] lg:text-xl font-medium leading-loose">
            Volutpat sit amet leo id efficitur mattis turpis
            <br /> dunec bibendum est proin ligula nisl.
          </p>
          </div>
          <div className=" pb-24  pt-5">
          <button className='bg-[#fda326] lg:h-14 lg:w-40 lg:text-xl h-10 w-28 rounded-full font-bold'>
            Order Now</button>
       </div>
       </div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  .banner-image{
    background-image:url(${bgImg});
    background-size:100% 100%;
    background:cover;
  background-position: center;
  }
`