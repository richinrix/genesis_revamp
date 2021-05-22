import React from "react";
import "./CSS/team.css";
import team from "../images/team.jpg";

function Team() {
  return (
    <div id="teamCall" className="h-screen w-auto">
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="800"
        data-aos-offset="200"
        class="teamContainer bg-transparent md:h-full flex flex-col mx-auto  mt-5 md:px-10 sm:px-5 py-10 w-11/12 "
      >
        <div id="teamTitle" className="font-plantc text-4xl mb-3 ml-0 ">
          <h2>We're creative thinkers</h2>
          <h2 className="text-gray-500 md:mt-4 ">doing work that matters</h2>
        </div>
        <a href="/career">
          <h5 className="relative text-base my-0 ml-2">
            See our job openings-----{">"}
          </h5>
        </a>
        <img
          className="teamImage mt-6"
          src="https://images.unsplash.com/photo-1621302698884-a02929870bf7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
          srcset=""
          style={{ height: "450px", width: "1200px" }}
        ></img>
      </div>
    </div>
  );
}

export default Team;
