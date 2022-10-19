import React from "react";
import "./Floating.css";
import Quote from "../../Assets/Quote.png";
import controls from "../../Assets/controls.png";
import profile1 from "../../Assets/profile-1.svg";

const Floating = () => {
  return (
    <div className="hero-down">
      <div className="hero-video-container">
        <div className="hero-video-header">
          <img src={controls} alt="Controls" />
          <h2>WATCH VIDEO</h2>
        </div>
        <div className="hero-video">
          <iframe
            src="https://player.vimeo.com/video/761785779?h=a5aaae35df&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="fullscreen; picture-in-picture"
            allowfullscreen
            title="CLA Video1"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <div className="hero-video-text">
        <img src={Quote} alt="qoute" />
        <h1>
          Discover How CLA Can Help You Unveil The Crypto Secrets And Take
          Advantage Of The New Wealth Shift…
        </h1>
        <p>
          "Thanks to the whole Crypto Learning Academy Team for putting together
          an epic program. Hands down the best Investment I’ve made in my
          business.”
        </p>
        <article>
          <img src={profile1} alt="profile" />
          <h2>Brandon Olson</h2>
        </article>
      </div>
    </div>
  );
};

export default Floating;
