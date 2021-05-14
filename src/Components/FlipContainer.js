import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import ImageFlip from "./Imageflip";

export default function FlipContainer() {
  // replace with api whn api available
  const cards = [
    {
      frontImage:
        "https://www.originalcomics.fr/12689/batman-metal-tome-3-vf.jpg",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop",
    },
    {
      frontImage:
        "http://www.winwallpapers.net/w1/2014/01/Batman-Begins-2005-Wallpapers-2.jpg",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop",
    },
    {
      frontImage:
        "https://www.fightersgeneration.com/nx5/char/flash-injustice-concept.jpg",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop",
    },
    {
      frontImage:
        "https://www.originalcomics.fr/12689/batman-metal-tome-3-vf.jpg",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop",
    },
    {
      frontImage:
        "https://www.fightersgeneration.com/nx5/char/flash-injustice-concept.jpg",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop",
    },
    {
      frontImage:
        "http://www.winwallpapers.net/w1/2014/01/Batman-Begins-2005-Wallpapers-2.jpg",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop",
    },
    {
      frontImage:
        "https://www.originalcomics.fr/12689/batman-metal-tome-3-vf.jpg",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop",
    },
    {
      frontImage:
        "http://www.winwallpapers.net/w1/2014/01/Batman-Begins-2005-Wallpapers-2.jpg",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop",
    },
  ];
  function imageFlip(index, card) {
    // change the limit to change the no. of cards displayed on phone
    let phoneCardsLimit = 6;
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
    <div className="md:h-full flex flex-col mx-auto  mt-5 md:px-10 sm:px-5 py-10 w-11/12 ">
      <div
        id="ImageFlip-Text"
        className="font-plantc text-5xl mb-10  md:ml-0 ml-3 "
      >
        <h2 className=" ">We're more than</h2>
        <h2 className="text-gray-500 md:mt-4 ">just a web agency</h2>
      </div>
      <div
        pages={1}
        id="image-flip-wrapper"
        className=" flex flex-wrap md:mt-8 md:ml-2 ml-0 md:justify-start justify-center "
      >
        {cards.slice(0, 7).map((card, index) => imageFlip(index, card))}
      </div>
    </div>
  );
}
