import React, { useEffect, useState } from "react";
import "./CSS/team.css";

function About() {
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
    <div id="teamCall" className="h-screen md:h-auto w-auto ">
      <div className="teamContainer md:h-auto flex flex-col mx-auto  sm:px-5 py-10 w-screen ">
        <div
          id="teamTitle"
          className="teamWords font-plantc md:px-20 text-5xl mt-14 md:mt-4 mb-3 ml-0 "
        >
          <h2 className={scrollDetect ? "text-black" : "text-white"}>
            We're creative thinkers
          </h2>
          <h2 className="text-gray-500 md:mt-1">doing work that matters</h2>
        </div>
        <div className="aboutText pt-2 pb-2 pr-8 md:px-10 md:leading-8">
          <p className="aboutParagraphs md:mr-20 ml-5 md:ml-10 md:tracking-wider	color-">
            How are we different from the millions of companies out there,
            calling themselves the ‘Best Digital Agency’?
            <br />
            Genesis Media is not just a digital agency, we are a transformation
            agency. We transform your business into a brand that will
            revolutionize the way the world sees you. Creating a website and a
            social media account is not the winning recipe anymore. It’s the
            extra pinch of lasting impression that you provide to your clients,
            that wins you the trophy. That’s what we do best at Genesis, we
            create impactful experiences for your clients. We believe that our
            success lies in the growth of your brand.
            <br />
            After working with over 30+ brands, we understand that our greatest
            strength lies in our comprehensive digital approach structured
            around the basics of branding and brand commerce growth. Making it
            effortless for brands to work with us on anything related to media.
            <br />
            At Genesis, we also obsess over the quality of our work. Our
            creativity is often nurtured by our skills in cutting edge
            technology. Every piece of information we provide to our brands is
            backed by copious amounts of research, data & experience. Come join
            hands with us as we bring a remarkable change in marketing &
            advertising and make them accessible for businesses of all sizes.
          </p>
        </div>
        <div className="aboutPic -ml-5 w-screen bg-yellow-300">
          <img src="https://res.cloudinary.com/zarry/image/upload/v1622608146/Genesis%20Revamp/imageedit_162_4941086202_uyj96d.jpg"></img>
          <div className="counters flex row">
            <div></div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default About;
