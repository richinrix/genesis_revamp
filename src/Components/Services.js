import React, { useState, useEffect } from "react";
// image
import linesImg from "../images/icons/services-line-and-dots.png";
// services
import API from "./services/API";
import axios from "axios";
// css
import "./CSS/services.css";

export default function Services() {
  const [services, setServices] = useState();

  // aos styling settings
  const yellowRect = {
    duration: "800",
    offset: "200",
    easing: "linear",
  };
  const serviceStep = {
    easing: "linear",
    duration: "600",
    offset: "100",
  };
  const serviceDesc = {
    offset: "200",
    duration: "1200",
  };

  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    const { data: serviceList } = await axios.get(API.services);
    setServices(serviceList);
  };

  function yellowRectangle(floatPos) {
    const classname = "float-" + floatPos;
    const slideIn = floatPos === "right" ? "slide-left" : "slide-right";
    let style = {
      // backgroundColor: "#ffd805",
      backgroundColor: "#FFE450",
    };
    return (
      <div
        id="yellowRectangle"
        data-aos={slideIn}
        data-aos-easing={yellowRect.easing}
        data-aos-duration={yellowRect.duration}
        data-aos-offset={yellowRect.offset}
        className={classname}
        style={style}
      ></div>
    );
  }
  function imageSection(image_path, floatPos) {
    const style = {
      backgroundImage: `url('${image_path}')`,
      backgroundRepeat: "no-repeat",
    };
    // container class
    let containerClassname = "relative ";

    if (floatPos === "right") containerClassname += "md:mr-20";
    else containerClassname += "md:ml-20";
    // image classname
    let imageClassname = "absolute  z-10 ";
    if (floatPos === "right") imageClassname += "md:right-24 right-6 top-10 ";
    else imageClassname += "md:left-24 left-6  md:top-16 top-10 ";

    return (
      <>
        {" "}
        <div className={containerClassname}>
          {yellowRectangle(floatPos)}
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
  function serviceSteps(step, index, length) {
    let className = "pl-5 font-helvetica ";
    if (length > 5) className += " lg:py-1.6 py-2 ";
    else className += "lg:py-2.5 py-2";

    return (
      <div>
        <img src={linesImg} alt="" className="absolute" />
        <li
          className={className}
          data-aos="slide-up"
          data-aos-easing={serviceStep.easing}
          data-aos-duration={serviceStep.duration}
          data-aos-offset={"50"}
          key={index}
        >
          {step}
        </li>
      </div>
    );
  }
  function textSection(desc, steps, position) {
    let textSlideDirection =
      position === "right" ? "slide-right" : "slide-left";
    let textSectionClassname = " flex-col mx-auto grid md:w-1/2  ";
    textSectionClassname += steps.length > 9 ? " mb-16 " : " ";
    return (
      <div className={textSectionClassname}>
        {" "}
        <div
          className="w-11/12 mx-auto align-self-center "
          data-aos={textSlideDirection}
          data-aos-offset={serviceDesc.offset}
          data-aos-duration={serviceDesc.duration}
        >
          {description(desc)}
        </div>
        <div className="flex md:pl-4 pl-8 my-auto pt-5">
          {/* <ul className="">
            {steps.map(() => (
              <img
                src={linesImg}
                alt=""
                className="w-1.5 h-9"
                // style={{ height: "10px" }}
              />
            ))}
          </ul> */}
          <ul className="ml-4 my-auto">
            {steps.map((step, index) =>
              serviceSteps(step, index, steps.length)
            )}
          </ul>
        </div>
      </div>
    );
  }
  function service(service, index) {
    let imagePos = index % 2 === 0 ? "right" : "left";
    let descriptionClassname = "flex  flex-col-reverse mt-5 justify-center ";
    if (imagePos === "right") descriptionClassname += " md:flex-row";
    else descriptionClassname += " md:flex-row-reverse";
    let headingClassname =
      "mx-auto  md:mt-20 text-center font-plantc text-5xl ";

    return (
      <div className="lg:h-screen h-auto ">
        <div className="mx-auto p-5">
          <div className={headingClassname}>
            <h2>{service.heading}</h2>
          </div>
          <div className={descriptionClassname}>
            <div className="lg:w-3/6  mt-10">
              {textSection(service.description, service.steps, imagePos)}
            </div>
            <div className="md:w-4/6">
              {imageSection(service.image, imagePos)}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto" id="services">
      {services && services.map((data, index) => service(data, index))}
    </div>
  );
}
