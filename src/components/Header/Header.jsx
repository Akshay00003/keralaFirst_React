import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <img src="./logo1.png" alt="logo" />
        </div>
        <div className="right">
          <a href="">Home</a>
          <a href="">Contacts</a>
          <BiMenuAltLeft className="menu-icon" size={30} />
          <a href="">
            <button type="button">Register</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
