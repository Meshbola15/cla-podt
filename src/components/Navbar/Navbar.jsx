import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../Assets/logo.png";
import "./Navbar.css";

const Menu = () => {
  return (
    <>
      <a href="#" className="nav-links">
        Home
      </a>
      <a href="#" className="nav-links">
        Our Story
      </a>
      <a href="#" className="nav-links">
        How it works
      </a>
      <a href="#" className="nav-links">
        Client Success
      </a>
      <a href="#" className="nav-links">
        Contact Us
      </a>
      <a href="#" className="solid">
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
