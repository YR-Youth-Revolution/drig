import React, { useState } from "react";
import "./Header.css";
import logo from "../../../../public/images/Drig-Black-Logo.png";
import menuIcon from "/public/images/menu.svg";

import closeIcon from "/public/images/close.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header-container">
        <div className="logo-box">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="nav-bar">
          <div className="menu desktop-menu">
            <ul>
              <li>
                <a href="/About">ABOUT DRIG</a>
              </li>
              <li>
                <a href="/services">SERVICES</a>
              </li>
              <li>
                <a href="/work">WORK</a>
              </li>
              <li>
                <a href="/contact">CONTACT US</a>
              </li>
            </ul>
          </div>
          <div className="contact-button">
            <a href="/contact">
              <button>
                <span>LET'S TALK</span>
              </button>
            </a>
          </div>
          <div className="hamburger-menu">
            <img
              src={isMenuOpen ? closeIcon : menuIcon}
              alt="menu"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Sliding Menu for Mobile */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="logo-box">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul>
          <li>
            <a href="/media21">ABOUT M21</a>
          </li>
          <li>
            <a href="/services">OUR SERVICES</a>
          </li>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
