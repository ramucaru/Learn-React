import React, { useEffect, useState } from "react";
import RetroItems from "./RestroItems";

const Body = () => {
  const [SwiggyResponse, setSwiggyResponse] = useState([]);
  const [tempororyResponse, setTemparoryResponse] = useState([]);
  const [searchName, setSearchName] = useState("");

  const searchEvent = () => {
    const search_result = SwiggyResponse.filter((item) =>{
      return item?.card?.card?.info?.name?.toUpperCase()?.includes(searchName?.toUpperCase())
    });
    setTemparoryResponse(search_result);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.cards.slice(3), "reaallllllllll");
        setSwiggyResponse(data.data.cards.slice(3));
        setTemparoryResponse(data.data.cards.slice(3));
      })
      .catch((err) => console.log(err, "errrrrrrrr->>>>>>>>>>>"));
  };
  return (
    <div className="body">
      <div className="search-bar">
        <span className="input-container">
          <input
            className="search-input"
            value={searchName}
            onChange={(event) => {
              setSearchName(event.target.value);
            }}
            id="search"
          />
        </span>
        <span
          className="laber-container"
          onClick={searchEvent}
        >
          <label htmlFor="search" id="search">
            Search
          </label>
        </span>
      </div>
      <br />
      <div>
        <b>Restaurants here</b>
      </div>
      <div className="restro-container">
        {tempororyResponse.map((item) => (
          <RetroItems data={item} key={item?.card?.card?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
