import React from "react";
import "../CSS/preloader.css";

function PreLoader() {
  return (
    <div
      className="h-screen fixed w-screen  bg-black    flex justify-center items-center"
      style={{ zIndex: "500000" }}
    >
      {/* <div classNameName="plContainer pl-5 my-auto">
        <div classNameName="ball ball-one"></div>
        <div classNameName="ball ball-two"></div>
        <div classNameName="ball ball-three"></div>
        <div classNameName="ball ball-four"></div>
        <div classNameName="shadow shadow-one"></div>
        <div classNameName="shadow shadow-two"></div>
        <div classNameName="shadow shadow-three"></div>
        <div classNameName="shadow shadow-four"></div>
      </div> */}
      <div className="frame">
        <div className="circle"></div>
        <div className="line left"></div>
        <div className="line right"></div>
        <div className="bracket left"></div>
        <div className="bracket right"></div>
        <div className="small top">
          <span className="first-letter">d</span>esign.{" "}
          <span className="first-letter">d</span>evelop.{" "}
          <span className="first-letter">e</span>volve.{" "}
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
