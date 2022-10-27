import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import logo from "../../Assets/logo.png";
import "./Navbar.css";

const Menu = () => {
  return (
    <>
      <Link className="nav-links" to="home" smooth={true} duration={500}>
        Home
      </Link>
      <Link className="nav-links" to="hero-video" smooth={true} duration={500}>
        Our Story
      </Link>
      <Link className="nav-links" to="behind" smooth={true} duration={500}>
        Who Are WE
      </Link>
      <Link className="nav-links" to="recap" smooth={true} duration={500}>
        What's Inside
      </Link>
      <a
        href="https://cryptolearningacademy.com/register"
        target="_blank"
        className="solid"
      >
        Sign up Free Today
      </a>
    </>
  );
};

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="Navbar-container">
      <div className="Navbar-header-container">
        <img src={logo} alt="" />
        <section className="nav-links-container">
          <button className="mobile-btn" onClick={() => setOpened(!opened)}>
            {opened ? (
              <AiOutlineClose size={30} color="white" />
            ) : (
              <AiOutlineMenu size={30} color="white" />
            )}
          </button>
          <div className="desktop">
            <Menu />
          </div>

          <div className="">
            {opened && (
              <div className="mobile">
                <Menu />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
