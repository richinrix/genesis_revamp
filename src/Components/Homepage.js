import React, { useEffect } from "react";
import "./CSS/homepage.css";

function Homepage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./Essentials/HomeParticles.js";
    script.type = "type/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="homeContainer w-auto h-screen bg-gray-800">
      <div className="homeText bg-black text-white text-2xl h-screen text-center flex justify-center items-center">
        <h1>
          We are creative partners to ambitious brands <br />
          who want to challenge the ordinary
        </h1>
      </div>
      <canvas id="c"></canvas>
    </div>
  );
}

export default Homepage;
