import React, { useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/web";
import "../CSS/imageflip.css";
import AOS from "aos";
import "aos/dist/aos.css";
import handleViewport from "react-in-viewport";

const Imageflip = (props) => {
  const { inViewport, forwardedRef } = props;
  const position = props.position;
  const phonePosition = props.phonePosition;
  const phoneDisplay = props.phoneDisplay;
  const tabDisplay = props.tabDisplay;
  const card = props.card;
  const [flipped, setFlipped] = useState(false);
  const flipDuration = 1500 + props.index * 500;
  const aosDuration = props.index * 250;

  // aos animation
  const cardAnimate = {
    easing: "linear",
    offset: "250",
    duration: aosDuration,
  };
  // change mass tension and friction values to change the spinning effects
  const mass = 6,
    tension = 400,
    friction = 70;

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: mass, tension: tension, friction: friction },
  });

  // flips the image when called

  const flip = () => setFlipped((state) => !state);
  let flipTimerId;
  function ripple() {
    flipTimerId = setTimeout(flip, flipDuration);
    // setTimeout(flip, flipDuration + 7 * 500);
  }
  useEffect(() => {
    AOS.init();

    // flipping card evry few seconds
    if (inViewport && !flipped) {
      ripple();
      // console.log("in view", flipTimerId);
    } else if (!inViewport && flipped) {
      // console.log("not in view", flipTimerId);
      clearTimeout(flipTimerId);
      // flip();
      setFlipped(false);
    }
  }, [inViewport]);

  function imageCard(pos, card, phoneDisplay, tabDisplay, phonePos) {
    const frontImagePath = card.frontImage;
    const backImagePath = card.backImage;
    let classname = "imageflip_container text-center md:mx-3 mx-2 ";

    // assigning margin top values based on their position
    if (phonePos === 0) classname += "mt-7";
    if (pos === 0) classname += " md:mt-5 ";
    else if (pos === 1) classname += " md:mt-0";
    else if (pos === 2) classname += " md:mt-12";

    // hiding card on phone if it exceeds the limit mentioned in flipcontainer
    if (!phoneDisplay) classname += " lg:block md:block hidden";
    if (!tabDisplay) classname += " md:hidden ";

    return (
      <div
        className={classname}
        data-aos="slide-up"
        data-aos-easing={cardAnimate.easeing}
        data-aos-offset={cardAnimate.offset}
        data-aos-duration={cardAnimate.duration}
        ref={forwardedRef}
      >
        <a.div
          className="imageflip_c imageflip_back "
          style={{
            opacity: opacity.to((o) => 1 - o),
            transform,
            backgroundImage: `url('${frontImagePath}')`,
          }}
        ></a.div>
        <a.div
          className="imageflip_c imageflip_front"
          style={{
            opacity,
            transform,
            rotateY: "180deg",
            backgroundImage: `url('${backImagePath}')`,
          }}
        />
      </div>
    );
  }
  return (
    <>{imageCard(position, card, phoneDisplay, tabDisplay, phonePosition)}</>
  );
};

const ViewportBlock = handleViewport(Imageflip);

const Component = (props) => (
  <ViewportBlock
    index={props.index}
    phoneDisplay={props.phoneDisplay}
    tabDisplay={props.tabDisplay}
    position={props.position}
    card={props.card}
    phonePosition={props.phonePosition}
  />
);

export default Component;
