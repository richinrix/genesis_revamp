import React, { useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/web";
import "./CSS/imageflip.css";

export default function Imageflip(props) {
  const position = props.position;
  const phonePosition = props.phonePosition;
  const phoneDisplay = props.phoneDisplay;
  const card = props.card;
  const [flipped, setFlipped] = useState(false);

  // change mass tension and friction values to change the spinning effects
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 70 },
  });
  // flips the image when called
  const flip = () => setFlipped((state) => !state);

  useEffect(() => {
    // trigger this when div on view
    flipOnView();
  }, []);
  let flipOnView = () => {
    setTimeout(flip, 10);
    setTimeout(flip, 400);
  };

  function imageCard(pos, card, phoneDisplay, phonePos) {
    const frontImagePath = card.frontImage;
    const backImagePath = card.backImage;
    let classname = "imageflip_container text-center md:mx-3 mx-2 ";

    // assigning margin top values based on their position
    if (phonePos === 0) classname += "mt-7";
    if (pos === 0) classname += " md:mt-5 ";
    else if (pos === 1) classname += " md:mt-0";
    else if (pos === 2) classname += " md:mt-12";

    // hiding card if it exceeds the limit mentioned in flipcontainer
    if (!phoneDisplay) classname += " md:block hidden";

    return (
      <div
        className={classname}
        onMouseEnter={flip}
        onMouseLeave={flip}
        onClick={flip}
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
  return <>{imageCard(position, card, phoneDisplay, phonePosition)}</>;
}
