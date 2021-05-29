import React, { useState, useEffect } from "react";
import "./CSS/map.css";
import axios from "axios";
import API from "./services/API";

function Map() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [borderColor, setBorderColor] = useState("black");
  const [subbed, setSubbed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkPhone = () => {
    if (window.innerWidth > 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  function validateNewsEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function newsEmailSubmiteHandler(e) {
    e.preventDefault();
    if (validateNewsEmail(email)) {
      setValidEmail(true);
      setBorderColor("black");
      e.target.value = null;
      axios.post(API.newsLetter, {
        data: [
          {
            Email: email,
            Date: new Date().toLocaleString(),
          },
        ],
      });
      setBorderColor("green");
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
      className="mapContainer flex flex-col pl-28 pt-12 md:justify-start md:items-start w-screen md:w-auto h-auto mt-3 mb-3"
    >
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="800"
        data-aos-offset="200"
        className="newsLetter flex flex-col mt-12"
      >
        <p className="text-lg">Stay up to date, subscribe to our newsletter:</p>
        <div className="newsInputs flex flex-row pt-2">
          <form>
            <input
              className="pb-1 mb-2"
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
              class="bton bton-white bton-animate"
              type="submit"
              onClick={(e) => newsEmailSubmiteHandler(e)}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="preMap flex flex-row content-between mt-14"
      >
        <div className="mapPhone flex flex-row">
          <i class="fa fa-phone pt-1.5 pr-1.5 flex-shrink-0"></i>
          <p>+91 8792384161/ +91 9886031980</p>
        </div>
        <a
          className="mapMail flex flex-row"
          href="mailto:info@genesismedia.com"
        >
          <i class="fa fa-envelope pt-1 pr-1.5 pl-64"></i>
          <p>info@genesismedia.com</p>
        </a>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="mapBox mt-2 mb-3 md:mb-0 overflow-hidden"
      >
        <iframe
          className="gMap ml-3 md:ml-0"
          src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Genesis%20Media,%20Doddabommasandra+(Genesis%20Media)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width={isMobile ? "1300" : "400"}
          height="300"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="300"
        data-aos-offset="-300"
        className="mapFooter flex flex-col md:flex-row justify-between pt-4 "
      >
        <p className="order-1 mb-5 pt-3 md:-mt-2 text-base md:text-base md:pb-2">
          65, 1st Main, 3rd Cross Road, Deshbandunagara, DB Sandra,
          Bengaluru-560097, Karnataka, India
        </p>
        <div className="footerPhone order-2 md:none pl-0.5 flex flex-row">
          <i
            id="fPicon"
            class="fa fa-phone mt-3 md:mt-0  pt-1.5 pr-1.5 flex-shrink-0"
          ></i>
          <p className="text-lg mt-3 md:mt-0 md:text-base">
            +91 8792384161/ +91 9886031980
          </p>
        </div>
        <h2 className="md:hidden order-3 text-xl mt-4">Say Hello!</h2>
        <p className=" md:hidden order-4 text-lg">
          We'd love to hear from you.
        </p>
        <p className="footerText md:mt-1 z-10 order-5 md:ml-32 md:pl-20 text-gray-700">
          Copyright © 2021, Genesis Media, All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Map;
