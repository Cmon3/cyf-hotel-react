import React from "react";

import LondonImage from "../src/london.jpg";
import ManchesterImage from "../src/manchester.jpg";
import GlasgowImage from "../src/glasgow.jpg";

function TouristInfoCards() {
  return (
    <section className="d-flex flex-row justify-content-around">
      <div className="card">
        <img src={LondonImage} className="card-img-top-fluid" />
        <div className="card-body">
          <a
            href="https://visitlondon.com/"
            target="_blank"
            className="btn btn-primary"
          >
            Visit London
          </a>
        </div>
      </div>
      <div className="card">
        <img src={ManchesterImage} className="card-img-top-fluid" />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
          >
            Visit Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img src={GlasgowImage} className="card-img-top-fluid" />
        <div className="card-body">
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary"
          >
            Visit Glasgow
          </a>
        </div>
      </div>
    </section>
  );
}
/*
<div className="cards">
    {
        props.cities.map((item, index) => (
            <div className="card" key={index}>
                <img src={item.image} className="card-img-top" alt="city-img"></img>
                <div className="card-body">
                    <h1>{index + 1}, {item.name}</h1>
                    <p>{item.text}</p>
                         <a href={item.cityUrl} className="btn btn-primary">Visit {item.name}</a>
                </div>
            </div>
            

        ))
    }
</div>*/

export default TouristInfoCards;
