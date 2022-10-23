import React from "react";
import "./Crypto.css";
import Chart from "../../Assets/chart-image.svg";
import gif from "../../Assets/icons8-double-down-unscreen.gif";

const Crypto = () => {
  return (
    <div className="crypto-container">
      <div className="crypto-text-context">
        <img src={gif} alt="" />
      </div>
      <div className="crypto-list">
        <h1>Come Join the Fun!</h1>
        <iframe
          src="https://player.vimeo.com/video/761792312?h=cb0c7ff3d2"
          frameborder="0"
          allow="fullscreen"
          allowfullscreen
        ></iframe>
        <img src={Chart} alt="pricing" />
      </div>
    </div>
  );
};

export default Crypto;
