import React from "react";
import "./Learning.css";
import Button from "../../Fragments/Button/Button";

const Learning = () => {
  return (
    <div
      className=""
      style={{
        position: "relative",
        background: "#EEEEEE",
      }}
    >
      <div className="learning-container">
        <div className="learning-img-container-1">
          <div>
            <iframe
              src="https://player.vimeo.com/video/761783556?h=a33c1ac816&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="fullscreen; picture-in-picture"
              allowfullscreen
              title="CLA Introduction-Final"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>

        <div className="learning-text-context">
          <h1>Who Is Behind Crypto Learning Academy?</h1>
          <h2>Reginald Braziel</h2>
          <p>
            My name is Reginald Braziel, and I’m the CEO of HighRise Elite
            Marketing - one of the pioneers in blockchain technology, Web 3.0,
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
            buttonText="Visit Parent Company"
            buttonStyle="solid"
            link="https://www.highriseelite.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Learning;
