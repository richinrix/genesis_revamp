import React from "react";

function About() {
  return (
    <div id="aboutContainer" className="h-screen w-auto">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        data-aos-offset="200"
        id="aboutFlexContainer"
        class="aboutContainer flex flex-row justify-center items-center bg-transparent h-auto md:h-full mx-auto mt-20 md:px-10 sm:px-5 py-10 w-5/6 flex-shrink-0"
      >
        <div className="aboutText p-2 pr-20">
          <h1 className="font-plantc text-5xl pb-5 pt-10">About Us</h1>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            totam expedita impedit voluptatem obcaecati harum dignissimos quae
            delectus, quam accusantium iusto, facilis sequi facere dolor ab qui
            provident nostrum perferendis at. Explicabo, distinctio soluta
            aliquid qui placeat ipsum. Natus aperiam velit quos ea! Distinctio
            ullam facilis ut quia dolor repellendus dolorem enim quis saepe
            doloremque sed.Natus aperiam velit quos ea! Distinctio ullam facilis
            ut quia dolor repellendus dolorem enim quis saepe doloremque sed.
            Distinctio ullam facilis ut quia dolor repellendus dolorem enim quis
            saepe doloremque sed.Natus aperiam velit quos ea! Distinctio ullam
            facilis ut quia dolor repellendus dolorem enim quis saepe doloremque
            sed. Distinctio ullam facilis ut quia dolor repellendus dolorem enim
            quis saepe doloremque sed.
          </p>
        </div>
        <div className="aboutImg ai1 flex-shrink-0 pt-10">
          <img src="https://via.placeholder.com/300x500?text=Image1"></img>
        </div>
        <div className="aboutCollage flex flex-col p-1 flex-shrink-0 pt-12 -pr-10">
          <div className="aboutImg ai2 pb-1 flex-shrink-0">
            <img src="https://via.placeholder.com/300x300?text=Image2"></img>
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
