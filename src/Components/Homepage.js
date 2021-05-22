import React, { useEffect, useState } from "react";
import "./CSS/homepage.css";

function Homepage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(loading);
    if (loading) {
      console.log(loading);
      const script = document.createElement("script");
      script.src = "./Essentials/HomeParticles.js";
      script.type = "type/javascript";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
    setLoading(true);
  }, []);

  return (
    <div id="homeContainer" className="homeContainer w-auto h-screen">
      <div className="homeText text-white text-2xl h-screen text-center flex justify-center items-center">
        <h1>
          We are creative partners to ambitious brands <br />
          who want to challenge the ordinary
        </h1>
      </div>
      {loading && <canvas id="c"></canvas>}
    </div>
  );
}

export default Homepage;
