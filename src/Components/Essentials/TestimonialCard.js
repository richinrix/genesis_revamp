import React, { useEffect } from "react";
import handleViewport from "react-in-viewport";
import IMAGES from "../services/IMAGES";
const Block = (props) => {
  const { inViewport, forwardedRef, testimonial, index } = props;
  let boxShadow = inViewport
    ? "5px 5px 10px #c7c7c7, -5px -5px 10px #c7c7c7,-5px 5px 10px #c7c7c7, 5px -5px 10px #c7c7c7"
    : "none";
  let scale = inViewport ? "scale(1)" : "scale(0.98)";
  // let transitionDelay = " md:delay-";
  // transitionDelay += inViewport ? ((index % 3) + 1) * 500 + " delay-300" : "0";
  let transitionDelay = inViewport ? ((index % 3) + 1) * 500 + "ms" : "0s";

  let className =
    "relative llg:mx-10 mx-auto my-3 md:p-10 p-7 text-center flex h-screen flex-col justify-between overflow-hidden ";
  let image, footerImg;
  if (index % 3 === 0) {
    image = IMAGES.leftQuoteGreen;
    footerImg = IMAGES.testimonialBottomGreen;
  } else if (index % 3 === 1) {
    image = IMAGES.leftQuotePurple;
    footerImg = IMAGES.testimonialBottomPurple;
  } else if (index % 3 === 2) {
    image = IMAGES.leftQuoteBlue;
    footerImg = IMAGES.testimonialBottomBlue;
  }
  return (
    <div
      id="testimonial-card"
      className={className}
      style={{
        boxShadow: boxShadow,
        transform: scale,
        transitionDelay: transitionDelay,
      }}
    >
      <img
        id="quoteImg"
        className="absolute"
        src={image}
        style={{ width: "25px" }}
        alt=""
      />

      <div className="mt-10 leading-snug overflow-hidden">
        {testimonial.statement}
      </div>

      <div
        id="name "
        className="  flex flex-col md:mb-5 mb-2"
        style={{ bottom: "30px", zIndex: "10" }}
      >
        {/* profile image  */}
        <div
          ref={forwardedRef}
          className=" testimonialProfilePic bg-gray-500 mx-auto"
          style={{
            backgroundImage: `url('${testimonial.image}')`,
          }}
        />
        <h2 className="text-white">{testimonial.name}</h2>
      </div>
      <div
        id="testimonialFooterImg"
        className="absolute"
        style={{
          backgroundImage: `url('${footerImg}')`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

const ViewportBlock = handleViewport(Block);

const Component = (props) => (
  <ViewportBlock testimonial={props.testimonial} index={props.index} />
);

export default Component;
