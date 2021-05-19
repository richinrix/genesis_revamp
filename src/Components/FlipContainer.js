import React, { useEffect, useState } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
import FadeIn from "react-fade-in";
// other components
import API from "./services/API";
import ImageFlip from "./Essentials/Imageflip";

export default function FlipContainer() {
  const [cards, setCards] = useState();

  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    const { data: imageList } = await axios.get(API.imageflip);
    setCards(imageList);
  };

  function imageFlip(index, card) {
    // change the limit to change the no. of cards displayed on phone
    let phoneCardsLimit = 4;
    let phoneDisplay = index + 1 > phoneCardsLimit ? false : true;
    return (
      <ImageFlip
        phoneDisplay={phoneDisplay}
        position={index % 3}
        card={card}
        phonePosition={index % 2}
      />
    );
  }
  return (
    <div className="md:h-screen flex flex-col mx-auto  mt-5 md:px-10 sm:px-5 py-10 w-11/12 ">
      <Fade bottom>
        <div
          id="ImageFlip-Text"
          className="font-plantc text-5xl mb-10  md:ml-0 ml-3 md:mt-10"
        >
          <h2 className=" ">We're more than</h2>
          <h2 className="text-gray-500 md:mt-4 ">just a web agency</h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <FadeIn
          id="image-flip-wrapper"
          className=" flex flex-wrap md:mt-8 md:ml-3 md:justify-start justify-center md:w-max"
        >
          {cards &&
            cards.slice(0, 7).map((card, index) => imageFlip(index, card))}
        </FadeIn>
      </Fade>
    </div>
  );
}
