import React from "react";
// import HomeParticles from "./Essentials/HomeParticles";

function Homepage() {
  return (
    <div
      id="homeContainer"
      className="flex relative homeContainer w-screen  h-screen top-0"
    >
      {/* Enable the following div and disable video for the particles */}
      {/* <div className="particleContainer">
        <HomeParticles id="tsHome" />
      </div> */}

      <video
        className="absolute block w-100 md:w-screen h-screen md:opacity-90 opacity-90 md:object-cover object-fill"
        loop
        autoPlay
        muted
      >
        <source
          src={
            window.innerWidth > 700
              ? "https://res.cloudinary.com/myles27/video/upload/v1624293786/Genesis%20Revamp/Showreel_r5cmzt.mp4"
              : "https://res.cloudinary.com/myles27/video/upload/v1624293769/Genesis%20Revamp/Showreel_mob_ezjrxh.mp4"
          }
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Homepage;
