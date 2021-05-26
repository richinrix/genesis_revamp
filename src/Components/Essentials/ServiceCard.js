import React, { useState, useEffect } from "react";
import handleViewport from "react-in-viewport";
// image
import linesImg from "../../images/icons/services-line-and-dots.png";
import { Parallax } from "react-scroll-parallax";

import "../../App.css";
const ServiceCard = (props) => {
  const { inViewport, forwardedRef, service, index, screenWidth } = props;
  let imagePos = index % 2 === 0 ? "right" : "left";
  let descriptionClassname = "flex  flex-col-reverse mt-5 justify-center ";
  if (imagePos === "right") descriptionClassname += " md:flex-row";
  else descriptionClassname += " md:flex-row-reverse";
  let headingClassname = "mx-auto  md:mt-10 text-center font-plantc text-5xl ";

  // offset vars ......
  const [servicePointOff, setServicePointOff] = useState("00");
  const [serviceDescOff, setServiceDescOff] = useState("200");
  const [yellowOff, setYellowOff] = useState("0");

  // aos styling settings
  let yellowRect = {
    duration: "500",
    offset: screenWidth > 650 ? "250" : "50",
    offset2: "400",
    easing: "ease-in",
  };
  let servicePoint = {
    duration: "600",
    offset: screenWidth > 650 ? "200" : "100",
    easing: "linear",
  };
  let serviceDesc = {
    offset: screenWidth > 650 ? "250" : "150",
    duration: "1200",
  };
  useEffect(() => {}, [screenWidth]);
  // function to400() {
  //   console.log(index, "changed to 400");
  //   setYellowOff("400");
  //   setServiceDescOff("200");
  //   setServicePointOff("100");
  // }
  // function to0() {
  //   console.log(index, "changed to 0");
  //   setYellowOff("0");
  //   setServiceDescOff("0");
  //   setServicePointOff("0");
  // }

  // useEffect(() => {
  //   inViewport ? setTimeout(to400, 750) : setTimeout(to0, 1000);
  // }, [inViewport]);

  function yellowRectangle(floatPos, phone = false) {
    let classname = "float-" + floatPos;
    // classname += floatPos === "left" ? " ml-10 " : " mr-10 ";
    const slideIn = floatPos === "right" ? "slide-left" : "slide-right";
    let style = {
      // backgroundColor: "#ffd805",
      backgroundColor: "#FFE450",
    };
    if (!phone)
      return (
        <div
          id="yellowRectangle"
          // data-aos={slideIn}
          // data-aos-easing={yellowRect.easing}
          // data-aos-duration={yellowRect.duration}
          // data-aos-offset={yellowOff}
          className={classname}
          style={style}
        ></div>
      );
    else
      return (
        <div
          id="yellowRectangle"
          data-aos={slideIn}
          data-aos-easing={yellowRect.easing}
          data-aos-duration={yellowRect.duration}
          data-aos-offset={yellowRect.offset2}
          className={classname}
          style={style}
        ></div>
      );
  }
  function imageSection(image_path, floatPos, steps) {
    const style = {
      backgroundImage: `url('${image_path}')`,
      backgroundRepeat: "no-repeat",
    };
    let containerClassname = "relative  ";
    containerClassname += steps > 5 ? " mt-14 " : " ";
    if (floatPos === "right") containerClassname += " md:mr-20";
    else containerClassname += " md:ml-20";

    let imageClassname = "absolute  z-10 ";
    if (floatPos === "right") imageClassname += "md:right-24 right-6 top-10 ";
    else imageClassname += "md:left-24 left-6  md:top-16 top-10 ";

    const xvalues = floatPos === "left" ? [-20, 5] : [20, -5];
    return (
      <>
        {" "}
        <div className={containerClassname}>
          <Parallax x={xvalues} className="lg:block hidden">
            {yellowRectangle(floatPos)}
          </Parallax>
          {/* <div x={xvalues} className="lg:block hidden">
            {yellowRectangle(floatPos)}
          </div> */}
          <div className="lg:hidden block">
            {yellowRectangle(floatPos, true)}
          </div>
          <div
            id="servicesImage"
            className={imageClassname}
            style={style}
          ></div>
        </div>
      </>
    );
  }
  function description(desc) {
    return (
      <div className="font-plantc text-2xl mx-auto text-gray-500 leading-7">
        {desc}
      </div>
    );
  }
  function servicePoints(step, index, length) {
    let className = "pl-5 font-helvetica ";
    if (length > 5) className += " lg:py-1.5 py-2 ";
    else className += "lg:py-2.5 py-2";

    return (
      <div>
        <img src={linesImg} alt="" className="absolute" />
        <>
          <li
            className={className}
            data-aos="slide-up"
            data-aos-easing={servicePoint.easing}
            data-aos-duration={servicePoint.duration}
            data-aos-offset={servicePointOff}
            key={index}
          >
            {step}
          </li>
        </>
      </div>
    );
  }
  function textSection(desc, steps, position) {
    let textSlideDirection =
      position === "right" ? "slide-right" : "slide-left";
    let textSectionClassname =
      " flex-col content-center items-center h-min my-auto   mx-auto  md:w-1/2  ";
    return (
      <div className={textSectionClassname}>
        {" "}
        <div
          className="w-11/12 mx-auto  "
          data-aos={textSlideDirection}
          data-aos-offset={serviceDescOff}
          data-aos-duration={serviceDesc.duration}
        >
          {description(desc)}
        </div>
        <div className="flex  my-auto pt-5">
          <ul className="ml-4 my-auto">
            {steps.map((step, index) =>
              servicePoints(step, index, steps.length)
            )}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="md:h-screen h-full   " id="proximity-snap">
        <div
          className="mx-auto p-5 my-auto"
          // style={{ border: "2px solid white" }}
        >
          <div className={headingClassname}>
            <h2>{service.heading}</h2>
          </div>
          <div className={descriptionClassname}>
            <div className="lg:w-3/6 flex content-center">
              {textSection(service.description, service.steps, imagePos)}
            </div>
            <div className="md:w-4/6 lg:mb-0 mb-4" ref={forwardedRef}>
              {imageSection(service.image, imagePos, service.steps.length)}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

// for checkin if its in viewport
const ViewportBlock = handleViewport(ServiceCard);
const entered = () => {
  console.log("entered");
};
const ServiceCardComp = (props) => (
  <ViewportBlock
    // onEnterViewport={}
    // onLeaveViewport={}
    service={props.service}
    index={props.index}
    onEnter={entered}
  />
);

export default ServiceCardComp;
