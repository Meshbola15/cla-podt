import React from "react";
import Button from "../../Fragments/Button/Button";
import star from "../../Assets/5Stars.png";
import heroBG from "../../Assets/Hero-bg-1.png";
import "./Hero.css";
import Floating from "../Floating/Floating";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-context-container">
          <section className="hero-text-container">
            <h1>Crypto Learning Academy (CLA)</h1>
            <h2>
              Crypto Secrets Unveiled: One Platform To Learn, Network, And Grow.
            </h2>
            <p>
              Join hundreds of others who are learning about blockchain and
              cryptocurrencies, networking with like-minded people, staying
              ahead in the game, and securing their financial future.
            </p>
            <div className="hero-btn-container">
              <Button
                link="#"
                buttonStyle="solid"
                buttonText="Yes, I’m Ready to Join CLA Now"
              />
            </div>

            <div className="hero-rating-container">
              <h2>
                Excellent
                <img src={star} />
                <span>5.0</span>/ 100's of Review rating
              </h2>
            </div>
          </section>
          <div className="" style={{
            minHeight: "308px"
          }}>
            <Floating />
          </div>
        </div>
        <img src={heroBG} className="bg-image" />
      </div>
    </div>
  );
};

export default Hero;
