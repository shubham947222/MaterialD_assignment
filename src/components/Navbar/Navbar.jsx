/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../Assets/logo.svg";
import LogoText from "../../Assets/logoText.svg";
import Bell from "../../Assets/bell.svg";
import Profile from "../../Assets/profile.svg";
import Dropdown from "../../Assets/dropdown.svg";
import Line from "../../Assets/line.svg";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <img src={Logo} alt="" />
          <img src={LogoText} alt="" />
        </div>
        <div className="navbarOption">
          <a href="#" id="a">
            Dashboard
          </a>
          <a href="#">Stocks</a>
          <a href="#">Analysis</a>
          <a href="#">Settings</a>
        </div>
        <div className="profileIcon">
          <img src={Bell} alt="bell" />
          <img src={Profile} alt="profile" />
          <img src={Dropdown} alt="drop" />
        </div>
      </div>
      <img src={Line} alt="" className="lineimg" />
    </>
  );
};

export default Navbar;
