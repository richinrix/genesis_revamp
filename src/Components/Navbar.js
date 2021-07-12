import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import logoLite from "../images/icons/logoLite.png";
import logoDark from "../images/icons/logoDark.png";
import logoSmall from "../images/icons/logo-small.png";
import "./CSS/component.css";

function Navbar() {
  const [scrollDetect, setScrollDetect] = useState(false);
  const screenWidth = useState(window.innerWidth);

  //Function to uncheck navCheckbox
  function uncheckNav() {
    document.getElementById("menu-btn").checked = false;
  }

  // Function to detect scrolling and change theme based on that
  const handleScroll = () => {
    if (screenWidth > 500) {
      if (window.scrollY > 100) {
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
    <div className="navContainer">
      <nav
        className={
          scrollDetect
            ? "nav scrol fixed flex flex-wrap items-center justify-between px-4 top-0 w-full z-20 navLiteBack"
            : "nav scrol fixed flex flex-wrap items-center justify-between px-4 top-0 w-full z-20"
        }
      >
        <div className="flex flex-no-shrink items-center mr-6 pl-0 md:pl-2">
          <a className="navLogo self-center" href="/#">
            {window.innerWidth > 767 ? (
              <img
                className=" md:block"
                src={scrollDetect ? logoLite : logoDark}
                alt=""
                srcset=""
                style={{ height: "60px", width: "160px" }}
              />
            ) : (
              <img
                className=" md:block"
                src={scrollDetect ? logoSmall : logoDark}
                alt=""
                srcset=""
                style={
                  scrollDetect
                    ? { height: "60px", width: "60px" }
                    : { height: "60px", width: "160px" }
                }
              />
            )}
          </a>
        </div>

        <input className="menu-btn hidden " type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 my-0 relative select-none"
          for="menu-btn"
        >
          <span className="navicon flex items-center relative"></span>
        </label>

        <ul className="navList menu md:border-none font-normal flex mr-5 md:mt-0 md:my-2 mt-2 ml-5 items-center justify-end list-none m-0 p-0 w-screen md:w-auto  md:bg-transparent">
          <li className="border-none text-center">
            <ScrollIntoView
              selector="#services"
              onClick={uncheckNav}
              className=" block md:inline-block  py-3 no-underline border-none text-black"
            >
              <a className="cursor-pointer">Services</a>
            </ScrollIntoView>
          </li>

          <li className="border-none text-center">
            <ScrollIntoView
              selector="#teams"
              className="block md:inline-block  py-3 no-underline border-none text-black"
              onClick={uncheckNav}
            >
              <a className="cursor-pointer">Team</a>
            </ScrollIntoView>
          </li>

          <li className="border-none text-center">
            <ScrollIntoView
              selector="#contactContainer"
              activeClassName="selected"
              onClick={uncheckNav}
              className="block md:inline-block  py-3 no-underline border-none text-black"
            >
              <a className="cursor-pointer">Contact</a>
            </ScrollIntoView>
          </li>

          <li className="navBlog border-none text-center">
            <Link
              to="/blog"
              target="_blank"
              onClick={uncheckNav}
              className="block md:inline-block py-3 no-underline border-none text-black"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
