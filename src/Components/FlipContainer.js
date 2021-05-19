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
    const phoneCardsLimit = 4;
    const tabCardsLimit = 6;

    let phoneDisplay = index + 1 > phoneCardsLimit ? false : true;
    let tabDisplay = index + 1 > tabCardsLimit ? false : true;

    return (
      <ImageFlip
        index={index}
        phoneDisplay={phoneDisplay}
        tabDisplay={tabDisplay}
        position={index % 3}
        card={card}
        phonePosition={index % 2}
      />
    );
  }
  return (
    <div className="lg:h-screen flex flex-col mx-auto md:px-10 sm:px-5 py-5 w-11/12 ">
      <div>
        <div
          id="ImageFlip-Text"
          className="font-plantc text-5xl mb-10  md:ml-0 ml-3 md:mt-10"
        >
          <h2 className=" ">We're more than</h2>
          <h2 className="text-gray-500 md:mt-4 ">just a web agency</h2>
        </div>
      </div>
      <div>
        <div
          id="image-flip-wrapper"
          className=" flex flex-wrap md:mt-8 md:ml-3 lg:justify-start justify-center lg:w-max"
        >
          {cards &&
            cards.slice(0, 7).map((card, index) => imageFlip(index, card))}
        </div>
      </div>
    </div>
  );
}
