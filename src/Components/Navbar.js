import React, { useEffect, useState } from "react";
import logoLite from "../images/icons/logoLite.png";
import logoDark from "../images/icons/logoDark.png";
import "./CSS/navbar.css";

function Navbar() {
  const [scrollDetect, setScrollDetect] = useState(false);
  const screenWidth = useState(window.innerWidth);
  // Function to detect scrolling and change theme based on that
  const handleScroll = () => {
    if (screenWidth > 500) {
      if (window.scrollY > 600) {
        setScrollDetect(true);
        document.body.style.backgroundColor = "white";
      } else {
        setScrollDetect(false);
        document.body.style.backgroundColor = "black";
      }
    } else {
      if (window.scrollY > 350) {
        setScrollDetect(true);
        document.body.style.backgroundColor = "white";
      } else {
        setScrollDetect(false);
        document.body.style.backgroundColor = "black";
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="navContainer">
      <nav class="nav scrol flex flex-wrap items-center justify-between px-4">
        <div class="flex flex-no-shrink items-center mr-6 py-5 pl-0 md:pl-2">
          <a className="navLogo self-center" href="/#">
            <img
              className="hidden md:block"
              src={scrollDetect ? logoLite : logoDark}
              alt=""
              srcset=""
              style={{ height: "60px", width: "120px" }}
            />
          </a>
        </div>

        <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          for="menu-btn"
        >
          <span class="navicon  flex items-center relative"></span>
        </label>

        <ul
          className={
            scrollDetect
              ? "navList lite menu md:border-none font-normal flex mr-10 ml-10  items-center justify-end m-0 list-none p-0 w-screen md:w-auto  md:bg-transparent"
              : "navList menu md:border-none font-normal flex mr-10 ml-10 items-center justify-end list-none m-0 p-0 w-screen md:w-auto  md:bg-transparent"
          }
        >
          <li class="border-none">
            <a href="/#teams" class="block md:inline-block  py-3 no-underline">
              Team
            </a>
          </li>

          <li class="navSer border-none">
            <a
              href="/#services"
              class=" block md:inline-block  py-3 no-underline"
            >
              Services
            </a>
          </li>

          <li class="border-none">
            <a
              href="/blog"
              target="_blank"
              class="block md:inline-block py-3 no-underline"
            >
              Blog
            </a>
          </li>

          <li class="border-none">
            <a
              href="/#contactContainer"
              class="block md:inline-block  py-3 no-underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
