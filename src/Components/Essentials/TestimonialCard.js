import React, { useEffect, useState } from "react";
import handleViewport from "react-in-viewport";
import IMAGES from "../services/IMAGES";

const Card = (props) => {
  const { inViewport, forwardedRef, testimonial, index, isPhone } = props;
  const [bShadow, setBShadow] = useState("none");
  const [scale, setScale] = useState("scale(0.98)");
  const [transitionDelay, SetDelay] = useState("0s");

  // inserting boxshadow when in viewport with a delay depending on its index
  useEffect(() => {
    if (inViewport) {
      if (!isPhone) SetDelay(((index % 3) + 1) * 400 + "ms");
      else SetDelay("300ms");
      setScale("scale(1)");
      setBShadow(
        "5px 5px 10px #c7c7c7, -5px -5px 10px #c7c7c7,-5px 5px 10px #c7c7c7, 5px -5px 10px #c7c7c7"
      );
    } else {
      SetDelay("0s");
      setScale("scale(0.98");
      setBShadow("none");
    }
  }, [inViewport]);

  // choosing color for images based on its index
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
      className="relative lg:mx-10 mx-auto my-3 md:p-10 p-7 text-center flex h-screen flex-col justify-between overflow-hidden "
      style={{
        boxShadow: bShadow,
        transform: scale,
        transitionDelay: transitionDelay,
      }}
    >
      <img
        id="quoteImg"
        className="absolute left-8 top-8"
        src={image}
        style={{ width: "25px" }}
        alt=""
      />
      {/* text  */}
      <div className="mt-6 leading-snug  text-xs overflow-hidden">
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
          className=" testimonialProfilePic bg-gray-500 mx-auto "
          style={{
            backgroundImage: `url('${testimonial.image}')`,
          }}
        />
        <h2 className="text-white text-lg ">{testimonial.name}</h2>
        <img
          className="mx-auto  -mb-5 mt-3"
          src={IMAGES.stars5}
          alt=""
          style={{ height: "20px", width: "100px" }}
        />
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

const ViewportBlock = handleViewport(Card);

const Component = (props) => (
  <ViewportBlock
    testimonial={props.testimonial}
    index={props.index}
    isPhone={props.isPhone}
  />
);

export default React.memo(Component);
