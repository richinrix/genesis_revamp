import React, { useState, useEffect } from "react";
import IMAGES from "./services/IMAGES";
// import "./CSS/imageflip.css";
export default function Testimonials() {
  const [startCard, setStartCard] = useState(0);
  // replace with api whn api available
  const testimonails = [
    {
      index: 1,
      name: "Bruce Wayne",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magni, impedit reiciendis numquam eveniet voluptas! Lorem ips um dolor sit amet consectetur adipisicing elit. Rem magni, impedit reiciendis numquam eveniet voluptas!",
      image: "https://www.originalcomics.fr/12689/batman-metal-tome-3-vf.jpg",
    },
    {
      index: 2,
      name: "Bruce Wayne",
      statement:
        "Lorem ipsum dolor s Lorem adipisicing elit. Rem magni, impedit reicit amet consectetur adipisicing elit. Rem magni, impedit reiciendis numquam eveniet voluptas!",
      image: "https://www.originalcomics.fr/12689/batman-metal-tome-3-vf.jpg",
    },
    {
      index: 3,
      name: "Bruce Wayne",
      statement:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magni, impedit reiciendis numquam eveniet voluptas! Lorem ipsum dolor sit amet consem magni, impedit reic",
      image: "https://www.originalcomics.fr/12689/batman-metal-tome-3-vf.jpg",
    },
    {
      index: 4,
      name: "Bruce Wayne",
      statement:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magni, impedit reiciendis numquam eveniet voluptas! Lorem ips um dolor sit amet consectetur adipisicing elit. Rem magni, impedit reiciendis numquam eveniet voluptas!",
      image: "https://www.originalcomics.fr/12689/batman-metal-tome-3-vf.jpg",
    },
    {
      index: 5,
      name: "Bruce Wayne",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magni, impedit reiciendis numquam eveniet voluptas! Lorem ips um dolor sit amet consectetur adipisicing elit. Rem magni, impedit reiciendis numquam eveniet voluptas!",
      image: "https://www.originalcomics.fr/12689/batman-metal-tome-3-vf.jpg",
    },
    {
      index: 6,
      name: "Bruce Wayne",
      statement:
        "Lorem ipsum dolor s Lorem adipisicing elit. Rem magni, impedit reicit amet consectetur adipisicing elit. Rem magni, impedit reiciendis numquam eveniet voluptas!",
      image: "https://www.originalcomics.fr/12689/batman-metal-tome-3-vf.jpg",
    },
  ];
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
      <div className="md:h-screen md:my-2 my-8 md:hidden flex md:flex-row flex-col justify-center items-center overflow-hidden ">
        {currenDesktoptView(testimonails.slice(startCard, startCard + 1))}
      </div>
      {/* desktop view */}
      <div className="md:h-screen md:my-2 my-8 md:flex hidden md:flex-row flex-col justify-center items-center overflow-hidden ">
        {currenDesktoptView(testimonails.slice(startCard, startCard + 3))}
      </div>
    </>
  );
}
