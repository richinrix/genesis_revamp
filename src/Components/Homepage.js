import React, { useState, useEffect } from "react";
// import HomeParticles from "./Essentials/HomeParticles";
import PreLoader from "./Essentials/PreLoader";

function Homepage({ toggleLoading }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 800);
  }, []);
  return (
    <>
      {/* {loading && <PreLoader />} */}

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
          onLoadedData={toggleLoading}
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
    </>
  );
}

export default Homepage;
