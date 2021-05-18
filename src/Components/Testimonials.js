import React, { useState, useEffect } from "react";
import axios from "axios";
// services
import IMAGES from "./services/IMAGES";
import API from "./services/API";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import "./CSS/imageflip.css";

export default function Testimonials() {
  const [startCard, setStartCard] = useState(0);
  const [testimonials, setTestimonials] = useState();

  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    // const { data: info } = await axios.get(API.testimonails);
    // setTestimonials(info);

    await fetch(API.testimonials).then((res) =>
      res.json().then((info) => setTestimonials(info))
    );
  };

  // renders each testimonial card
  function card(testimonial, index) {
    // quote and footer color
    let className =
      "relative mx-10 my-3 p-10 text-center flex flex-col justify-between overflow-hidden";
    let image, footerImg;
    if (index === 0) {
      image = IMAGES.leftQuoteGreen;
      footerImg = IMAGES.testimonialBottomGreen;
    } else if (index === 1) {
      image = IMAGES.leftQuotePurple;
      footerImg = IMAGES.testimonialBottomPurple;
    } else if (index === 2) {
      image = IMAGES.leftQuoteBlue;
      footerImg = IMAGES.testimonialBottomBlue;
    }
    className = testimonial.index < 4 ? className + " active" : className + "";
    return (
      <div
        id="testimonial-card"
        className={className}
        animationIn={"bounceInRight"}
        animationOut={"bounceOutLeft"}
        animationInDelay={"1s"}
        isVisible={true}
        style={{
          height: "450px",
          width: "330px",
        }}
      >
        <img
          id="quoteImg"
          className="absolute"
          src={image}
          style={{ width: "25px" }}
          alt=""
        />

        <div className="mt-10 leading-snug">{testimonial.statement}</div>

        <div
          id="name "
          className="  flex flex-col mb-5"
          style={{ bottom: "30px", zIndex: "10" }}
        >
          {/* profile image  */}
          <div
            className="bg-gray-500 mx-auto"
            style={{
              borderRadius: "50%",
              height: "96px",
              width: "96px",
              border: "8px solid white",
              backgroundImage: `url('${testimonial.image}')`,
            }}
          />
          <h2 className="text-white">{testimonial.name}</h2>
        </div>
        <div
          className="absolute"
          style={{
            backgroundImage: `url('${footerImg}')`,
            backgroundRepeat: "no-repeat",
            width: "440px",
            height: "248px",
            zIndex: "1",
            bottom: "-80px",
            left: "-62px",
          }}
        ></div>
      </div>
    );
  }
  // displaying the current three cards
  function currenDesktoptView(cards) {
    return <>{cards.map((testimonial, index) => card(testimonial, index))}</>;
  }
  return (
    <>
      {/* phone view */}
      <div
        className="md:h-screen md:my-2 my-8 md:hidden flex md:flex-row flex-col justify-center items-center overflow-hidden "
        // style={{ background: "#e0e0e0" }}
      >
        {testimonials &&
          testimonials.slice &&
          currenDesktoptView(testimonials.slice(startCard, startCard + 1))}
      </div>
      {/* desktop view */}
      <div
        axis="horizontal"
        className="md:h-screen md:my-2 my-8 md:flex hidden md:flex-row flex-col justify-center items-center overflow-hidden"
        // style={{ background: "#e0e0e0" }}
      >
        {testimonials &&
          testimonials.slice &&
          currenDesktoptView(testimonials.slice(startCard, startCard + 3))}
      </div>
    </>
  );
}
