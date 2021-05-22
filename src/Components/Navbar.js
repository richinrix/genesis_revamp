import React, { useEffect, useState } from "react";
import logoLite from "../images/icons/logoLite.png";
import logoDark from "../images/icons/logoDark.png";
import "./CSS/navbar.css";

function Navbar() {
  const [scrollDetect, setScrollDetect] = useState(false);

  // Function to detect scrolling and change theme based on that
  const handleScroll = () => {
    if (window.scrollY > 600) {
      setScrollDetect(true);
      document.body.style.backgroundColor = "white";
    } else {
      setScrollDetect(false);
      document.body.style.backgroundColor = "black";
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="navContainer">
      <nav class="nav scrol flex flex-wrap items-center justify-between px-4">
        <div class="flex flex-no-shrink items-center mr-6 py-5 pl-0 md:pl-8">
          <a className="navLogo self-center" href="#">
            <img
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
          <span class="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul
          className={
            scrollDetect
              ? "navList lite menu border-b md:border-none font-normal flex mr-10 items-center justify-end list-reset m-0 w-full md:w-auto"
              : "navList menu border-b md:border-none font-normal flex mr-10 items-center justify-end list-reset m-0 w-full md:w-auto"
          }
        >
          <li class="border-t md:border-none">
            <a
              href="/#teamCall"
              class="block md:inline-block px-4 py-3 no-underline"
            >
              Services
            </a>
          </li>

          <li class="border-t md:border-none">
            <a
              href="/#aboutContainer"
              class="block md:inline-block px-4 py-3 no-underline"
            >
              Team
            </a>
          </li>

          <li class="border-t md:border-none">
            <a
              href="/career"
              target="_blank"
              class="block md:inline-block px-4 py-3 no-underline"
            >
              Blog
            </a>
          </li>

          <li class="border-t md:border-none">
            <a
              href="/#contactContainer"
              class="block md:inline-block px-4 py-3 no-underline"
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
