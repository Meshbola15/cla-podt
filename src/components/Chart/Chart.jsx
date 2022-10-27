import React from "react";
import "./Chart.css";
import Carousel from "react-elastic-carousel";
import chartImage1 from "../../Assets/chart-group-1.svg";
import chartImage2 from "../../Assets/chart-group-2.svg";
import chartImage3 from "../../Assets/chart-group-3.svg";
import chartImage4 from "../../Assets/chart-group-4.svg";
import chartImage5 from "../../Assets/chart-group-5.svg";
import chartImage6 from "../../Assets/chart-group-6.svg";
import Chart_container from "./Chart_container";
import Button from "../../Fragments/Button/Button";

const breakPoints = [{ itemsToShow: 1, itemsToScroll: 1 }];

const Chart = () => {
  return (
    <div className="chart-container" id="recap">
      <div className="chart-text-header">
        <h1>Here is a Recap of Everything You’re Getting Inside CLA…</h1>
        <Carousel
          breakPoints={breakPoints}
          enableMouseSwipe={true}
          enableSwipe={true}
        >
          <iframe
            src="https://player.vimeo.com/video/762006608?h=fec1839799"
            frameborder="0"
            allow="fullscreen; picture-in-picture"
            allowfullscreen
            title="Training Videos Inside View.mp4"
          ></iframe>

          <iframe
            src="https://player.vimeo.com/video/762052249?h=e220f403e8"
            frameborder="0"
            allow="fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            src="https://player.vimeo.com/video/762051998?h=dbe10d0891"
            frameborder="0"
            allow="fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Carousel>
      </div>
      <div className="chart-holder">
        <Chart_container
          img={chartImage1}
          title="Learning Resources"
          body="Get access to the most authentic and bite-sized, tailored content in the form of courses, training videos, glossary videos, and insight videos from the top industry experts in the crypto space."
        />
        <Chart_container
          img={chartImage2}
          title="Safe Community"
          body="Become part of and interact with one of the largest and safest communities of crypto enthusiasts and experts. Leverage our direct chat option to network and grow together."
        />
        <Chart_container
          img={chartImage3}
          title="Marketplace"
          body="Get access to our marketplace to promote your products and services to other community members of like-minded people. This is your chance to make sales effortlessly."
        />
      </div>
      <div className="chart-holder">
        <Chart_container
          img={chartImage4}
          title="News Section"
          body="Get access to hundreds of articles and the latest news in the crypto space every single day with the click of a button. Never again miss out on any important update or opportunity"
        />
        <Chart_container
          img={chartImage5}
          title="Gamified System"
          body="We have a gamified system where you earn points for different actions. This motivates you to take action every day, and you get to use the earned points to buy crypto and grow."
        />
        <Chart_container
          img={chartImage6}
          title="Referral Opportunity"
          body="Refer to the CLA platform with one click to your friends and network to earn more points. This way you help others take advantage of crypto while earning points for yourself. Heavenly, eh?"
        />
      </div>
      <div className="chart-btn">
        <Button
          link="https://cryptolearningacademy.com/register"
          buttonText="Yes, I Want to Subscribe to CLA Now"
          buttonStyle="trans"
        />
      </div>
    </div>
  );
};

export default Chart;
