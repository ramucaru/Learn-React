import React from "react";
import { RestroItems } from "../Utils/MockData";
import { CLOUDNARY_URL } from "../Utils/Constant";

const RetroItems = ({ data }) => {
  const info = data?.card?.card?.info;
  console.log(info, "infoinfo");
  return (
    <div className="restro-item">
      <div className="restro-img-part">
        <img
          src={CLOUDNARY_URL + info?.cloudinaryImageId}
          className="restro-img"
          alt="loading..."
        />
      </div>
      <div
        className="restro-name-part"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {info?.name}
      </div>
      <br />
      <div className="rating-location">
        <span className="rating">*{info?.avgRating}</span>
        <span className="location">{info?.areaName}</span>
        <span className="distance">{info?.sla?.lastMileTravelString}</span>
      </div>
      <span className="rating">{info?.sla?.slaString}</span>
      <span className="prize">{info?.costForTwo}</span>
    </div>
  );
};

export default RetroItems;
