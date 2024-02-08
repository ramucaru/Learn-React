import React from "react";
import Header from "../../Component/Header";
import Body from "../../Component/Body";
import "./FoodDelivery.css";
import { Outlet } from "react-router-dom";

const FoodDelivery = () => {
  return (
    <div className="container">
      <Header />
      <br />
      <Outlet />
    </div>
  );
};

export default FoodDelivery;
