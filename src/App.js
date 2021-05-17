import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import FooterComp from "./FooterComp";
import Restaurant from "./Restaurant";

import LondonImage from "./images/london.jpg";
import ManchesterImage from "./images/manchester.jpg";
import GlasgowImage from "./images/glasgow.jpg";

const App = () => {
  const cities = [
    {
      name: "London",
      image: LondonImage,
      cityPage: "https://visitlondon.com/"
    },
    {
      name: "Manchester",
      image: ManchesterImage,
      cityPage: "https://www.visitmanchester.com/"
    },
    {
      name: "Glasgow",
      image: GlasgowImage,
      cityPage: "https://peoplemakeglasgow.com/"
    }
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cities={cities} />
      <Bookings />
      <Restaurant />
      <FooterComp />
    </div>
  );
};

export default App;
