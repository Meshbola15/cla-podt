import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Calendar from "../../Assets/Calendar.svg";
import Contact from "../../Assets/contact.svg";
import position from "../../Assets/position.svg";
import "./Counter.css"


const Counter = () => {
  const { ref, inView, entry } = useInView({
    delay: 2000,
  });
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  useEffect(() => {
    let count_1 = 105;
    let count_2 = 3.5;
    let count_3 = 36.5;
    if (inView === true) {
      const timer = setTimeout(() => setCounter(counter + 1), 15);
      const timer2 = setTimeout(() => setCounter2(counter2 + 0.5), 25);
      const timer3 = setTimeout(() => setCounter3(counter3 + 0.5), 25);
      if (counter === count_1) {
        clearTimeout(timer);
      }
      if (counter2 === count_2) {
        clearTimeout(timer2);
      }
      if (counter3 === count_3) {
        clearTimeout(timer3);
      }
    }
  }, [inView, counter3, counter2, counter]);

  return (
    <div className="counter-container">
      <article>
        <h2>
          See For Yourself The Power of the CLA and How It Has Changed Enormous
          Lives…
        </h2>
      </article>
      <div className="counter-holder-container" ref={ref}>
        <section className="counter-section">
          <img src={Calendar} />
          <h1>
            ${counter}M <span>+</span>
          </h1>
          <hr />
          <h2>Revenue </h2>
        </section>
        <section className="counter-section">
          <img src={Contact} />
          <h1>
            ${counter2}M <span>+</span>
          </h1>
          <hr />
          <h2>Group Members</h2>
        </section>
        <section className="counter-section">
          <img src={position} />
          <h1>
            ${counter3}M <span>+</span>
          </h1>
          <hr />
          <h2>High Paying Clients</h2>
        </section>
      </div>
    </div>
  );
};

export default Counter;
