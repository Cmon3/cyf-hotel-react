import React from "react";

function TouristInfoCards(props) {
  return (
    <section className="d-flex flex-row justify-content-around">
      {props.cities.map(city => (
        <TouristInfoCard key={city.name} {...city} />
      ))}
    </section>
  );
}

function TouristInfoCard(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top-fluid" />
      <div className="card-body">
        <a href={props.cityPage} target="_blank" className="btn btn-primary">
          Visit {props.name}
        </a>
      </div>
    </div>
  );
}

export default TouristInfoCards;
