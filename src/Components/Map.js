import React, { useState } from "react";
import "./CSS/animation.css";
import "./CSS/component.css";
import axios from "axios";
import API from "./services/API";

function Map() {
  const [email, setEmail] = useState("");
  const [borderColor, setBorderColor] = useState("gray");
  const [isDesktop, setIsDesktop] = useState(false);
  const [newsTick, setNewsTick] = useState(false);

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
      setNewsTick(true);
      document.getElementById("newsForm").reset();
      // document.getElementById("nMail").placeholder = "your@email.here";
    } else {
      setBorderColor("red");
      alert("Invalid email!");
    }
  }

  window.addEventListener("scroll", checkPhone);
  if (isDesktop) {
    return (
      <div
        id="mapContainer"
        className="mapContainer bg-red-300  bottom-0 flex flex-col  pt-12 justify-center items-start w-screen h-auto mb-0"
      >
        <div className="upperDiv flex flex-row w-screen -ml-10 justify-between">
          <div className="leftDiv flex items-center mt-2">
            <div className="newsLetter flex flex-col  md:mt-10">
              <p className="font-montserrat text-lg md:mt-0 md:pt-0 pt-4 mb-2 text-white">
                Stay up to date, subscribe to our newsletter:
              </p>
              <div className="newsInputs flex mt-1  pt-2">
                <form id="newsForm">
                  <input
                    className="font-montserrat md:pb-2 pb-1 mb-4 bg-transparent border-none outline-none mr-8 text-2xl text-white"
                    type="email"
                    id="nMail"
                    placeholder={email === "" && "your@email.here"}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ borderColor: borderColor }}
                  />
                  <div className="flex flex-row mt-1">
                    <button
                      className="font-montserrat items-start btn btn-white uppercase no-underline	block font-medium"
                      type="submit"
                      onClick={(e) => newsEmailSubmiteHandler(e)}
                    >
                      Subscribe
                    </button>
                    {newsTick && (
                      <div className="tick ml-3 mb-1 text-green-700 text-3xl">
                        ✓
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="centerDivider min-h-full border-l mt-4 ml-24 -mb-2"></div>
          <div className="rightDiv mt-5">
            <div className="mapPhone flex text-lg text-white flex-row mb-3 pb-5">
              <i className="fa fa-phone pt-1.5 pr-1.5 text-white flex-shrink-0"></i>
              <p className="font-montserrat">
                <a href="tel:+918792384161">+91 8792384161</a> /{" "}
                <a href="tel:+917349571333">+91 7349571333</a>
              </p>
            </div>
            <a
              href="mailto:info@genesisdesign.in"
              className="mapPhone flex text-lg text-white mb-3 flex-row pb-5"
            >
              <i className="fa fa-envelope pt-1 pr-1.5"> </i>
              <p className="font-montserrat"> info@genesisdesign.in</p>
            </a>
            <p className="order-1 font-montserrat text-lg text-white md:pb-2 md:pr-0 pr-5">
              <i className="fa fa-map-marker pr-1.5 flex-shrink-0 text-white"></i>
              65, 1st Main, DB Sandra, Bengaluru-560097 <br />
            </p>
            <button className="bg-white  mt-2 mr-64 font-montserrat items-start btn btn-white uppercase no-underline	block font-medium">
              <a
                className="block font-montserrat w-full"
                target="_blank"
                rel="noreferrer"
                href="https://g.page/genesis-media-india?share"
              >
                Get Directions
              </a>
            </button>
          </div>
        </div>
        <p className="w-screen font-montserrat text-center mt-10 pb-2 text-gray-500">
          Genesis Media © 2021
        </p>
      </div>
    );
  } else {
    return (
      <div
        id="mapContainer"
        className="mapContainer bottom-0 flex mt-8 flex-col  w-screen mb-0"
      >
        <div className="socialMapContainer mr-4 mt-5 px-4">
          <div className="flex  flex-row w-full justify-center items-center text-white content-center m-0">
            <a
              href="https://www.instagram.com/genesisproduction.in/"
              className="social-icons  flex relative text-center text-white overflow-hidden items-center content-center no-underline"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram text-white"></i>
            </a>
            <a
              href="https://twitter.com/genesismedia_in"
              className="social-icons  flex relative text-center overflow-hidden items-center content-center no-underline"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/genesisproduction.in/"
              className="social-icons  flex relative text-center overflow-hidden items-center content-center no-underline"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/genesis-production/"
              className="social-icons  flex relative text-center overflow-hidden items-center content-center no-underline"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="newsLetter flex flex-col justify-center ml-5 md:ml-0">
          <p className="text-lg pt-4 text-white">
            Stay up to date, subscribe to our newsletter:
          </p>
          <div className="newsInputs flex flex-row justify-start pt-2">
            <form id="newsForm">
              <input
                className="md:pb-2 pb-1  mb-2 bg-transparent border-none outline-none text-2xl text-white"
                type="email"
                id="nMail"
                placeholder={email === "" && "your@email.here"}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: borderColor }}
              />
              <div className="flex flex-row">
                <button
                  className="font-montserrat items-start btn btn-white uppercase no-underline	block font-medium"
                  type="submit"
                  onClick={(e) => newsEmailSubmiteHandler(e)}
                >
                  Subscribe
                </button>
                {newsTick && (
                  <div className="tick ml-1 mb-1 text-green-700 text-3xl">
                    ✓
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="mapFooter flex flex-col justify-between pt-4 ">
          <p className="pl-2 text-base text-white pr-5 mb-5">
            <i className="fa fa-phone pr-1.5 flex-shrink-0 text-white"></i>
            <a href="tel:+918792384161">+91 8792384161</a> /{" "}
            <a href="tel:+917349571333">+91 7349571333</a>
          </p>
          <p className="pl-2 text-base text-white pr-5 mb-5 tracking-wide">
            <i className="fa fa-envelope pr-2 flex-shrink-0 text-white"></i>
            <a href="mailto:info@genesisdesign.in">info@genesisdesign.in</a>
          </p>
          <p className="text-base pl-2 text-white pr-5 mb-3">
            <i className="fa fa-map-marker pr-1.5 flex-shrink-0 text-white"></i>{" "}
            65, 1st Main, DB Sandra, Bengaluru-560097
          </p>
          <button className="bg-white ml-2 w-40 font-montserrat items-start btn btn-white uppercase no-underline	block font-medium">
            <a
              className="block font-montserrat w-full"
              target="_blank"
              rel="noreferrer"
              href="https://g.page/genesis-media-india?share"
            >
              Get Directions
            </a>
          </button>
          <p className="footerText text-center z-10 order-6 mb-5 text-gray-500">
            Genesis Media © 2021 | All Rights Reserved
          </p>
        </div>
      </div>
    );
  }
}

export default Map;
