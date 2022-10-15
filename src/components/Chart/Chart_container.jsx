import React from "react";
import "./Chart.css";

const Chart_container = ({ img, title, body }) => {
  return (
    <div className="chart-frag">
      <img src={img} />
      <article>
        <h1>{title}</h1>
        <hr />
        <p>{body}</p>
      </article>
    </div>
  );
};

export default Chart_container;
