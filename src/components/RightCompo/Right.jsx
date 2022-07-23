import React from "react";
import "./Right.css";
import one from "../../ass/0.svg";
import two from "../../ass/1.svg";
import three from "../../ass/3.svg";
import four from "../../ass/4.svg";
import left from "../../ass/left.svg";
import right from "../../ass/right.svg";
import amazon from "../../ass/amazon.svg";
import flipkart from "../../ass/flipkart.svg";
import myntra from "../../ass/myntra.svg";
import small from "../../ass/small.svg";
import small2 from "../../ass/small2.svg";
import small3 from "../../ass/small3.svg";

const Right = () => {
  return (
    <div className="right-section">
      <div className="upperSection">
        <div className="expense_nav">
          <div>Expenses</div>
          <select>
            <option>Month</option>
          </select>
        </div>
        <div className="expense_img">
          <div className="expense1">
            <img src={one} alt="dummy" />
          </div>
          <div className="expense2">
            <div className="expense2Upper">
              <img src={two} alt="dummy" />
            </div>
            <div className="expense2Lower">
              <img src={three} alt="dummy" />
            </div>
          </div>
        </div>
      </div>
      <div className="lowerSection">
        <div className="cards_nav">
          <div>Cards</div>
        </div>
        <div className="cards_img">
          <img className="leftIcon" src={left} alt="dummy" />
          <img className="creditCard" src={four} alt="dummy" />
          <img className="rightIcon" src={right} alt="dummy" />
        </div>
        <div className="graphSection">
          <div className="graph-tabs">
            <img src={amazon} alt="dummy" />

            <div className="graph-div">
              <p className="company">Amazon</p>
              <p className="time">2 hour ago</p>
            </div>
            <img className="graph" src={small} alt="dummy" />
            <div className="price">+$636.65</div>
          </div>
          <div className="graph-tabs">
            <img src={flipkart} alt="dummy" />
            <div className="graph-div">
              <p className="company">Flipkart</p>
              <p className="time">4 hour ago</p>
            </div>
            <img className="graph" src={small2} alt="dummy" />
            <div className="price">-$236.65</div>
          </div>
          <div className="graph-tabs">
            <img src={myntra} alt="dummy" />
            <div className="graph-div">
              <p className="company">Myntra</p>
              <p className="time">6 hour ago</p>
            </div>
            <img className="graph" src={small3} alt="dummy" />
            <div className="price">-$136.65</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
