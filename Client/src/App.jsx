import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../src/Page/Home";
import About from "../src/Page/About";
import Shop from "../src/Page/Shop";
import Services from "../src/Page/Services";
import Contacts from "../src/Page/Contacts";
import Navbar from "./Components/Navbar/Navbar"

const App = () => {
  return (
    <>
       <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default App;
