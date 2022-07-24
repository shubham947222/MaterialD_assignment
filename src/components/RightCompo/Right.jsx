import React from "react";
import "./Right.css";
import one from "../../Assets/0.svg";
import two from "../../Assets/1.svg";
import three from "../../Assets/3.svg";
import four from "../../Assets/4.svg";
import left from "../../Assets/left.svg";
import right from "../../Assets/right.svg";
import amazon from "../../Assets/amazon.svg";
import flipkart from "../../Assets/flipkart.svg";
import myntra from "../../Assets/myntra.svg";
import small from "../../Assets/small.svg";
import small2 from "../../Assets/small2.svg";
import small3 from "../../Assets/small3.svg";

const Right = () => {
  return (
    <div className="rightSection">
      <div className="upperSection">
        <div className="expenseNav">
          <div>Expenses</div>
          <select>
            <option>Month</option>
          </select>
        </div>
        <div className="expenseImg">
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
        <div className="cardsNav">
          <div>Cards</div>
        </div>
        <div className="cardsImg">
          <img className="leftIcon" src={left} alt="dummy" />
          <img className="creditCard" src={four} alt="dummy" />
          <img className="rightIcon" src={right} alt="dummy" />
        </div>
        <div className="graphSection">
          <div className="graphTabs">
            <img src={amazon} alt="dummy" />

            <div className="graphDiv">
              <p className="company">Amazon</p>
              <p className="time">2 hour ago</p>
            </div>
            <img className="graph" src={small} alt="dummy" />
            <div className="price">+$636.65</div>
          </div>
          <div className="graphTabs">
            <img src={flipkart} alt="dummy" />
            <div className="graphDiv">
              <p className="company">Flipkart</p>
              <p className="time">4 hour ago</p>
            </div>
            <img className="graph" src={small2} alt="dummy" />
            <div className="price">-$236.65</div>
          </div>
          <div className="graphTabs">
            <img src={myntra} alt="dummy" />
            <div className="graphDiv">
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
