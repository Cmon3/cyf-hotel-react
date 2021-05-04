import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import FooterComp from "./FooterComp";

const App = () => {
  /*const cities = [{name: "London", image: "", cityPage: "", 
                  name: "Manchester", image: "", cityPage: "",
                  name: "Glasgow"], image: "", cityPage: ""*/
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards /*Cities={cities}*/ />
      <Bookings />
      <FooterComp />
    </div>
  );
};

export default App;
