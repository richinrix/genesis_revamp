import React from "react";
import "../CSS/preloader.css";

function PreLoader() {
  return (
    <div id="preLoader" className="plContainer w-screen md:w-auto h-screen">
      <div class="ball ball-one"></div>
      <div class="ball ball-two"></div>
      <div class="ball ball-three"></div>
      <div class="ball ball-four"></div>
      <div class="shadow shadow-one"></div>
      <div class="shadow shadow-two"></div>
      <div class="shadow shadow-three"></div>
      <div class="shadow shadow-four"></div>
    </div>
  );
}

export default PreLoader;
