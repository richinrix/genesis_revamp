import React, { useState } from "react";
import "./CSS/component.css";

function Sidebar() {
  //Function to detect scroll and then change icon colors based on that
  const [scrollDetect, setScrollDetect] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrollDetect(true);
    } else {
      setScrollDetect(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="socialContainer hidden md:block m-0">
      <div className="icon-bar fixed top-3/4 z-20 pl-3 ">
        <a
          href="https://www.instagram.com/genesisproduction.in/"
          className={
            scrollDetect
              ? "social-icon flex relative text-center overflow-hidden content-center items-center text-gray-600"
              : "social-icon slite flex relative text-center overflow-hidden content-center items-center text-gray-600"
          }
          target="_blank"
          rel="noreferrer"
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
          rel="noreferrer"
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
          rel="noreferrer"
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
          rel="noreferrer"
        >
          <i className="fa fa-linkedin m-auto text-black z-1"></i>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
