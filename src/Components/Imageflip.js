import React, { useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/web";
// import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./css/imageflip.css";
export default function Imageflip(props) {
  const position = props.position;
  const card = props.card;
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 450, friction: 70 },
  });
  useEffect(() => {
    if (position === 1) console.log("hi");
  }, []);
  function imageCard(pos, card) {
    const frontImagePath = card.frontImage;
    const backImagePath = card.backImage;
    let classname = "imageflip_container text-center md:mx-3 mx-2 ";
    if (pos === 0) classname += " mt-5";
    if (pos === 2) classname += " mt-12";
    return (
      <div
        className={classname}
        onMouseEnter={() => set((state) => !state)}
        onMouseLeave={() => set((state) => !state)}
        onClick={() => set((state) => !state)}
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
  return <>{imageCard(position, card)}</>;
}
