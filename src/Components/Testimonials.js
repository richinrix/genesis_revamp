import React, { useState, useEffect } from "react";
// services
import IMAGES from "./services/IMAGES";
import API from "./services/API";
// other component
import TestimonialCard from "./Essentials/TestimonialCard";
// carousel
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Testimonials() {
  const [startCard, setStartCard] = useState(0);
  const [testimonials, setTestimonials] = useState();

  // aos animation
  const cardContainer = {
    duration: "1300",
    offset: "200",
  };

  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    // const { data: info } = await axios.get(API.testimonails);
    // setTestimonials(info);

    await fetch(API.testimonials).then((res) =>
      res.json().then((info) => setTestimonials(info))
    );
  };

  function card(testimonial, index) {
    // quote and footer color
    let className =
      "relative mx-10 my-3 p-10 text-center flex h-screen flex-col justify-between overflow-hidden";
    let image, footerImg;
    if (index === 0) {
      image = IMAGES.leftQuoteGreen;
      footerImg = IMAGES.testimonialBottomGreen;
    } else if (index === 1) {
      image = IMAGES.leftQuotePurple;
      footerImg = IMAGES.testimonialBottomPurple;
    } else if (index === 2) {
      image = IMAGES.leftQuoteBlue;
      footerImg = IMAGES.testimonialBottomBlue;
    }
    className = testimonial.index < 4 ? className + " active" : className + "";
    return (
      <div
        id="testimonial-card"
        className={className}
        style={{
          height: "450px",
          width: "330px",
        }}
      >
        <img
          id="quoteImg"
          className="absolute"
          src={image}
          style={{ width: "25px" }}
          alt=""
        />

        <div className="mt-10 leading-snug overflow-hidden">
          {testimonial.statement}
        </div>

        <div
          id="name "
          className="  flex flex-col mb-5"
          style={{ bottom: "30px", zIndex: "10" }}
        >
          {/* profile image  */}
          <div
            className="bg-gray-500 mx-auto"
            style={{
              borderRadius: "50%",
              height: "96px",
              width: "96px",
              border: "8px solid white",
              backgroundImage: `url('${testimonial.image}')`,
            }}
          />
          <h2 className="text-white">{testimonial.name}</h2>
        </div>
        <div
          className="absolute"
          style={{
            backgroundImage: `url('${footerImg}')`,
            backgroundRepeat: "no-repeat",
            width: "440px",
            height: "248px",
            zIndex: "1",
            bottom: "-80px",
            left: "-62px",
          }}
        ></div>
      </div>
    );
  }
  // displaying the current three cards
  function currenDesktoptView(cards, index) {
    return (
      <SwiperSlide className="mx-auto md:my-auto my-8 lg:flex hidden md:flex-row  justify-center items-center">
        {<TestimonialCard testimonial={cards} index={index} />}
      </SwiperSlide>
    );
  }
  function currentPhoneView(cards, index) {
    return (
      <SwiperSlide className="mx-auto md:my-auto my-8 md:flex-row  justify-center items-center">
        {<TestimonialCard testimonial={cards} index={index} />}
      </SwiperSlide>
    );
  }
  return (
    <div className="proximity-snap">
      {/* phone view */}
      <Swiper
        id="testimonials"
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={false}
        // data-aos="slide-right"
        className=" mx-auto md:my-2 my-8 overflow-hidden lg:hidden flex"
      >
        {testimonials &&
          testimonials.map((testimonial, index) =>
            currentPhoneView(testimonial, index)
          )}
      </Swiper>
      {/* desktop view */}
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        loop={true}
        navigation={true}
        id="testimonials"
        // data-aos="slide-right"
        // data-aos-duration={cardContainer.duration}
        // data-aos-offset={cardContainer.offset}
        className="md:h-screen mx-auto md:my-auto my-8 lg:flex hidden md:flex-row flex-col justify-center items-center overflow-hidden "
      >
        {testimonials &&
          testimonials.map((testimonial, index) =>
            currenDesktoptView(testimonial, index)
          )}
      </Swiper>
    </div>
  );
}
