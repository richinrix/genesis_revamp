import React from "react";

function Homepage({ toggleLoading }) {
  return (
    <>
      <div
        id="homeContainer"
        className="flex relative homeContainer w-screen  h-screen top-0"
      >
        <video
          className="absolute block w-100 md:w-screen h-screen md:opacity-100 opacity-100 md:object-cover object-fill"
          loop
          autoPlay
          muted
          onLoadedData={toggleLoading}
        >
          <source
            // Changing source of video depending on size of the screen
            src={
              window.innerWidth > 700
                ? "https://api.onedrive.com/v1.0/shares/u!aHR0cHM6Ly8xZHJ2Lm1zL3YvcyFBb3FPVmtqSmQwMzNibHNZRHRYdEtZMGlOeVE_ZT1KeW51a3I/root/content"
                : "https://api.onedrive.com/v1.0/shares/u!aHR0cHM6Ly8xZHJ2Lm1zL3YvcyFBb3FPVmtqSmQwMzNiM3lfa09EVlhzeDVuQ00_ZT1ZMmVOVXY/root/content"
            }
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}

export default Homepage;
