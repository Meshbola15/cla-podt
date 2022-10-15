import React from "react";
import video_placeholder from "../../Assets/video-1.svg";
import star from "../../Assets/5Stars.png";
import varImage from "../../Assets/var-image-2.png";
import "./Learning.css";
import Button from "../../Fragments/Button/Button";

const Learning = () => {
  return (
    <div
      className=""
      style={{
        position: "relative",
        background: "#EEEEEE"
      }}
    >
      <div className="learning-container">
        <div className="learning-img-container-1">
          <img src={video_placeholder} className="image-place" />
        </div>
        <div className="learning-text-context">
          <h1>Who Is Behind Crypto Learning Academy?</h1>
          <h2>Reginald Braziel</h2>
          <p>
            My name is Reginald Braziel, and I’m the CEO of HighRise Elite
            Marketing - one of the pioneers in blockchain technology, Web 2.0,
            Metaverse, power of marketing, NFT marketplace, and smart contracts.
            For over a decade (since 2011), I’ve been on a mission to spread
            awareness about the power of cryptocurrencies and other emerging
            technologies. From blog posts to multiple events and platforms, I
            have been consistently playing my part to help newcomers get the
            best possible resources and knowledge to make informed, profitable
            trades. When I brought my years of knowledge and experience and all
            of the best strategies and tools under one platform, Crypto Learning
            Academy was born. That's what makes CLA one of the most powerful and
            authentic platforms to start your crypto learning and trading
            journey without any confusion or hassle.
          </p>
          <Button
            buttonText="Read Full Story Here"
            buttonStyle="solid"
            link="#"
          />
        </div>
      </div>
      <div className="floating">
        <div className="floating-container">
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
    </div>
  );
};

export default Learning;
