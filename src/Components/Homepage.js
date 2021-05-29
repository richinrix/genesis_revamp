import React from "react";
import "./CSS/homepage.css";
import logo from "../images/icons/logoDark.png";
import HomeParticles from "./Essentials/HomeParticles";

function Homepage() {
  return (
    <div
      id="homeContainer"
      className="homeContainer w-screen md:w-auto h-screen"
    >
      <div className="particleContainer">
        <HomeParticles id="tsHome" />
      </div>
      <div className="logoHomeDark absolute md:hidden flex justify-center items-center w-screen mt-48">
        <img src={logo}></img>
      </div>
      <div className="homeText text-white m-0 md:m-0 md:text-2xl h-screen w-screen text-center flex flex-col justify-center items-center pt-10 md:pt-0">
        <h1>
          We are creative partners to ambitious brands <br />
          who want to challenge the ordinary
        </h1>
      </div>
    </div>
  );
}

export default Homepage;
