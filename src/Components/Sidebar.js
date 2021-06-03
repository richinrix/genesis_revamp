import React, { useState, useEffect } from "react";
import "./CSS/component.css";

function Sidebar() {
  const [scrollDetect, setScrollDetect] = useState(false);

  // Function to detect scrolling and change theme based on that
  const screenWidth = useState(window.innerWidth);

  const handleScroll = () => {
    if (screenWidth > 500) {
      if (window.scrollY > 600) {
        setScrollDetect(true);
      } else {
        setScrollDetect(false);
      }
    } else {
      if (window.scrollY > 350) {
        setScrollDetect(true);
      } else {
        setScrollDetect(false);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="socialContainer hidden md:block m-0">
      <div className="icon-bar fixed top-3/4 z-50 pl-3 ">
        <a
          href="https://www.instagram.com/genesisproduction.in/"
          className={
            scrollDetect
              ? "social-icon flex relative text-center overflow-hidden content-center items-center text-gray-600"
              : "social-icon slite flex relative text-center overflow-hidden content-center items-center text-gray-600"
          }
          target="_blank"
        >
          <i className="fa fa-instagram m-auto text-black z-1"></i>
        </a>
        <a
          href="https://twitter.com/genesismedia_in"
          className={
            scrollDetect
              ? "social-icon flex relative text-center overflow-hidden content-center items-center text-gray-600"
              : "social-icon slite flex relative text-center overflow-hidden content-center items-center text-gray-600"
          }
          target="_blank"
        >
          <i className="fa fa-twitter m-auto text-black z-1"></i>
        </a>
        <a
          href="https://www.facebook.com/genesisproduction.in/"
          className={
            scrollDetect
              ? "social-icon flex relative text-center overflow-hidden content-center items-center text-gray-600"
              : "social-icon slite flex relative text-center overflow-hidden content-center items-center text-gray-600"
          }
          target="_blank"
        >
          <i className="fa fa-facebook m-auto text-black z-1"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/genesis-production/"
          className={
            scrollDetect
              ? "social-icon flex relative text-center overflow-hidden content-center items-center text-gray-600"
              : "social-icon slite flex relative text-center overflow-hidden content-center items-center text-gray-600"
          }
          target="_blank"
        >
          <i className="fa fa-linkedin m-auto text-black z-1"></i>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
