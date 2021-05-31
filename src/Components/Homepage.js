import React from "react";
import "./CSS/homepage.css";
import logo from "../images/icons/logoDark.png";
// import HomeParticles from "./Essentials/HomeParticles";

function Homepage() {
  function videoCard() {
    return (
      <video className="opacity-75" loop autoPlay muted>
        <source
          src="https://res.cloudinary.com/genesiscloudimages/video/upload/v1622463883/Genesis-media/sprint-mask-ad_qr7jzn.mp4"
          type="video/mp4"
        />
      </video>
    );
  }
  return (
    <div
      id="homeContainer"
      className="flex md:relative homeContainer w-screen md:w-auto h-screen top-0"
    >
      {/* <div className="particleContainer">
        <HomeParticles id="tsHome" />
      </div> */}
      <div className="absolute -top-24 hidden md:block">{videoCard()}</div>
      <div className="logoHomeDark absolute md:hidden flex justify-center items-center w-screen mt-48">
        <img src={logo}></img>
      </div>
      <div className="z-10 flex md:absolute homeText text-white m-0 md:text-2xl text-lg w-screen text-center md:text-right items-center justify-center md:justify-start h-screen ">
        <h1 className="md:h-screen md:text-left md:pt-52 md:pl-9">
          We are creative partners to ambitious brands <br />
          who want to challenge the ordinary
        </h1>
      </div>
    </div>
  );
}

export default Homepage;
