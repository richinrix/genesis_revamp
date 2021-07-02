import React, { useState, useEffect, useRef } from "react";
// services
import API from "./services/API";
// other component
import TestimonialCard from "./Essentials/TestimonialCard";
import useVisible from "./Hooks/useIsVisible";
// carousel
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState();
  const [slideDelay, setSlideDelay] = useState(2000);
  const isPhone = window.innerWidth < 700;
  // Constants for custom Hook
  const elemRef = useRef();
  const isVisible = useVisible(elemRef);

  useEffect(() => {
    getData();
  }, []);
  // const toggleAutoPlay = () => {
  //   console.log("scrolling");
  //   setSlideDelay(5000);
  // };
  // window.addEventListener("scroll", toggleAutoPlay);

  // useEffect(() => {
  //   if (isVisible === true) {
  //     toggleAutoPlay();
  //     console.log(isVisible);
  //   }
  // }, [isVisible]);

  let getData = async () => {
    await fetch(API.testimonials).then((res) =>
      res.json().then((info) => setTestimonials(info))
    );
  };

  // displaying the current three cards
  function currentView(cards, index) {
    return (
      <SwiperSlide className="mx-auto md:my-auto my-8 lg:flex  md:flex-row  justify-center items-center">
        {
          <TestimonialCard
            testimonial={cards}
            index={index}
            isPhone={isPhone}
          />
        }
      </SwiperSlide>
    );
  }
  function currentPhoneView(cards, index) {
    return (
      <SwiperSlide className="mx-auto md:my-auto my-8 md:flex-row  justify-center items-center">
        {<TestimonialCard testimonial={cards} index={index} isPhone={true} />}
      </SwiperSlide>
    );
  }
  return (
    <div
      className=" md:my-18  mx-auto focus:3xl:h-full "
      style={{ maxWidth: "1600px" }}
      // ref={elemRef}
    >
      <h2 className=" text-center  md:my-10 my-5 font-lato md:text-5xl text-4xl ">
        Testimonials
      </h2>

      {isPhone ? (
        // phone version
        <>
          <Swiper
            id="testimonials"
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            className=" mx-auto md:my-auto  mb-0 overflow-hidden lg:hidden  "
          >
            {testimonials &&
              testimonials
                .slice(0, 5)
                .map((testimonial, index) => currentView(testimonial, index))}
          </Swiper>
        </>
      ) : (
        // desktop version
        <Swiper
          slidesPerView={3}
          spaceBetween={-140}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          loop={true}
          navigation={true}
          id="testimonials"
          className="  mx-auto my-auto  mb-8 lg:block hidden  overflow-hidden "
        >
          {testimonials &&
            testimonials.map((testimonial, index) =>
              currentView(testimonial, index)
            )}
        </Swiper>
      )}
    </div>
  );
}
