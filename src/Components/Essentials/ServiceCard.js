import React, { useState, useEffect } from "react";
import handleViewport from "react-in-viewport";
// image
import linesImg from "../../images/icons/services-line-and-dots.png";
// other modules
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

  function yellowRectangle(floatPos, phone = false) {
    let classname = "float-";
    //  + floatPos;
    classname += floatPos === "left" ? " ml-10 " : " mr-10 ";
    const slideIn = floatPos === "right" ? "slide-left" : "slide-right";

    let floatDirection = floatPos === "right" ? "right" : "left";
    let style = {
      // backgroundColor: "#ffd805",
      backgroundColor: "#FFE450",
      float: floatDirection,
    };
    if (!phone) return <div id="yellowRectangle" style={style}></div>;
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
  function iframeYT(video, classname, xval, xvalPh) {
    const src = video + "?controls=0&?autoplay=1&mute=1";

    return (
      <>
        <Parallax x={xval} className=" md:block hidden">
          <iframe
            id="servicesImage"
            className={classname}
            src={src}
            frameborder="0"
            allow=" encrypted-media"
            allowfullscreen
          ></iframe>
        </Parallax>
        <Parallax x={xvalPh} className=" md:hidden block">
          <iframe
            id="servicesImage"
            className={classname}
            src={src}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </Parallax>
      </>
    );
  }
  function imageSection(image_path, video, floatPos, steps) {
    const imageStyle = {
      backgroundImage: `url('${image_path}')`,
      backgroundRepeat: "no-repeat",
    };
    let containerClassname = "relative  ";
    containerClassname += steps > 5 ? " md:mt-14 " : " ";
    if (floatPos === "right") containerClassname += " md:mr-20";
    else containerClassname += " md:ml-20";

    let imageClassname = "absolute  z-10 ";
    if (floatPos === "right") imageClassname += "md:right-24 right-6 top-10 ";
    else imageClassname += "md:left-24 left-6  md:top-16 top-10 ";

    const yellowRectXval = floatPos === "left" ? [-20, 10] : [20, -10];
    const yellowRectXvalPh = floatPos === "left" ? [-20, 10] : [20, -10];
    const imageXval = floatPos === "left" ? [-10, 5] : [10, -5];

    const imageXvalPh = floatPos === "left" ? [-10, 10] : [10, -10];
    return (
      <>
        <div className={containerClassname}>
          <Parallax x={yellowRectXval} className="md:block hidden ">
            {yellowRectangle(floatPos)}
          </Parallax>
          <Parallax x={yellowRectXvalPh} className="md:hidden block ">
            {yellowRectangle(floatPos)}
          </Parallax>
          {/* <div x={xvalues} className="lg:block hidden">
            {yellowRectangle(floatPos)}
          </div> */}
          {/* <div className="lg:hidden block">
            {yellowRectangle(floatPos, true)}
          </div> */}
          {image_path && !video ? (
            <>
              <Parallax x={imageXval} className="md:block hidden">
                <div
                  id="servicesImage"
                  className={imageClassname}
                  style={imageStyle}
                ></div>
              </Parallax>
              <Parallax x={imageXvalPh} className="md:hidden block">
                <div
                  id="servicesImage"
                  className={imageClassname}
                  style={imageStyle}
                ></div>
              </Parallax>
            </>
          ) : (
            iframeYT(video, imageClassname, imageXval, imageXvalPh)
          )}
        </div>
      </>
    );
  }
  function description(desc) {
    return (
      <div className="font-plantc md:text-2xl text-xl mx-auto text-gray-500 md:leading-7 leading-5">
        {desc}
      </div>
    );
  }
  function servicePoints(step, index, length) {
    let className = "pl-5 font-helvetica ";
    if (length > 5) className += " lg:py-1.5 py-1.5 ";
    // else if (length > 7) className += " lg:py-1.5 py-1 ";
    else className += " lg:py-2.5 py-2 ";

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
    let descXval = position === "right" ? [-20, 19] : [25, -10];
    if (steps.length > 7)
      descXval = position === "right" ? [-20, 13] : [20, -8];
    if (position === "right" && steps.length > 8) {
      descXval = [-20, 15];
    }

    let textSectionClassname =
      " flex-col content-center items-center h-min my-auto   mx-auto  md:w-3/4 px-5 ";

    return (
      <div className={textSectionClassname}>
        <Parallax className={"w-11/12  md:block "} x={descXval}>
          {description(desc)}
        </Parallax>
        {/* <div
          className={"w-11/12 ml-4  md:hidden block"}
          data-aos={textSlideDirection}
          data-aos-offset={"100"}
          data-aos-duration={serviceDesc.duration}
        >
          {description(desc)}
        </div> */}
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
      <div className=" h-full   " id="proximity-snap">
        <div className="mx-auto p-5 my-auto">
          <div className={headingClassname}>
            <h2>{service.heading}</h2>
          </div>
          <div className={descriptionClassname}>
            <div className="lg:w-3/6 flex content-center">
              {textSection(service.description, service.steps, imagePos)}
            </div>
            <div className="md:w-4/6 lg:mb-0 mb-4" ref={forwardedRef}>
              {imageSection(
                service.image,
                service.video,
                imagePos,
                service.steps.length
              )}
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
    service={props.service}
    index={props.index}
    onEnter={entered}
  />
);

export default ServiceCardComp;
