import React, { useState, useRef } from "react";
import CountUp from "react-countup";
import useVisible from "./Hooks/useIsVisible";
import "./CSS/component.css";

function About() {
  const [scrollDetect, setScrollDetect] = useState(false);

  // Constants for custom Hook
  const elemRef = useRef();
  const isVisible = useVisible(elemRef);

  // Function to detect scrolling and change theme based on that
  const handleScroll = () => {
    if (window.scrollY > 350) {
      setScrollDetect(true);
    } else {
      setScrollDetect(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div id="teamCall" className="h-auto w-auto">
      {window.innerWidth > 767 ? (
        <div className="teamContainer h-auto flex flex-col mx-auto  sm:px-5 pt-10 w-screen left-">
          <div
            id="teamTitle"
            className="teamWords font-montserrat md:px-20 text-5xl mt-14 2xl:mt-0 mb-3 px-4 ml-"
          >
            <h2 className={scrollDetect ? "text-black" : "text-white"}>
              We're creative thinkers
            </h2>
            <h2 className="text-gray-500 md:mt-1">doing work that matters</h2>
          </div>
          <div className="aboutText font-montserrat text-gray-800 pt-4 md:pt-2 pb-2 pr-8 md:px-10 md:leading-6">
            <p className="aboutParagraphs md:mr-20 ml-5 md:ml-10 md:tracking-wider">
              <p>
                Genesis Media is not just a digital agency, we are a
                transformation agency. We transform your business into a brand
                that will revolutionize the way the world sees you.
              </p>
              <br />{" "}
              <p>
                Creating a website and a social media account is not the winning
                recipe anymore. It’s the extra pinch of lasting impression that
                you provide to your clients, that wins you the trophy. That’s
                what we do best at Genesis, we create impactful experiences for
                your clients. We believe that our success lies in the growth of
                your brand.
              </p>
              <br />{" "}
              <p>
                After working with over 30 brands, we've realised that our
                greatest strength is our comprehensive digital approach, which
                is built around the fundamentals of branding and brand commerce
                growth. Making it effortless for brands to collaborate with us
                on everything related to media.
              </p>
              <br />
              <p>
                {" "}
                At Genesis, we also obsess over the quality of our work. Our
                creativity is often nurtured by our skills in cutting edge
                technology. Every piece of information we provide to our brands
                is backed by copious amounts of research, data & experience.
              </p>
              <br />{" "}
              <p>
                Come join hands with us as we bring a remarkable change in
                marketing & advertising and make them accessible for businesses
                of all sizes.
              </p>
            </p>
          </div>
          <div className="counterContainer relative w-screen h-auto">
            <div className="aboutPic md:-ml-5 w-screen mt-5 bg-black">
              <div className="teamPic relative object-cover w-screen">
                <div className="aboutCounters absolute flex flex-col md:flex-row  top-0 mt-5 left-0 w-screen h-full z-10 text-white pb-5">
                  <div className="h-1/3 w-auto md:h-auto md:w-1/3  flex flex-row justify-center md:justify-end items-center gap-3">
                    <div ref={elemRef} className="text-7xl">
                      {isVisible && <CountUp start={0} end={26} duration={5} />}
                    </div>
                    <div className="text-2xl">
                      Services
                      <br />
                      Offered
                    </div>
                  </div>
                  <div className="h-1/3 w-auto md:h-auto md:w-1/3  flex flex-row justify-center items-center gap-3">
                    <div ref={elemRef} className="text-7xl">
                      {isVisible && <CountUp start={0} end={40} duration={5} />}
                    </div>
                    <div className="text-2xl">
                      Projects
                      <br />
                      Completed
                    </div>
                  </div>
                  <div className="h-1/3 w-auto md:h-auto md:w-1/3  flex flex-row justify-center md:justify-start items-center gap-3">
                    <div ref={elemRef} className="text-7xl">
                      {isVisible && <CountUp start={0} end={28} duration={5} />}
                    </div>
                    <div className="text-2xl">
                      Client
                      <br />
                      Collaborations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="teamContainer h-auto flex flex-col mx-auto  sm:px-5 pt-10 w-screen left-">
          <div
            id="teamTitle"
            className="teamWords font-montserrat md:px-20 text-5xl mt-14 2xl:mt-0 mb-3 px-4"
          >
            <h2 className={scrollDetect ? "text-black" : "text-white"}>
              We're creative thinkers
            </h2>
            <h2 className="text-gray-500 md:mt-1">doing work that matters</h2>
          </div>
          <div className="aboutText font-montserrat text-gray-800 pt-4 md:pt-2 pb-2 pr-8 md:px-10 md:leading-6">
            <p className="aboutParagraphs md:mr-20 ml-5 md:ml-10 md:tracking-wider">
              <p>
                Genesis Media is not just a digital agency, we are a
                transformation agency. We transform your business into a brand
                that will revolutionize the way the world sees you.
              </p>
              <br />{" "}
              <p>
                Creating a website and a social media account is not the winning
                recipe anymore. It’s the extra pinch of lasting impression that
                you provide to your clients, that wins you the trophy. That’s
                what we do best at Genesis, we create impactful experiences for
                your clients. We believe that our success lies in the growth of
                your brand.
              </p>
              <br />{" "}
              <p>
                After working with over 30 brands, we've realised that our
                greatest strength is our comprehensive digital approach, which
                is built around the fundamentals of branding and brand commerce
                growth. Making it effortless for brands to collaborate with us
                on everything related to media.
              </p>
            </p>
          </div>
          <div className="counterContainer relative w-screen h-auto">
            <div className="aboutPic md:-ml-5 w-screen mt-5 bg-black">
              <div className="teamPicMob relative w-screen">
                <div className="aboutCounters absolute grid grid-cols-2 gap-x-2 top-0 mt-5  w-screen h-full z-10 text-white">
                  <div
                    ref={elemRef}
                    className="text-7xl flex items-center justify-end pr-5 "
                  >
                    {isVisible && <CountUp start={0} end={26} duration={5} />}
                  </div>
                  <div className="text-2xl flex items-center justify-start -ml-4">
                    Services
                    <br />
                    Offered
                  </div>
                  {isVisible && (
                    <div className="text-7xl flex items-center justify-end pr-5 ">
                      <CountUp start={0} end={40} duration={5} />
                    </div>
                  )}
                  <div className="text-2xl flex items-center justify-start -ml-4">
                    Projects
                    <br />
                    Completed
                  </div>

                  {isVisible && (
                    <div className="text-7xl flex items-center justify-end pr-5">
                      <CountUp start={0} end={28} duration={5} />
                    </div>
                  )}
                  <div className="text-2xl flex items-center justify-start -ml-4">
                    Client
                    <br />
                    Collaborations
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="afterCounter font-montserrat text-gray-800 pt-4 md:pt-2 pb-2 pr-8 md:px-10 mt-5 md:leading-6">
            <p className="aboutParagraphs md:mr-20 ml-5 md:ml-10 md:tracking-wider">
              <p>
                {" "}
                At Genesis, we also obsess over the quality of our work. Our
                creativity is often nurtured by our skills in cutting edge
                technology. Every piece of information we provide to our brands
                is backed by copious amounts of research, data & experience.
              </p>
              <br />{" "}
              <p>
                Come join hands with us as we bring a remarkable change in
                marketing & advertising and make them accessible for businesses
                of all sizes.
              </p>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
