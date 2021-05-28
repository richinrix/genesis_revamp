import React, { useState } from "react";
import "./CSS/contact.css";
import circles from "../images/contact.png";
import axios from "axios";
import API from "./services/API";

function Contact() {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [msg, setMsg] = useState("");
  const [checkz, setCheckz] = useState([]);
  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const [borderColor, setBorderColor] = useState("gray");
  const [submitted, setSubmitted] = useState(false);

  const addInterest = (item) => {
    setCheckz([...checkz, { id: checkz.length, name: item }]);
  };

  function validateContactEmail(mail) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  }
  function validateContactphone(phno) {
    const tenPhno = /^\d{10}$/;
    return tenPhno.test(phno);
  }

  function contactHandler(e) {
    e.preventDefault();
    if (validateContactEmail(mail) && validateContactphone(phno)) {
      setValidEmail(true);
      setValidPhone(true);
      setBorderColor("gray");
      e.target.value = null;
      axios.post(API.contactSheet, {
        data: [
          {
            Name: name,
            Mail: mail,
            PhNo: phno,
            Message: msg,
            Interests: checkz,
            Date: new Date().toLocaleString(),
          },
        ],
      });
      setBorderColor("green");
      setSubmitted(true);
      setCheckz("");
    } else {
      setBorderColor("red");
      setValidEmail(false);
      setSubmitted(false);
      setSubmitted(false);
    }
  }

  return (
    <div id="contactContainer" className="h-screen">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="contactFlexContainer flex justify-between overflowY-hidden"
      >
        <form className="contactForm h-screen pt-8 md:pt-24 px-5 md:pl-24 md:w-3/5 w-screen">
          <h2 className="font-plantc text-5xl md:text-6xl pb-2 md:pb-4">
            Get in Touch
          </h2>
          <p className="contactCraft pb-5 md:text-lg">
            You have your craft. We have ours.
            <br />
            And that's bringing creative people together.
          </p>
          <p className="contactHelpYou font-medium md:text-xl pb-2">
            What can we help you with?
          </p>
          <div className="contactChecks text-left grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-1 pb-6">
            <div className="checkItem">
              <input
                type="checkbox"
                id="fWebsite"
                value="Website"
                onChange={(e) => addInterest(e.target.value)}
              />
              <label for="fWebsite">Website</label>
            </div>

            <div className="checkItem">
              <input
                type="checkbox"
                id="fUI"
                name="fUI"
                value="UI"
                onChange={(e) => addInterest(e.target.value)}
              />
              <label for="fUI">UI Design</label>
            </div>

            <div className="checkItem">
              <input
                type="checkbox"
                id="fMarketing"
                value="Marketing"
                onChange={(e) => addInterest(e.target.value)}
              />
              <label for="fMarketing">Marketing</label>
            </div>

            <div className="checkItem">
              <input
                type="checkbox"
                id="fGraphics"
                value="Graphics"
                onChange={(e) => addInterest(e.target.value)}
              />
              <label for="fGraphics">Graphic Design</label>
            </div>

            <div className="checkItem">
              <input
                type="checkbox"
                id="fLogo"
                name="fLogo"
                value="Logo"
                onChange={(e) => addInterest(e.target.value)}
              />
              <label for="fLogo">Logo Design</label>
            </div>

            <div className="checkItem">
              <input
                type="checkbox"
                id="fBrandBook"
                value="BrandBook"
                onChange={(e) => addInterest(e.target.value)}
              />
              <label for="fBrandBook">Brand Book</label>
            </div>

            <div className="checkItem">
              <input
                type="checkbox"
                id="fBrand"
                name="fBrand"
                value="Branding"
                onChange={(e) => addInterest(e.target.value)}
              />
              <label for="fBrand">Branding</label>
            </div>

            <div className="checkItem">
              <input
                type="checkbox"
                id="fSEO"
                name="fSEO"
                value="SEO"
                onChange={(e) => addInterest(e.target.value)}
              />
              <label for="fSEO">SEO</label>
            </div>

            <div className="checkItem">
              <input
                type="checkbox"
                id="fOther"
                name="fOther"
                value="Other"
                onChange={(e) => addInterest(e.target.value)}
              />
              <label for="fOther">Other</label>
            </div>
          </div>
          <div className="contactFields flex flex-col md:h-auto mb-4">
            <input
              className="pb-1 mb-2"
              type="text"
              id="name"
              placeholder={name === "" && "Name"}
              style={{ borderColor: borderColor }}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="pb-1 mb-2"
              type="email"
              id="mail"
              placeholder={mail === "" && "E-Mail"}
              style={{ borderColor: borderColor }}
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              className="pb-1 mb-2"
              type="number"
              id="phno"
              style={{ borderColor: borderColor }}
              placeholder={phno === "" && "Phone Number"}
              onChange={(e) => setPhno(e.target.value)}
            />
            <input
              className="msgContact pb-1 mb-2"
              type="textarea"
              id="msg"
              style={{ borderColor: borderColor }}
              placeholder={msg === "" && "Message"}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <button
            class="btn btn-white btn-animate"
            type="submit"
            onClick={(e) => contactHandler(e)}
          >
            Submit
          </button>
          {/* {!validEmail && !validPhone && (
            <h6
              className="absolute text-lg ml-4 -mt-20 md:ml-24 md:-mt-11 "
              style={{ color: "red" }}
            >
              Check the fields again
            </h6>
          )}
          {submitted && (
            <h6
              className="subGreen absolute text-lg right-24  -mt-20 md:mt-0 md:ml-24 md:bottom-8 w-60 md:w-auto"
              style={{ color: "green" }}
            >
              You details are Submitted!
            </h6>
          )} */}
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
