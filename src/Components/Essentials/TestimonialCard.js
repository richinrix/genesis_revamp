import React from "react";
import IMAGES from "../services/IMAGES";

const Card = (props) => {
  const { testimonial, index } = props;

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
      className="relative lg:mx-10 mx-auto my-3 md:px-10 p-7 font-montserrat text-center flex flex-col justify-between overflow-hidden  "
      style={{
        boxShadow:
          "2px 2px 10px #c7c7c798, -2px -2px 10px #c7c7c798,-2px 2px 10px #c7c7c798, 2px -2px 10px #c7c7c798",
        // transform: scale,
        // transitionDelay: transitionDelay,
      }}
    >
      <img
        id="quoteImg"
        className="absolute md:left-8 left-4 md:top-8 top-3 "
        src={image}
        style={{ width: "20px" }}
        alt=""
      />
      {/* text  */}
      <div className=" leading-snug  my-auto  text-xs overflow-hidden text-justify md:pt-4">
        <div>{testimonial.statement}</div>
      </div>
      <div
        id="name "
        className="  flex flex-col md:mb-5 mb-2"
        style={{ bottom: "30px", zIndex: "10" }}
      >
        {/* profile image  */}
        <div
          className=" testimonialProfilePic bg-gray-500 mx-auto md:mb-2"
          style={{
            backgroundImage: `url('${testimonial.image}')`,
          }}
        />
        <h2 className="text-white xl:text-lg lg:text-base  md:-mb-2">
          {testimonial.name}
        </h2>
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

export default React.memo(Card);
