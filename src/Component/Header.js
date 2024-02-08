import React, { useEffect } from "react";
import { LOGO_URL } from "../Utils/Constant";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-part">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="links-part">
        <ul className="list">
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/aboutus"}>About Us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
