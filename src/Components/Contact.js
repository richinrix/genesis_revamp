import React, { useState } from "react";
import "./CSS/animation.css";
import "./CSS/component.css";
import circles from "../images/contact.png";
import axios from "axios";
import API from "./services/API";

function Contact() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    mail: "",
    phno: "",
    msg: "",
    error: {
      name: "Enter a vaild name",
      mail: "Enter a vaild email address",
      phno: "Enter a vaild phone number",
      msg: "Enter a vaild message",
    },
  });
  const [checkz, setCheckz] = useState([]);
  const [borderColor, setBorderColor] = useState("gray");
  const [bordWidth, setBordWidth] = useState(1);

  //Adds list of checked items to an array
  const addInterest = (item) => {
    setCheckz([...checkz, { id: checkz.length, name: item }]);
  };

  let changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    const validateContactEmail = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const validateContactphone = RegExp(/^\d{10}$/i);

    switch (nam) {
      case "name":
        setFormDetails((prevState) => ({
          ...prevState,
          error: {
            ...prevState.error,
            name: val.length < 2 ? "Enter a vaild name!" : "",
          },
        }));
        break;

      case "mail":
        setFormDetails((prevState) => ({
          ...prevState,
          error: {
            ...prevState.error,
            mail: validateContactEmail.test(val)
              ? ""
              : "Enter a valid email address!",
          },
        }));
        break;

      case "phno":
        setFormDetails((prevState) => ({
          ...prevState,
          error: {
            ...prevState.error,
            phno: validateContactphone.test(val)
              ? ""
              : "Enter a valid phone number!",
          },
        }));
        break;

      case "msg":
        setFormDetails((prevState) => ({
          ...prevState,
          error: {
            ...prevState.error,
            msg: val.length < 5 ? "Enter a valid message!" : "",
          },
        }));
        break;
      default:
        break;
    }

    setFormDetails((prevState) => ({ ...prevState, [nam]: val }));
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formDetails.errors);
    const validateForm = (errors) => {
      let valid = true;
      Object.keys(errors).forEach((key) => {
        if (errors[key].length !== 0 && valid === true) {
          alert(errors[key]);
          valid = false;
        }
      });
      if (checkz.length < 1) {
        alert("Select atleast one Service");
        valid = false;
      }
      return valid;
    };
    if (validateForm(formDetails.error)) {
      axios.post(API.contactSheet, {
        data: [
          {
            Name: formDetails.name,
            Mail: formDetails.mail,
            PhNo: formDetails.phno,
            Message: formDetails.msg,
            Interests: checkz,
            Date: new Date().toLocaleString(),
          },
        ],
      });
      setBorderColor("green"); //Changes field border color to green
      setBordWidth(2); //Increases field vorder size
      alert("Details Submitted!");
      setCheckz("");

      // Reset checkboxes and fields
      document.getElementById("cForm").reset();
      document.getElementById("name").placeholder = "Name";
      document.getElementById("mail").placeholder = "Email";
      document.getElementById("phno").placeholder = "Phone Number";
      document.getElementById("msg").placeholder = "Message";

      console.info("Valid Form");
    } else {
      setBorderColor("red");
      setBordWidth(2);
      console.error("Invalid Form");
    }
  };

  return (
    <div id="contactContainer" className=" h-auto md:mt-20  ">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="contactFlexContainer flex  justify-between items-center overflowY-hidden h-100"
      >
        <form
          id="cForm"
          className="contactForm md:h-auto  pt-8 md:pt-0 md:-mt-44 px-5 md:pl-24 md:w-3/5 w-screen text-center md:text-left"
        >
          <h2 className="font-plantc text-5xl md:text-6xl pb-2 md:pb-4 md:-mt-0">
            Get in Touch
          </h2>
          <p className="contactCraft pb-5 md:text-lg">
            You have your craft. We have ours.
            <br />
            And that's bringing creative people together.
          </p>
          <p className="contactHelpYou font-medium text-xl pb-2 pt-4 md:pt-0">
            What can we help you with?
          </p>
          <div className="contactChecks text-left grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-1 pb-6 md:font-light pl-4 md:pl-0 pt-2 md:pt-0 text-xl md:text-base">
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
                id="fGraphics"
                value="Graphics"
                onChange={(e) => addInterest(e.target.value)}
              />
              <label for="fGraphics">Graphic Design</label>
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
          <div className="contactFields flex flex-col md:h-auto mb-4 md:mb-5  pl-4 md:pl-0 pt-2 md:pt-0 text-xl md:text-lg">
            <input
              className="pb-1 mb-2 border-none"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              style={{ borderColor: borderColor, borderWidth: bordWidth }}
              onChange={(event) => {
                changeHandler(event);
              }}
            />
            <input
              className="pb-1 mb-2 border-none"
              type="email"
              id="mail"
              name="mail"
              placeholder="E-Mail"
              style={{ borderColor: borderColor, borderWidth: bordWidth }}
              onChange={(event) => {
                changeHandler(event);
              }}
            />
            <input
              className="pb-1 mb-2 border-none"
              type="number"
              id="phno"
              name="phno"
              style={{ borderColor: borderColor, borderWidth: bordWidth }}
              placeholder="Phone Number"
              onChange={(event) => {
                changeHandler(event);
              }}
            />
            <input
              className="msgContact pb-1 mb-2 outline-none bg-transparent border-solid border-b"
              type="textarea"
              id="msg"
              name="msg"
              style={{ borderColor: borderColor, borderWidth: bordWidth }}
              placeholder="Message"
              onChange={(event) => {
                changeHandler(event);
              }}
            />
          </div>
          <button
            className="btn btn-white btn-animate uppercase no-underline	inline-block font-bold"
            type="submit"
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            Submit
          </button>
        </form>
        <div className="circles md:w-screen md:block hidden">
          <img
            className="contactCircles none md:inline-block ml-60 md:-mt-30 "
            src={circles}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;
