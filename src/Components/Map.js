import React from "react";
import "./CSS/map.css";

function Map() {
  return (
    <div
      id="mapContainer"
      className="mapContainer flex flex-col pl-32 pt-12 justify-start items-start w-auto h-screen"
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
              placeholder="your@emailaddress.com"
            />
            <button class="bton bton-white bton-animate" type="submit">
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
        className="mapBox mt-2 overflow-hidden"
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
        className="mapFooter flex flex-row justify-between pt-4 pb-12"
      >
        <p>XYZ, ZYX road, 2nd Main, Bangalore 560097, Karnataka, India</p>
        <p className="ml-80 pl-40 text-gray-600">
          Copyright © 2021, Genesis Media, All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Map;
