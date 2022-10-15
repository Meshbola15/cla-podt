import React from "react";
import "./information.css";
import image1 from "../../Assets/info-image-1.png";
import image2 from "../../Assets/info-image-2.png";
import Button from "../../Fragments/Button/Button";

const Infomation = () => {
  return (
    <div className="information">
      <div className="information-container">
        <section className="information-text-container">
          <h1>Go Beyond the Clutter of Misinformation and Confusion</h1>
          <p>
            With the emergence of cryptocurrency also came con artists and fake
            gurus. Just a mere keyword search of “cryptocurrency” on YouTube
            will drown you into a sea of videos - most of them designed to
            confuse you and get you to buy something useless eventually. CLA is
            here to help you learn the basics of crypto and blockchain
            technology with tailored resources such as courses, short training
            videos, glossary videos, and insights from industry experts. It also
            helps you network with like-minded people with social media
            integration inside the platform. Not only that but you also get the
            latest news, projects to invest in and profit from, and a
            marketplace where you can sell your products/services to the
            community. For every referral and interaction, you earn points that
            you can use to invest in crypto and grow your portfolio. It simply
            can't get any better than that. What's holding you from taking
            action and subscribing to the CLA today?
          </p>
        </section>
        <section className="information-img-container">
          <img src={image1} />
          <img src={image2} />
        </section>
      </div>
      <div className="information-btn">
        <Button
          buttonStyle="bordered"
          buttonText="Yes, I'm Ready to Join CLA Now"
          link="#"
        />
      </div>
    </div>
  );
};

export default Infomation;
