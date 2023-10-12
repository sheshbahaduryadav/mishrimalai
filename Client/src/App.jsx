import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../src/Page/Home";
import Shop from "../src/Page/Shop";
import Services from "../src/Page/Services";
import Contacts from "../src/Page/Contacts";
import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
