import React from "react";
import "../CSS/preloader.css";

function PreLoader() {
  return (
    <div className="h-screen flex items-center">
      <div className="plContainer md:mx-auto  md:pl-0 ml-20 pl-2 my-auto">
        <div class="ball ball-one"></div>
        <div class="ball ball-two"></div>
        <div class="ball ball-three"></div>
        <div class="ball ball-four"></div>
        <div class="shadow shadow-one"></div>
        <div class="shadow shadow-two"></div>
        <div class="shadow shadow-three"></div>
        <div class="shadow shadow-four"></div>
      </div>
    </div>
  );
}

export default PreLoader;
