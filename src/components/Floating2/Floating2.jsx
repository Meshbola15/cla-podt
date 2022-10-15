import React from "react";
import star from "../../Assets/5Stars.png";
import varImage from "../../Assets/var-image-2.png";
import "./Floating2.css";

const Floating2 = () => {
  return (
    <div className="floating2-container">
      <div className="floating">
        <div className="floating3-container">
          <div className="floating-niche-text">
            <h1>NICHE:</h1>
            <h2>NFT Marketplace and Trading</h2>

            <h1>RESULTS</h1>
            <p>
              From inconsistent incone to predictably knowing how much he’s
              going to be making from his business each month
            </p>

            <hr />
            <span>Jeff Anderson</span>
          </div>
          <img src={varImage} />
        </div>
      </div>
      <div className="floating2-placeholder"></div>
    </div>
  );
};

export default Floating2;
