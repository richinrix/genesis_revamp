import React, { useState, useEffect } from "react";
// services
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
  const [testimonials, setTestimonials] = useState();
  const isPhone = window.innerWidth < 700;

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    await fetch(API.testimonials).then((res) =>
      res.json().then((info) => setTestimonials(info))
    );
  };

  // displaying the current three cards
  function currenDesktoptView(cards, index) {
    return (
      <SwiperSlide className="mx-auto md:my-auto my-8 lg:flex hidden md:flex-row  justify-center items-center">
        {<TestimonialCard testimonial={cards} index={index} isPhone={false} />}
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
    <div className="proximity-snap">
      {isPhone ? (
        <Swiper
          id="testimonials"
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={true}
          className=" mx-auto md:my-2 mt-8 mb-0 overflow-hidden lg:hidden  "
        >
          {testimonials &&
            testimonials.map((testimonial, index) =>
              currentPhoneView(testimonial, index)
            )}
        </Swiper>
      ) : (
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
          className="h-full mx-auto md:my-14 my-8 lg:block hidden  overflow-hidden "
        >
          {testimonials &&
            testimonials.map((testimonial, index) =>
              currenDesktoptView(testimonial, index)
            )}
        </Swiper>
      )}
    </div>
  );
}
