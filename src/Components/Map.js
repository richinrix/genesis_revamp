import React from "react";
import "./CSS/map.css";

function Map() {
  return (
    <div className="mapContainer flex flex-col pl-32 pt-12 justify-start items-start w-auto h-screen">
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="800"
        data-aos-offset="200"
        className="newsLetter flex flex-col"
      >
        <p>Stay up to date, subscribe to our newsletter.</p>
        <div className="newsInputs flex flex-row pt-2">
          <input
            className="pb-1 mb-2"
            type="email"
            id="nMail"
            placeholder="your@emailaddress.com"
          />
          <button class="btn btn-1 hover-filled-opacity">
            <span>Subscribe</span>
          </button>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="preMap flex flex-row content-between mt-12"
      >
        <div className="mapPhone flex flex-row">
          <i class="fa fa-phone pt-1.5 pr-1.5 flex-shrink-0"></i>
          <p>+91 8792384161/ +91 9886031980</p>
        </div>
        <div className="mapMail flex flex-row">
          <i class="fa fa-envelope pt-1 pr-1.5"></i>
          <p>info@genesismedia.com</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="mapBox mt-2 overflow-hidden"
      >
        <span>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="1200"
                height="268"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Vidhana%20Soudha&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://putlocker-is.org"></a>
              <br />
            </div>
          </div>
        </span>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        data-aos-offset="-300"
        className="mapFooter flex flex-row justify-between pt-4"
      >
        <p>XYZ, ZYX road, 2nd Main, Bangalore 560097, Karnataka, India</p>
        <p className="ml-52 text-gray-600">
          Copyright © 2021, Genesis Media, All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Map;
