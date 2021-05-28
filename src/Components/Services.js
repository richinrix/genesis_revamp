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

  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    const { data: serviceList } = await axios.get(API.services);
    setServices(serviceList);
  };

  return (
    <ParallaxProvider className="">
      <div id="services" className="h-0"></div>
      {services &&
        services.map((data, index) => (
          <ServiceCard index={index} service={data} />
        ))}
    </ParallaxProvider>
  );
}
