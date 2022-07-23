import React from "react";
import "./transactions.css";
const Transactions = ({ src, info, date, time, amount }) => {
  return (
    <div className="Transaction">
      <img src={src} alt="" />
      <h2>{info}</h2>
      <div className="info">
        <p>Date</p>
        <h3>{date}</h3>
      </div>
      <div className="info">
        <p>Time</p>
        <h3>{time}</h3>
      </div>
      <div className="info">
        <p>Amount</p>
        <h3>{amount}</h3>
      </div>
      <button className="invoicebtn">Invoice</button>
    </div>
  );
};

export default Transactions;
