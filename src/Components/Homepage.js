import React from "react";
import "./CSS/homepage.css";
import logo from "../images/icons/logoDark.png";
// import HomeParticles from "./Essentials/HomeParticles";

function Homepage() {
  return (
    <div
      id="homeContainer"
      className="flex md:relative homeContainer w-screen  h-screen top-0"
    >
      {/* <div className="particleContainer">
        <HomeParticles id="tsHome" />
      </div> */}
      <video
        className="absolute hidden md:block w-screen h-screen opacity-70 object-cover"
        loop
        autoPlay
        muted
      >
        <source
          src="https://res.cloudinary.com/zarry/video/upload/v1622632388/Genesis%20Revamp/Showreel.mp4"
          type="video/mp4"
        />
      </video>
      <div className="logoHomeDark absolute md:hidden flex justify-center items-center w-screen mt-48">
        <img src={logo}></img>
      </div>
      {/* <div className="z-10 flex md:absolute homeText text-white m-0 md:text-2xl text-lg w-screen text-center md:text-right items-center justify-center md:justify-start h-screen ">
        <h1 className="md:h-screen md:text-left md:pt-52 md:pl-9">
          We are creative partners to ambitious brands <br />
          who want to challenge the ordinary
        </h1>
      </div> */}
    </div>
  );
}

export default Homepage;
