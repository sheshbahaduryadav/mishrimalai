import React from "react";
import Shop from "./Shop";
import Service from "./Services";
import About from "./About";
import { HomeBanner } from "../Components/HomeBanner";
import Contacts from "./Contacts";

export const Home = () => {
  return (
    <div>
    <HomeBanner /> 
    <Shop />
    <Service />
   <Contacts/>
      <About/> 
     
 

    </div>
  );
};
