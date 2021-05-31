import React, { useState, useEffect } from "react";
import "./CSS/sidebar.css";

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
    <div class="socialContainer">
      <div class="icon-bar">
        <a
          href="https://www.instagram.com/genesisproduction.in/"
          class={scrollDetect ? "social-icon" : "social-icon slite "}
          target="_blank"
        >
          <i class="fa fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/genesismedia_in"
          class={scrollDetect ? "social-icon " : "social-icon slite "}
          target="_blank"
        >
          <i class="fa fa-twitter"></i>
        </a>
        <a
          href="https://www.facebook.com/genesisproduction.in/"
          class={scrollDetect ? "social-icon " : "social-icon slite "}
          target="_blank"
        >
          <i class="fa fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/genesis-production/"
          class={scrollDetect ? "social-icon " : "social-icon slite "}
          target="_blank"
        >
          <i class="fa fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
