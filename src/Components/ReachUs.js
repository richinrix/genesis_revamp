import React, { useState } from "react";
import "./CSS/component.css";

function ReachUs({ display, toggleReachUs }) {
  if (display)
    return (
      <div
        className="reachUsContainer flex justify-center items-center w-screen  fixed  h-screen "
        style={{ zIndex: "1000" }}
        onClick={toggleReachUs}
      >
        <div
          data-aos="zoom-in"
          className="reachCard bg-blue-900 w-auto md:rounded-xl p-10 md:pb-20 flex flex-col text-center"
          style={
            window.innerWidth > 767
              ? { marginRight: "10%", marginLeft: "10%" }
              : {}
          }
        >
          <h2 className="reachTitle font-lato text-2xl mb-6 md:mb-7 md:text-5xl text-white">
            Reach out to us:
          </h2>
          <a
            target="_blank"
            href="https://maps.app.goo.gl/XVRTVcHfyJtWAxbK9"
            className="reachAdress text-base md:text-lg text-white mb-2 md:mb-10"
          >
            <i class="fa fa-map-marker pr-1.5  text-white" />
            65, 1st Main, 3rd Cross, Deshbandunagara, DB Sandra, Chamundeshwari
            Layout Rd, Bengaluru, Karnataka-560097
          </a>
          <div className="mapBox">
            <iframe
              className="gMap ml-5 md:ml-0 rounded-lg"
              src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Genesis%20Media,%20Doddabommasandra+(Genesis%20Media)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              height={window.innerWidth > 767 ? "300" : "250"}
              width={window.innerWidth > 767 ? "70%" : "100%"}
              style={
                window.innerWidth > 767
                  ? { marginLeft: "15%", marginRight: "15%" }
                  : { marginLeft: "5%", marginRight: "5%" }
              }
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    );
  else return "";
}

export default ReachUs;
