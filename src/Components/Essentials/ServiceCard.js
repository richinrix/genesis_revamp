import React from "react";
import handleViewport from "react-in-viewport";

const ServiceCard = (props) => {
  const { inViewport, forwardedRef } = props;

  return <div></div>;
};

const ViewportBlock = handleViewport(ServiceCard);

const ServiceCardComp = (props) => <ViewportBlock />;

export default ServiceCardComp;
