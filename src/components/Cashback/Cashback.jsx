import React from "react";
import "./cashback.css";
import Logo from "../../Assets/logo.svg";
import LogoText from "../../Assets/logoText.svg";
import CashbackImage from "../../Assets/cashbackimage.svg";
const Cashback = () => {
  return (
    <div className="cashback">
      <div className="cashbackText">
        <div className="logoInCashback">
          <img src={Logo} alt="" />
          <img src={LogoText} alt="" />
        </div>
        <div className="text">
          <h1>CashBack up to 60% ✨</h1>
          <p className="subheading">Get reward, gifts % cashback</p>
        </div>
        <button className="btn">Get it now</button>
      </div>
      <div className="cashbackImage">
        <img src={CashbackImage} alt="" />
      </div>
    </div>
  );
};

export default Cashback;
