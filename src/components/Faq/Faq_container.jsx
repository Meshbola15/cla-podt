import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import "./Faq.css"

const Faq_container = ({ title, answer }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div>
      <div
        className="faq_question_container"
        onClick={() => setIsOpened(!isOpened)}
      >
        <div className="faq_header">
          <h1>{title}</h1>
          {isOpened ? (
            <MdOutlineKeyboardArrowUp size={20} />
          ) : (
            <MdOutlineKeyboardArrowDown size={20} />
          )}
        </div>
        {isOpened && (
          <div className="faq-text">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq_container;
