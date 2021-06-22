import React, { useState } from "react";
import "./CSS/animation.css";
import "./CSS/component.css";
import axios from "axios";
import API from "./services/API";

function Map() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [borderColor, setBorderColor] = useState("black");
  const [subbed, setSubbed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  //Handy function to check if the device is a phone
  const checkPhone = () => {
    if (window.innerWidth > 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
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
      document.getElementById("newsForm").reset();
      // document.getElementById("nMail").placeholder = "your@email.here";
      setSubbed(true);
    } else {
      setBorderColor("red");
      setValidEmail(false);
      setSubbed(false);
    }
  }

  window.addEventListener("scroll", checkPhone);
  return (
    <div
      id="mapContainer"
      className="mapContainer bottom-0 flex md:grid md:mt-0 mt-8 flex-col pl-28 md:pt-12 md:justify-start md:items-start w-screen md:w-auto md:h-auto mb-0"
    >
      <div className="socialMapContainer md:mt-0 mt-5 md:ml-0 ml-5 ">
        <div className="iconMapBar flex flex-row w-screen items-center text-white content-center m-0">
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
            {!validEmail && (
              <h6
                className="absolute text-lg ml-36 mt-2.5 md:ml-2 md:top-20 "
                style={{ color: "red", border: "2" }}
              >
                Invalid e-mail
              </h6>
            )}
            {subbed && (
              <h6
                className="subGreen absolute mt-2.5 md:ml-2 md:top-20 "
                style={{ color: "green" }}
              >
                You are now subscribed!
              </h6>
            )}
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
      <div className="preMap absolute flex-col text-left content-between right-20 mt-10">
        <div className="mapPhone flex text-lg text-white flex-row mb-3">
          <i className="fa fa-phone pt-1.5 pr-1.5 text-white flex-shrink-0"></i>
          <p>+91 8792384161/ +91 7349571333</p>
        </div>

        <a
          href="mailto:info@genesismedia.com"
          className="mapPhone flex text-lg text-white mb-3 flex-row"
        >
          <i className="fa fa-envelope pt-1 pr-1.5"> </i>
          <p> info@genesismedia.com</p>
        </a>
        <p className="order-1 md:pt-3 md:-mt-2 text-lg text-white md:pb-2 md:pr-0 pr-5">
          <i class="fa fa-map-marker pr-1.5 flex-shrink-0 text-white"></i>
          65, 1st Main, DB Sandra, Bengaluru-560097
        </p>
      </div>
      {/* <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="mapBox md:mt-2 mb-3 md:mb-0 overflow-hidden"
      >
        <iframe
          className="gMap ml-3 md:ml-0 "
          src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Genesis%20Media,%20Doddabommasandra+(Genesis%20Media)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          height={isMobile ? "300" : "275"}
          width={isMobile ? "1260" : "400"}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div> */}
      <div className="mapFooter flex flex-col md:flex-row justify-between pt-4 ">
        <p className="order-1 md:hidden md:pt-3 md:-mt-2 text-base text-white md:pb-2 md:pr-0 pr-5">
          <i class="fa fa-map-marker pr-1.5 flex-shrink-0 text-white"></i>
          65, 1st Main, DB Sandra, Bengaluru-560097
        </p>
        <div className="order-2 md:ml-0 ml-4 text-center  md:hidden pl-0.5 mb-8 flex z-50 flex-row text-white ">
          <i
            id="fPicon"
            className="fa fa-phone mt-3 md:mt-0  pt-1.5 pr-1.5 flex-shrink-0"
          ></i>
          <p className="text-lg mt-3  md:mt-0 md:text-base">
            +91 8792384161/ +91 7349571333
          </p>
        </div>
        <p className="order-5 md:hidden text-lg text-white text-center -ml-4 -mb-5">
          Made in-house with <span className="text-lg">❤️</span>
        </p>
        <p className="footerText md:hidden md:w-half text-center  mt-4 md:mt-1 z-10 order-6 md:ml-24 mb-5 md:mb-0 text-gray-500">
          Genesis Media © 2021, All Rights Reserved
        </p>
      </div>
      <p className="footerText hidden md:block md:w-screen text-center mt-4 md:mt-1 z-10 order-6 pb-2 md:mb-0 text-gray-500 mb-3 -ml-20">
        Made in-house with <span className="text-sm">❤️</span> | Genesis Media ©
        2021
      </p>
    </div>
  );
}

export default Map;
