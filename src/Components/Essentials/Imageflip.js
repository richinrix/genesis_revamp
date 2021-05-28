import React, { useState, useEffect } from "react";
import "../CSS/imageflip.css";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
//dependencies
import handleViewport from "react-in-viewport";
import { useSpring, a } from "@react-spring/web";

const Imageflip = (props) => {
  const {
    inViewport,
    forwardedRef,
    position,
    phonePosition,
    phoneDisplay,
    tabDisplay,
    card,
  } = props;
  const flipDuration = 1500 + props.index * 500;
  const aosDuration = props.index * 250;
  const [flipped, setFlipped] = useState(false);

  // aos animation
  const cardAnimate = {
    easing: "linear",
    offset: "150",
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

  useEffect(() => {
    AOS.init();
  });
  // ripple effect
  // let flipTimerId;
  // function ripple() {
  //   if (!flipped) {
  //     flipTimerId = setTimeout(flip, flipDuration);
  //   }
  //   // setTimeout(flip, flipDuration + 7 * 500);
  // }
  // useEffect(() => {
  //   if (inViewport && !flipped) {
  //     ripple();
  //   } else if (inViewport && flipped) {
  //     flip();
  //     flip();
  //   }
  //   // uncomment these if you need the images to flip back to initial state when scrolled away
  //   // else if (!inViewport && flipped) {
  //   //   // clearTimeout(flipTimerId);
  //   //   setFlipped(false);
  //   // }
  // }, [inViewport]);
  // useEffect(() => {
  //   if (!inViewport) setFlipped(false);
  // }, [flipped]);

  function imageCard(pos, card, phoneDisplay, tabDisplay, phonePos) {
    const frontImage = card.desktopImg.frontImage;
    const backImage = card.desktopImg.backImage;
    const frontImagePhone = card.phoneImg.frontImage;
    const backImagePhone = card.phoneImg.backImage;

    const name = card.name;
    let classname = "imageflip_container text-center md:mx-3 mx-1.5 ";

    // assigning margin top values based on their position
    if (phonePos === 0) classname += " md:mt-7 mt-3 ";
    if (pos === 0) classname += " md:mt-5 ";
    else if (pos === 1) classname += " md:mt-0";
    else if (pos === 2) classname += " md:mt-12";

    // hiding card on phone if it exceeds the limit mentioned in flipcontainer
    if (!phoneDisplay) classname += " lg:block md:block hidden";
    if (!tabDisplay) classname += " md:hidden ";

    return (
      <>
        {/* desktop */}
        <div className="lg:block hidden">
          <div
            className={classname}
            data-aos="slide-up"
            data-aos-easing={cardAnimate.easeing}
            data-aos-offset={cardAnimate.offset}
            data-aos-duration={cardAnimate.duration}
            onMouseEnter={() => setFlipped((state) => !state)}
            onMouseLeave={() => setFlipped((state) => !state)}
          >
            <a.div
              className="imageflip_c imageflip_back "
              style={{
                opacity: opacity.to((o) => 1 - o),
                transform,
                backgroundImage: `url('${frontImage}')`,
              }}
            >
              <div className="md:text-3xl text-2xl text-left absolute md:bottom-5 bottom-1  ml-2 text-white">
                {name}
              </div>
            </a.div>
            <a.div
              className="imageflip_c imageflip_front"
              style={{
                opacity,
                transform,
                rotateY: "180deg",
                backgroundImage: `url('${backImage}')`,
              }}
            />
          </div>
        </div>
        {/* phone */}
        <div className="lg:hidden block">
          <div
            className={classname}
            data-aos="slide-up"
            data-aos-easing={cardAnimate.easeing}
            data-aos-offset={cardAnimate.offset}
            data-aos-duration={cardAnimate.duration}
            onMouseEnter={() => setFlipped((state) => !state)}
            onMouseLeave={() => setFlipped((state) => !state)}
          >
            <a.div
              className="imageflip_c imageflip_back "
              style={{
                opacity: opacity.to((o) => 1 - o),
                transform,
                backgroundImage: `url('${frontImagePhone}')`,
              }}
            >
              <div className="md:text-3xl text-2xl text-left absolute md:bottom-5 bottom-1  ml-2 text-white">
                {name}
              </div>
            </a.div>
            <a.div
              className="imageflip_c imageflip_front"
              style={{
                opacity,
                transform,
                rotateY: "180deg",
                backgroundImage: `url('${backImagePhone}')`,
              }}
            />
          </div>
        </div>
      </>
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
