import React from "react";
import arrow from "../../Assets/arrow.svg";
import "./Button.css";

const Button = ({ buttonStyle, link, buttonText }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonStyle}`}
    >
      {buttonText}
      <div className="">
        <img src={arrow} alt="" />
      </div>
    </a>
  );
};

export default Button;
