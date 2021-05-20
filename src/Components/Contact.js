import React from "react";
import "./CSS/contact.css";
import circles from "../images/contact.png";

function Contact() {
  return (
    <div id="contactContainer" className="h-screen">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="contactFlexContainer flex flex-row bg-yellow-400 justify-between overflow-hidden"
      >
        <div className="contactForm pl-20 w-3/5">
          <h2 className="font-plantc text-5xl pb-2">Get in touch</h2>
          <p className="pb-5">
            You have your craft. We have ours.
            <br />
            And that's bringing creative people together.
          </p>
          <p className="font-medium pb-2">What can we help you with?</p>
          <div className="contactChecks grid grid-cols-3 gap-1 pb-6">
            <div className="checkItem">
              <input type="checkbox" id="fWebsite" value="fWebsite" />
              <label for="fWebsite">Website</label>
            </div>

            <div className="checkItem">
              <input type="checkbox" id="fUI" name="fUI" value="fUI" />
              <label for="fUI">UI Design</label>
            </div>

            <div className="checkItem">
              <input type="checkbox" id="fLogo" name="fLogo" value="fLogo" />
              <label for="fLogo"> Logo Design</label>
            </div>

            <div className="checkItem">
              <input type="checkbox" id="fGraphics" value="fGraphics" />
              <label for="fGraphics">Graphic Design</label>
            </div>

            <div className="checkItem">
              <input type="checkbox" id="fMarketing" value="fMarketing" />
              <label for="fMarketing">Marketing</label>
            </div>

            <div className="checkItem">
              <input type="checkbox" id="fBrandBook" value="fBrandBook" />
              <label for="fBrandBook">Brand Book</label>
            </div>

            <div className="checkItem">
              <input type="checkbox" id="fBrand" name="fBrand" value="fBrand" />
              <label for="fBrand">Branding</label>
            </div>

            <div className="checkItem">
              <input type="checkbox" id="fSEO" name="fSEO" value="fSEO" />
              <label for="fSEO">SEO</label>
            </div>

            <div className="checkItem">
              <input type="checkbox" id="fOther" name="fOther" value="fOther" />
              <label for="fOther">Other</label>
            </div>
          </div>
          <div className="contactFields flex flex-col h-36 mb-4">
            <input
              className="pb-1 mb-2"
              type="text"
              id="fname"
              placeholder="Name"
            />
            <input
              className="pb-1 mb-2"
              type="email"
              id="fmail"
              placeholder="E-mail"
            />
            <input
              className="pb-1 mb-2"
              type="number"
              id="fphone"
              placeholder="Phone Number"
            />
            <input
              className="pb-1 mb-2"
              type="textarea"
              id="fmessage"
              placeholder="Message"
            />
          </div>
          <button class="btn btn-1 hover-filled-opacity">
            <span>Submit</span>
          </button>
        </div>
        <div className="circles w-screen">
          <img className="contactCircles ml-96 pl-24" src={circles}></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;
