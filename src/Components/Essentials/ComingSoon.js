import React from "react";
import ParticleAnimation from "./ParticlesAnimation";
export default function ComingSoon() {
  function dashedAnimation() {
    return (
      <div className="dash-container my-10 z-10">
        <div className="dash uno"></div>
        <div className="dash dos"></div>
        <div className="dash tres"></div>
        <div className="dash cuatro"></div>
      </div>
    );
  }
  return (
    <>
      <div className="h-screen  justify-center items-center text-center flex md:flex-row flex-col  comingSoonContainer">
        <h2 className="mx-12 px-12 py-5 flex  md:items-center items-end  text-white opacity-60 font-poppins font-semibold z-10">
          <span className="md:text-6xl text-5xl font-bold px-0 mx-0">C</span>
          <span className="md:text-5xl text-3xl">oming </span>
          <span className="md:text-5xl text-3xl px-0 md:ml-10 ml-2">s</span>
          <span className="md:text-5xl text-3xl ">oon</span>
        </h2>
        {dashedAnimation()}
        {}
      </div>
      <ParticleAnimation />
    </>
  );
}
