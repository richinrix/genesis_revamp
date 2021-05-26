import React, { useState, useEffect, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// services
import API from "./services/API";
import axios from "axios";
// other comps
import ServiceCard from "./Essentials/ServiceCard";
// css
import "./CSS/services.css";

export default function Services() {
  const [services, setServices] = useState();
  const [screenwidth, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    const { data: serviceList } = await axios.get(API.services);
    setServices(serviceList);
  };

  return (
    <ParallaxProvider className="">
      {services &&
        services.map((data, index) => (
          <ServiceCard index={index} service={data} screenwidth={screenwidth} />
        ))}
    </ParallaxProvider>
    // <>
    //   {services &&
    //     services.map((data, index) => (
    //       <ServiceCard index={index} service={data} />
    //     ))}
    // </>
  );
}
