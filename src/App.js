import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import FooterComp from "./FooterComp";
import Restaurant from "./Restaurant";

const App = () => {
  /*const cities = [{name: "London", image: "", cityPage: "", 
                  name: "Manchester", image: "", cityPage: "",
                  name: "Glasgow"], image: "", cityPage: ""*/
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards /*Cities={cities}*/ />
      <Bookings />
      <Restaurant />
      <FooterComp />
    </div>
  );
};

export default App;
