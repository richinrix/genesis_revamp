import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// other components
import API from "./services/API";
import ImageFlip from "./Essentials/Imageflip";
import arrow from "../images/icons/right-arrow-link.svg";
import aos from "aos";
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
      className="  md:h-full md:mb-5    flex flex-col  md:px-10 sm:px-5 md:pt-5 pt-20  content-center justify-center proximity-snap "
    >
      <div className="mx-auto ">
        <div
          id="ImageFlip-Text"
          className="font-plantc md:text-5xl text-4xl md:mb-10 mb-5 md:pt-8  md:ml-0 ml-8 md:mt-16"
        >
          <h2 className=" ">Meet our team</h2>
        </div>
        <div>
          <div
            id="image-flip-wrapper"
            className=" flex flex-wrap md:mt-8 md:ml-3 md:pt-6 lg:justify-start justify-center lg:w-max"
          >
            {/* limiting the cards to 8 if the cards are more than 8  */}
            {cards &&
              cards.slice(0, 8).map((card, index) => imageFlip(index, card))}
          </div>
          <Link
            to="/career"
            data-aos="slide-up"
            className="absolute right-24  md:text-xl   mt-8 font-plantc flex justify-items-end "
          >
            <div className="font-normal justify-end ">Join the team</div>
            <img
              src={arrow}
              className=" md:-pt-1 -pt-4 -mx-3  flex-shrink-0"
              style={{ height: "28px", width: "80px" }}
              alt=""
              srcset=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
