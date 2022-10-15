import React from "react";
import "./Crypto.css";
import Chart from "../../Assets/chart-image.svg";

const Crypto = () => {
  return (
    <div className="crypto-container">
      <div className="crypto-text-context">
        <h2>CRYPTO LEARNING ACADEMY FACEBOOK™ GROUP</h2>
        <h1>See What Our Members Have Been Saying About CLA…</h1>
        <p>
          Still on the verge? See what other amazing members of our CLA
          community are saying about this life-changing platform…
        </p>
      </div>
      <div className="crypto-list">
        <h1>Here is a Recap of Everything You’re Getting Inside CLA…</h1>
        <img src={Chart} />
      </div>
    </div>
  );
};

export default Crypto;
