import React from "react";
import "./CSS/homepage.css";
import logo from "../images/icons/logoDark.png";
import HomeParticles from "./Essentials/HomeParticles";

function Homepage() {
  function videoCard() {
    return (
      <video style={{ opacity: "70%", width: "120%" }} loop autoPlay muted>
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
      className="relative homeContainer w-screen md:w-auto h-screen top-0"
    >
      <div className="particleContainer">
        {/* <HomeParticles id="tsHome" /> */}
      </div>
      <div>{videoCard()}</div>
      <div className="logoHomeDark absolute md:hidden flex justify-center items-center w-screen mt-48">
        <img src={logo}></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "0",
          width: "100%",
          height: "100%",
        }}
        className=" absolute z-10 homeText text-white m-0 md:m-0 md:text-3xl  w-screen text-center flex flex-col justify-center items-center "
      >
        <h1>
          We are creative partners to ambitious brands <br />
          who want to challenge the ordinary
        </h1>
      </div>
    </div>
  );
}

export default Homepage;
