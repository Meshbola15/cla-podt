import React from "react";
import arrow from "../../Assets/arrow.svg";
import "./Button.css";
import { TiArrowRightThick } from "react-icons/ti";

const Button = ({ buttonStyle, link, buttonText }) => {
  return (
    <a href={link} className={`${buttonStyle}`}>
      {buttonText}
      <div className="">
        <img src={arrow} alt="" />
      </div>
    </a>
  );
};

export default Button;
