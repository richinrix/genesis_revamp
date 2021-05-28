import React from "react";
import "./CSS/about.css";

function About() {
  return (
    <div id="aboutContainer" className="h-auto w-auto bg-red-400">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        data-aos-offset="200"
        id="aboutFlexContainer"
        class="aboutContainer flex flex-col md:flex-row justify-center items-center bg-transparent h-auto md:h-full mt-10 md:mt-20 md:px-14 md:pr-24 sm:px-5 py-10 md:w-screen flex-shrink-0"
      >
        <div className="aboutText pt-2 pb-2 pr-8">
          <h1 className="aboutHead font-plantc text-5xl md:mr-20 ml-5 md:ml-10  pb-3 md:pb-5 md:pt-16">
            About Us
          </h1>
          <p className="aboutParagraphs md:mr-20 ml-5 md:ml-10 md:tracking-wider	">
            How are we different from the millions of companies out there,
            calling themselves the ‘Best Digital Agency’?
            <br />
            <br /> Genesis Media is not just a digital agency, we are a
            transformation agency. We transform your business into a brand that
            will revolutionize the way the world sees you.
            <br />
            <br /> Creating a website and a social media account is not the
            winning recipe anymore. It’s the extra pinch of lasting impression
            that you provide to your clients, that wins you the trophy. That’s
            what we do best at Genesis, we create impactful experiences for your
            clients. We believe that our success lies in the growth of your
            brand.
            <br />
            <br />
            After working with over 30+ brands, we understand that our greatest
            strength lies in our comprehensive digital approach structured
            around the basics of branding and brand commerce growth. Making it
            effortless for brands to work with us on anything related to media.
            <br />
            <br />
            At Genesis, we also obsess over the quality of our work. Our
            creativity is often nurtured by our skills in cutting edge
            technology. Every piece of information we provide to our brands is
            backed by copious amounts of research, data & experience.
            <br />
            <br />
            Come join hands with us as we bring a remarkable change in marketing
            & advertising and make them accessible for businesses of all sizes.
          </p>
        </div>
        <div className="aboutImg flex flex-row flex-shrink-0 pt-10 md:pt-16">
          <img
            className="ai1"
            src="https://via.placeholder.com/300x500?text=Image1"
          ></img>
          <div className="hidImg flex flex-col md:hidden md:pb-4 flex-shrink-0">
            <img
              class="ai2"
              src="https://via.placeholder.com/300x280?text=Image2"
            ></img>
            <img
              class="ai3"
              src="https://via.placeholder.com/300x200?text=Image3"
            ></img>
          </div>
        </div>
        <div className="aboutCollage hidden md:flex md:flex-col md:p-4 md:flex-shrink-0 md:pt-20 md:-pr-10">
          <div className="aboutImg ai2 md:pb-4 flex-shrink-0">
            <img src="https://via.placeholder.com/300x280?text=Image2"></img>
          </div>
          <div className="aboutImg ai3 flex-shrink-0">
            <img src="https://via.placeholder.com/300x200?text=Image3"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
