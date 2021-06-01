import React from "react";
import "../CSS/preloader.css";

function PreLoader() {
  return (
    <div className="h-screen flex items-center">
      <div className="plContainer md:mx-auto  md:pl-0 ml-20 pl-2 my-auto">
        <div className="ball ball-one"></div>
        <div className="ball ball-two"></div>
        <div className="ball ball-three"></div>
        <div className="ball ball-four"></div>
        <div className="shadow shadow-one"></div>
        <div className="shadow shadow-two"></div>
        <div className="shadow shadow-three"></div>
        <div className="shadow shadow-four"></div>
      </div>
    </div>
  );
}

export default PreLoader;
