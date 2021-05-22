import React, { useEffect, useState } from "react";
import "./CSS/team.css";
import arrow from "../images/icons/arrow.svg";

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
                ? "text-black relative text-base my-0 ml-2"
                : "text-white relative text-base my-0 ml-2"
            }
          >
            See our job openings
          </h5>
          <img className="ml-2" src={arrow} height="10px" width="25px"></img>
        </a>
        <img
          className="teamImage mt-6"
          src="https://images.unsplash.com/photo-1621302698884-a02929870bf7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
          srcset=""
          style={{ height: "350px", width: "1500px" }}
        ></img>
      </div>
    </div>
  );
}

export default Team;
