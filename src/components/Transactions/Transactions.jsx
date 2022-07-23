import React from "react";
import "./transactions.css";
import TransElec from "../../Assets/transElec.svg";
import Mobile from "../../Assets/mobile.svg";
import PVR from "../../Assets/pvr.svg";
import Dominos from "../../Assets/dominos.svg";
import Gro from "../../Assets/gro.svg";
import Uni from "../../Assets/uni.svg";
import Flight from "../../Assets/flight.svg";

import Transaction from "../Transaction/Transaction";
const Transactions = () => {
  return (
    <div className="Transactions">
      <h1 className="heading">Transactions</h1>
      <Transaction
        src={TransElec}
        info="Electricity"
        date="21 July"
        time="09:00"
        amount="+$234.87"
      />
      <span className="selected">
        <Transaction
          src={Mobile}
          info="Mobile Bill"
          date="28 July"
          time="09:00"
          amount="+$234.87"
        />
      </span>

      <Transaction
        src={PVR}
        info="Mobile Bill"
        date="25 July"
        time="09:00"
        amount="+$234.87"
      />
      <Transaction
        src={Dominos}
        info="Mobile Bill"
        date="29 July"
        time="09:00"
        amount="+$234.87"
      />
      <Transaction
        src={Gro}
        info="Mobile Bill"
        date="29 July"
        time="09:00"
        amount="+$234.87"
      />
      <Transaction
        src={Uni}
        info="Mobile Bill"
        date="30 July"
        time="09:00"
        amount="+$234.87"
      />
      <Transaction
        src={Flight}
        info="Mobile Bill"
        date="31 July"
        time="09:00"
        amount="+$234.87"
      />
    </div>
  );
};

export default Transactions;
