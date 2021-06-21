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
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

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
      className="md:h-auto my-20 md:mt-32 mx-auto  3xl:h-full "
      style={{ maxWidth: "1600px" }}
    >
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
            className=" mx-auto md:my-2 mt-8 mb-0 overflow-hidden lg:hidden  "
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
          spaceBetween={-150}
          autoplay={{
            delay: 4000,
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
          className="h-full mx-auto  my-8 lg:block hidden  overflow-hidden "
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
