import React, { useState } from "react";
import "./Faq.css";
import Faq_container from "./Faq_container";

const Data = [
  {
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis illum sit dolorem voluptatibus. Labore laboriosam hic architecto, sequi dolor ratione repellendus explicabo nobis repellat esse recusandae! Eaque, consequuntur aperiam?",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis illum sit dolorem voluptatibus. Labore laboriosam hic architecto, sequi dolor ratione repellendus explicabo nobis repellat esse recusandae! Eaque, consequuntur aperiam?",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis illum sit dolorem voluptatibus. Labore laboriosam hic architecto, sequi dolor ratione repellendus explicabo nobis repellat esse recusandae! Eaque, consequuntur aperiam?",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const Faq = () => {
  const [questions, setQuestions] = useState(Data);
  return (
    <div className="faq-container">
      <div className="faq-text-context">
        <h1>Frequently Asked Questions</h1>
        <p>Get anwers to all your burning questions</p>
      </div>
      <div className="btn-holder">
        <section>
          {questions.map((list, index) => {
            return <Faq_container key={index + list} {...list} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default Faq;
