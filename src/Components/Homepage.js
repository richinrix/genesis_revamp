import React, { useState, useEffect } from "react";
// import HomeParticles from "./Essentials/HomeParticles";
import PreLoader from "./Essentials/PreLoader";

function Homepage({ toggleLoading }) {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
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
          className="absolute block w-100 md:w-screen h-screen md:opacity-90 opacity-100 md:object-cover object-fill"
          loop
          autoPlay
          muted
          onLoadedData={toggleLoading}
        >
          <source
            src={
              window.innerWidth > 700
                ? "https://res.cloudinary.com/dmv4z5mmv/video/upload/v1625332241/homepage%20video/homepage_desktop_video_hp97gv.mp4"
                : "https://res.cloudinary.com/dmv4z5mmv/video/upload/v1625332240/homepage%20video/homepage_phone_video_bkqlaf.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}

export default Homepage;
