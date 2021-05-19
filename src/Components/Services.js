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

  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    const { data: serviceList } = await axios.get(API.services);
    setServices(serviceList);
  };

  function yellowRectangle(floatPos) {
    let classname = "float-" + floatPos;
    let style = {
      // backgroundColor: "#ffd805",
      backgroundColor: "#FFE450",
    };
    return <div id="yellowRectangle" className={classname} style={style}></div>;
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
    let imageClassname = "absolute top-10 z-10 ";
    if (floatPos === "right") imageClassname += "md:right-24 right-6";
    else imageClassname += "md:left-24 left-6";

    return (
      <>
        {" "}
        <div
          className={containerClassname}
          // style={{ width: "378px", height: "450px" }}
        >
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
  function serviceSteps(step, index) {
    return (
      <div>
        <img src={linesImg} alt="" className="absolute " />
        <li className=" lg:py-3 py-2 pl-5 font-helvetica " key={index}>
          {step}
        </li>
      </div>
    );
  }
  function textSection(desc, steps) {
    return (
      <div className="flex-col mx-auto grid md:w-1/2 ">
        {" "}
        <div className="w-11/12 mx-auto align-self-center">
          {description(desc)}
        </div>
        <div className="flex md:pl-4 pl-8 my-auto py-5">
          <ul className="ml-4 my-auto">
            {steps.map((step, index) => serviceSteps(step, index))}
          </ul>
        </div>
      </div>
    );
  }
  function service(service, index) {
    let imagePos = index % 2 === 0 ? "right" : "left";
    let classname = "flex  flex-col-reverse mt-5 justify-center h-screen";
    if (imagePos === "right") classname += " md:flex-row";
    else classname += " md:flex-row-reverse";

    return (
      <div className="lg:h-screen  ">
        <div className="mx-auto p-5">
          <div className="mx-auto mb-12 md:mt-10 text-center font-plantc text-5xl">
            <h2>{service.heading}</h2>
          </div>
          <div className={classname}>
            <div className="lg:w-3/6  mt-10">
              {textSection(service.description, service.steps)}
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
    <div className="mx-auto">
      {services && services.map((data, index) => service(data, index))}
    </div>
  );
}
