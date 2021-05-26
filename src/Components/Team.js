import React, { useEffect, useState } from "react";
import "./CSS/team.css";
import arrow from "../images/icons/right-arrow.png";

function Team() {
  const [scrollDetect, setScrollDetect] = useState(false);

  // Function to detect scrolling and change theme based on that
  const handleScroll = () => {
    if (window.scrollY > 600) {
      setScrollDetect(true);
    } else {
      setScrollDetect(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div id="teamCall" className="h-screen w-auto">
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="800"
        data-aos-offset="200"
        class="teamContainer md:h-full flex flex-col mx-auto md:px-10 sm:px-5 py-10 w-11/12 "
      >
        <div id="teamTitle" className="font-plantc text-5xl mt-14 mb-3 ml-0 ">
          <h2 className={scrollDetect ? "text-black" : "text-white"}>
            We're creative thinkers
          </h2>
          <h2 className="text-gray-500 md:mt-4 ">doing work that matters</h2>
        </div>
        <a class="flex flex-row" href="/career">
          <h5
            className={
              scrollDetect
                ? "text-black relative text-lg my-0 ml-2 tracking-wide"
                : "text-white relative text-lg my-0 ml-2"
            }
          >
            See our job openings
          </h5>
          <img className="arrw ml-2 pb-2" src={arrow}></img>
        </a>
        <img
          className="teamImage mt-6"
          src="https://via.placeholder.com/1500x350?text=Image"
          alt=""
          srcset=""
          style={{ height: "350px", width: "1500px" }}
        ></img>
      </div>
    </div>
  );
}

export default Team;
