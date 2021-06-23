import React, { useState } from "react";
import "./CSS/animation.css";
import "./CSS/component.css";
import axios from "axios";
import API from "./services/API";

function Map() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [borderColor, setBorderColor] = useState("gray");
  const [subbed, setSubbed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  //Handy function to check if the device is a phone
  const checkPhone = () => {
    if (window.innerWidth > 767) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  //Email Validator
  function validateNewsEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //Newsletter Form submit Handler
  function newsEmailSubmiteHandler(e) {
    e.preventDefault();
    if (validateNewsEmail(email)) {
      setValidEmail(true);
      setBorderColor("black");
      e.target.value = null;
      axios.post(
        API.newsLetter,
        {
          data: [
            {
              Email: email,
              Date: new Date().toLocaleString(),
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: process.env.REACT_APP_NEWS_AUTH,
          },
        }
      );
      setBorderColor("green");
      alert("You are subscribed!");
      document.getElementById("newsForm").reset();
      // document.getElementById("nMail").placeholder = "your@email.here";
      setSubbed(true);
    } else {
      setBorderColor("red");
      alert("Invalid email!");
      setValidEmail(false);
      setSubbed(false);
    }
  }

  window.addEventListener("scroll", checkPhone);
  if (isDesktop) {
    return (
      <div
        id="mapContainer"
        className="mapContainer bottom-0 flex flex-col pt-12 justify-center items-start w-screen h-auto mb-0"
      >
        <div className="upperDiv flex flex-row w-screen justify-between">
          <div className="leftDiv">
            <div className="socialMapContainer">
              <div className="flex flex-row w-auto text-white content-start justify-start">
                <a
                  href="https://www.instagram.com/genesisproduction.in/"
                  className="social-icons flex relative text-center text-white overflow-hidden items-center content-center no-underline"
                  target="_blank"
                >
                  <i className="fa fa-instagram text-white"></i>
                </a>
                <a
                  href="https://twitter.com/genesismedia_in"
                  className="social-icons  flex relative text-center overflow-hidden items-center content-center no-underline"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/genesisproduction.in/"
                  className="social-icons  flex relative text-center overflow-hidden items-center content-center no-underline"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/genesis-production/"
                  className="social-icons  flex relative text-center overflow-hidden items-center content-center no-underline"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="newsLetter flex flex-col  md:mt-3">
              <p className="text-lg md:mt-0 md:pt-0 pt-4 text-white">
                Stay up to date, subscribe to our newsletter:
              </p>
              <div className="newsInputs flex  pt-2">
                <form id="newsForm">
                  <input
                    className="md:pb-2 pb-1  mb-2 bg-transparent border-none outline-none mr-8 text-2xl text-white"
                    type="email"
                    id="nMail"
                    placeholder={email === "" && "your@email.here"}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ borderColor: borderColor }}
                  />
                  <button
                    className="bton bton-white bton-animate uppercase no-underline	inline-block "
                    type="submit"
                    onClick={(e) => newsEmailSubmiteHandler(e)}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="centerDivider min-h-full border-l mb-4"></div>
          <div className="rightDiv mt-5">
            <div className="mapPhone flex text-lg text-white flex-row mb-3 pb-5">
              <i className="fa fa-phone pt-1.5 pr-1.5 text-white flex-shrink-0"></i>
              <p>
                <a href="tel:+918792384161">+91 8792384161</a> /{" "}
                <a href="tel:+917349571333">+91 7349571333</a>
              </p>
            </div>
            <a
              href="mailto:info@genesismedia.com"
              className="mapPhone flex text-lg text-white mb-3 flex-row pb-5"
            >
              <i className="fa fa-envelope pt-1 pr-1.5"> </i>
              <p> info@genesismedia.com</p>
            </a>
            <p className="order-1 text-lg text-white md:pb-2 md:pr-0 pr-5">
              <i class="fa fa-map-marker pr-1.5 flex-shrink-0 text-white"></i>
              65, 1st Main, DB Sandra, Bengaluru-560097
            </p>
          </div>
        </div>
        <p className="w-screen text-center mt-10 pb-2 text-gray-500">
          Made in-house with <span className="text-sm">❤️</span> | Genesis Media
          © 2021
        </p>
      </div>
    );
  } else {
    return (
      <div
        id="mapContainer"
        className="mapContainer bottom-0 flex mt-8 flex-col  w-screen mb-0"
      >
        <div className="socialMapContainer mt-5 ">
          <div className="flex flex-row w-screen justify-center items-center text-white content-center m-0">
            <a
              href="https://www.instagram.com/genesisproduction.in/"
              className="social-icons flex relative text-center text-white overflow-hidden items-center content-center no-underline"
              target="_blank"
            >
              <i className="fa fa-instagram text-white"></i>
            </a>
            <a
              href="https://twitter.com/genesismedia_in"
              className="social-icons  flex relative text-center overflow-hidden items-center content-center no-underline"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/genesisproduction.in/"
              className="social-icons  flex relative text-center overflow-hidden items-center content-center no-underline"
              target="_blank"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/genesis-production/"
              className="social-icons  flex relative text-center overflow-hidden items-center content-center no-underline"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="newsLetter flex flex-col justify-center ml-5 md:ml-0">
          <p className="text-lg pt-4 text-white">
            Stay up to date, subscribe to our newsletter:
          </p>
          <div className="newsInputs flex flex-row pt-2">
            <form id="newsForm">
              <input
                className="md:pb-2 pb-1  mb-2 bg-transparent border-none outline-none mr-8 text-2xl text-white"
                type="email"
                id="nMail"
                placeholder={email === "" && "your@email.here"}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: borderColor }}
              />
              <button
                className="bton bton-white bton-animate uppercase no-underline	inline-block "
                type="submit"
                onClick={(e) => newsEmailSubmiteHandler(e)}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mapFooter flex flex-col justify-between pt-4 ">
          <p className="order-1 text-base text-center text-white pr-5 mb-3">
            <i class="fa fa-map-marker pr-1.5 flex-shrink-0text-white"></i> 65,
            1st Main, DB Sandra, Bengaluru-560097
          </p>
          <p className="order-1 text-center text-base text-white pr-5 mb-10">
            <i class="fa fa-phone pr-1.5 flex-shrink-0 text-white"></i>
            <a href="tel:+918792384161">+91 8792384161</a> /{" "}
            <a href="tel:+917349571333">+91 7349571333</a>
          </p>

          <p className="order-5 text-lg text-white text-center -ml-4 -mb-5">
            Made in-house with <span className="text-lg">❤️</span>
          </p>
          <p className="footerText text-center  mt-4 z-10 order-6 mb-5 text-gray-500">
            Genesis Media © 2021, All Rights Reserved
          </p>
        </div>
      </div>
    );
  }
}

export default Map;
