import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  const orderTypes = ["Pizzas", "Salads", "Chocolate cake"];
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {orderTypes.map(orderType => {
          return <Order orderType={orderType} />;
        })}
      </ul>
    </div>
  );
};

export default Restaurant;
