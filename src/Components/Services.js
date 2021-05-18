import React, { useState, useEffect } from "react";
import { servicesVersion } from "typescript";
// image
import lineImg from "../images/icons/services-line-and-dots.png";
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
  function textSection(desc, steps) {
    return (
      <div className="flex-col mx-auto md:w-1/2 ">
        {" "}
        <div className="w-11/12 mx-auto">{description(desc)}</div>
        <div className="flex md:ml-4 ml-8 mx-auto  my-10">
          <img src={lineImg} alt="" />
          <ul className="ml-4">
            {steps.map((step, index) => (
              <li className="py-4 px-3 font-helvetica" key={index}>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  function service(service, index) {
    let imagePos = index % 2 === 0 ? "right" : "left";
    let classname = "flex  flex-col-reverse mt-5 justify-center h-600";
    if (imagePos === "right") classname += " md:flex-row";
    else classname += " md:flex-row-reverse";

    return (
      <div className="md:h-screen  " key={index}>
        <div className="mx-auto p-5">
          <div className="mx-auto mb-12 md:mt-10 text-center font-plantc text-5xl">
            <h2>{service.heading}</h2>
          </div>
          <div className={classname}>
            <div className="md:w-1/2  mt-10">
              {textSection(service.description, service.steps)}
            </div>
            <div className="md:w-1/2">
              {imageSection(service.image, imagePos)}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>{services && services.map((data, index) => service(data, index))}</div>
  );
}
