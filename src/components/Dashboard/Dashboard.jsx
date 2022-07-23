import React from "react";
import Cashback from "../Cashback/Cashback";
import Transaction from "../Transactions/Transactions";
import Right from "../RightCompo/Right";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="left">
        <Cashback />
        <Transaction />
      </div>
      <div className="right">
        <Right />
      </div>
    </div>
  );
};

export default Dashboard;
