import React from "react";
import callIcon from "../../Assets/call-icon.svg";
import locationIcon from "../../Assets/location-icon.svg";
import timeIcon from "../../Assets/time-icon.svg";
import "./Footer.css";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-context-container">
          <article className="footer-text-context">
            <h1>Crypto Learning Academy</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </article>

          <article className="footer-social">
            <h3>FOLLOW US ON</h3>
            <section>
              <a href="#">
                <BsFacebook size={30} color="white" />
              </a>
              <a href="#">
                <BsTwitter size={30} color="white" />
              </a>
              <a href="#">
                <BsInstagram size={30} color="white" />
              </a>
            </section>
          </article>
        </div>

        <div className="footer-link-container">
          <section className="footer-quick-links">
            <h1>QUICK LINKS</h1>

            <div className="footer-quick-links-container">
              <a href="#">About Us</a>
              <a href="#">Book a call</a>
              <a href="#">Facebook</a>
              <a href="#">Blog</a>
              <a href="#">FAQs</a>
            </div>
          </section>

          <section className="contact-container">
            <h1>CONTACT & INFOMATION</h1>
            <div className="information-links">
              <img src={callIcon} />
              <div className="informtion-link-details">
                <h1>Phone Number</h1>
                <h2>+088 125 654 987</h2>
              </div>
            </div>
            <div className="information-links">
              <img src={timeIcon} />
              <div className="informtion-link-details">
                <h1>Open Hours</h1>
                <h2>09:00AM - 18:00 PM</h2>
              </div>
            </div>
            <div className="information-links">
              <img src={locationIcon} />
              <div className="informtion-link-details">
                <h1>Clinic Address</h1>
                <h2>Lorem Ipsum is simply dummy text of the printing </h2>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="privacy-section">
        <a href="#">©Dentalist. All Right Reserved</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
      </section>
    </div>
  );
};

export default Footer;
