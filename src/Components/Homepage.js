import React, { useEffect, useState } from "react";
import "./CSS/homepage.css";
import HomeParticles from "./Essentials/HomeParticles";

function Homepage() {
  return (
    <div
      id="homeContainer"
      className="homeContainer w-screen md:w-auto h-screen"
    >
      {/* <HomeParticles id="tsHome" /> */}
      <div className="homeText text-white m-0 md:m-0 md:text-2xl h-screen w-screen text-center flex justify-center items-center">
        <h1>
          We are creative partners to ambitious brands <br />
          who want to challenge the ordinary
        </h1>
      </div>
    </div>
  );
}

export default Homepage;
