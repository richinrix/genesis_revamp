import React, { useState, useEffect } from "react";
import "./CSS/map.css";
import axios from "axios";
import API from "./services/API";

function Map() {
  const [email, setEmail] = useState("");

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function emailSubmiteHandler(e) {
    e.preventDefault();
    if (validateEmail(email))
      axios.post(API.newsLetter, {
        data: [
          {
            email: email,
          },
        ],
      });
  }

  return (
    <div
      id="mapContainer"
      className="mapContainer flex flex-col pl-28 pt-12 md:justify-start md:items-start w-screen md:w-auto h-screen mt-3"
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
              placeholder={email === "" && "your@emailaddress.com"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              class="bton bton-white bton-animate"
              type="submit"
              onClick={(e) => emailSubmiteHandler(e)}
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
        <div className="mapMail flex flex-row">
          <i class="fa fa-envelope pt-1 pr-1.5 pl-64"></i>
          <p>info@genesismedia.com</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="mapBox mt-2 mb-3 md:mb-0 overflow-hidden"
      >
        <iframe
          className="gMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8776164898522!2d77.58905561389585!3d12.979678618215052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1672094c0ca7%3A0xffa0605b3255e77d!2sKarnataka%20Vidhana%20Soudha!5e0!3m2!1sen!2sin!4v1621493886894!5m2!1sen!2sin"
          width="1300"
          height="600"
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
        <p className="order-1 mb-5 pt-3 md:mt-0 text-lg md:text-base md:pb-2">
          XYZ, ZYX road, 2nd Main, Bangalore 560097, Karnataka, India
        </p>
        <div className="footerPhone order-2 md:none pl-0.5 flex flex-row">
          <i id="fPicon" class="fa fa-phone pt-1.5 pr-1.5 flex-shrink-0"></i>
          <p>+91 8792384161/ +91 9886031980</p>
        </div>
        <h2 className="md:hidden order-3 text-2xl mt-4">Say Hello!</h2>
        <p className=" md:hidden order-4 text-xl">
          We'd love to hear from you.
        </p>
        <p className="footerText md:mt-1 z-10 order-5 md:ml-80 md:pl-40 text-gray-600">
          Copyright © 2021, Genesis Media, All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Map;
