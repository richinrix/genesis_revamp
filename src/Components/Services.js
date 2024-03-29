import React, { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
// services
import API from "./services/API";
import axios from "axios";
// other comps
import ServiceCard from "./Essentials/ServiceCard";

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
    <ParallaxProvider className="mx-auto">
      <div id="services" className=" mx-auto">
        {services &&
          services.map((data, index) => (
            <ServiceCard index={index} service={data} />
          ))}
      </div>
    </ParallaxProvider>
  );
}
