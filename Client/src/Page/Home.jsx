import React from "react";
import Shop from "./Shop";
import Service from "./Services";
import { HomeBanner } from "../Components/HomeBanner";
import Contacts from "./FoodOffering";
import { SweetsList } from "../Components/SweetsList";
import { LatestCategory } from "../Components/LatestCategory";

export const Home = () => {
  return (
    <div>
      <HomeBanner />
      <LatestCategory />
      <Service />
      <SweetsList />
      <Contacts />
    </div>
  );
};
