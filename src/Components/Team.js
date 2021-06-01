import React, { useEffect, useState } from "react";
import "./CSS/team.css";
import arrow from "../images/icons/right-arrow.png";

function Team() {
  const [scrollDetect, setScrollDetect] = useState(false);
  const screenWidth = useState(window.innerWidth);
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setIsPhone(true);
    }
  }, []);

  // Function to detect scrolling and change theme based on that
  const handleScroll = () => {
    if (screenWidth > 500) {
      if (window.scrollY > 400) {
        setScrollDetect(true);
      } else {
        setScrollDetect(false);
      }
    } else {
      if (window.scrollY > 350) {
        setScrollDetect(true);
      } else {
        setScrollDetect(false);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div id="teamCall" className="h-screen w-auto">
      <div className="teamContainer md:h-full flex flex-col mx-auto md:px-10 sm:px-5 py-10 w-11/12 ">
        <div
          id="teamTitle"
          className="teamWords font-plantc text-5xl mt-14 mb-3 ml-0 "
        >
          <h2 className={scrollDetect ? "text-black" : "text-white"}>
            We're creative thinkers
          </h2>
          <h2 className="text-gray-500 md:mt-4 ">doing work that matters</h2>
        </div>
        <a className="flex flex-row" href="/career">
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
          src={
            isPhone
              ? "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              : "https://wallpapercave.com/wp/wp2992033.jpg"
          }
          alt=""
          srcset=""
          style={{ height: "350px", width: "1300px" }}
        ></img>
      </div>
    </div>
  );
}

export default Team;
