import React, { useEffect, useState } from "react";
import axios from "axios";
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
    // change the limit to change the no. of cards displayed on phone and tab screen size
    const phoneCardsLimit = 8;
    const tabCardsLimit = 8;

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
    <div
      id="teams"
      className="md:h-screen w-full h-full flex flex-col my-auto md:px-10 sm:px-5 py-5 content-center justify-center proximity-snap "
    >
      <div className="mx-auto">
        <div
          id="ImageFlip-Text"
          className="font-plantc md:text-5xl text-4xl md:mb-10 mb-5  md:ml-0 ml-8 md:mt-16"
        >
          <h2 className=" ">Meet our team</h2>
          {/* <h2 className="text-gray-500 md:mt-4 ">delete or replace</h2> */}
        </div>
        <div>
          <div
            id="image-flip-wrapper"
            className=" flex flex-wrap md:mt-8 md:ml-3 lg:justify-start justify-center lg:w-max"
          >
            {cards &&
              cards.slice(0, 8).map((card, index) => imageFlip(index, card))}
          </div>
        </div>
      </div>
    </div>
  );
}
