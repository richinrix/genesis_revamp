import React, { useState } from "react";
import "./CSS/contact.css";
import circles from "../images/contact.png";
import axios from "axios";
import API from "./services/API";

function Contact() {
  const url = API.contactSheet;
  const sheetdb = require("sheetdb-node");
  const [data, setdata] = useState({
    name: "",
    mail: "",
    phno: "",
    msg: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();
    console.log([
      {
        name: data.name,
        mail: data.mail,
        phno: parseInt(data.phno),
        msg: data.msg,
      },
    ]);
    axios
      .post(url, {
        name: data.name,
        mail: data.mail,
        phno: parseInt(data.phno),
        msg: data.msg,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <div id="contactContainer" className="h-screen">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="contactFlexContainer flex justify-between overflowY-hidden"
      >
        <form
          className="contactForm h-screen pt-28 md:pt-24 px-5 md:pl-20 md:w-3/5 w-auto"
          onSubmit={(e) => submit(e)}
        >
          <h2 className="font-plantc text-5xl pb-2">Get in touch</h2>
          <p className="pb-5">
            You have your craft. We have ours.
            <br />
            And that's bringing creative people together.
          </p>
          <p className="contactHelpYou font-medium pb-2">
            What can we help you with?
          </p>
          <div className="contactChecks text-left grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-1 pb-6">
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
              <label for="fLogo">Logo Design</label>
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
          <div className="contactFields flex flex-col md:h-36 mb-4">
            <input
              className="pb-1 mb-2"
              type="text"
              id="name"
              placeholder="Name"
              value={data.name}
              onChange={(e) => handle(e)}
            />
            <input
              className="pb-1 mb-2"
              type="email"
              id="mail"
              placeholder="E-mail"
              value={data.mail}
              onChange={(e) => handle(e)}
            />
            <input
              className="pb-1 mb-2"
              type="number"
              id="phno"
              placeholder="Phone Number"
              value={data.phno}
              onChange={(e) => handle(e)}
            />
            <input
              className="pb-1 mb-2"
              type="textarea"
              id="msg"
              placeholder="Message"
              value={data.msg}
              onChange={(e) => handle(e)}
            />
          </div>
          <button type="submit" class="btn btn-1 hover-filled-opacity">
            <span>Submit</span>
          </button>
        </form>
        <div className="circles md:w-screen">
          <img
            className="contactCircles none md:inline-block ml-64"
            src={circles}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;
