import React, { useState, useEffect } from "react";
import handleViewport from "react-in-viewport";
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

const Testimonials = ({ inViewport, forwardedRef }) => {
  const [testimonials, setTestimonials] = useState();
  const [autoPlay, setAutoPlay] = useState(false);
  const [shown, setShown] = useState(false);
  const isPhone = window.innerWidth < 800;

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (inViewport && !shown) {
      setAutoPlay(true);
      setShown(true);
    } else if (!shown) setAutoPlay(false);
    else setAutoPlay(true);
  }, [inViewport]);

  let getData = async () => {
    await fetch(API.testimonials).then((res) =>
      res.json().then((info) => setTestimonials(info))
    );
  };

  // displaying the current three cards
  function currentView(cards, index) {
    return (
      <SwiperSlide className=" md:my-auto my-8 lg:flex  md:flex-row  justify-center items-center ">
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
      <SwiperSlide className="mx-auto md:my-auto my-8 md:flex-row justify-center items-center">
        {<TestimonialCard testimonial={cards} index={index} isPhone={true} />}
      </SwiperSlide>
    );
  }
  return (
    <div
      className="  md:my-10  mx-auto   3xl:h-full  h-full "
      style={{ maxWidth: "1600px" }}
      ref={forwardedRef}
    >
      <div className="my-auto ">
        <div className=" text-center  my-5  font-montserrat md:text-5xl text-4xl ">
          Testimonials
        </div>

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
              className=" mx-auto md:my-auto  mb-0 overflow-hidden lg:hidden   "
            >
              {testimonials &&
                testimonials
                  .slice(0, 5)
                  .map((testimonial, index) => currentView(testimonial, index))}
            </Swiper>
          </>
        ) : // desktop version
        autoPlay ? (
          <div className=" w-11/12 overflow-hidden mx-auto ">
            <Swiper
              slidesPerView={3}
              // spaceBetween={-140}
              spaceBetween={-30}
              autoplay={{
                delay: 5000,
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
              className="  mx-auto  md:block hidden   "
            >
              {testimonials &&
                testimonials.map((testimonial, index) =>
                  currentView(testimonial, index)
                )}
            </Swiper>
          </div>
        ) : (
          <div className=" text-3xl text-center py-56  ">{"   "}</div>
          // <Swiper
          //   slidesPerView={3}
          //   spaceBetween={-140}
          //   navigation={true}
          //   id="testimonials"
          //   className="  mx-auto my-auto  mb-8 lg:block hidden  overflow-hidden "
          // >
          //   {testimonials &&
          //     testimonials
          //       .slice(0, 1)
          //       .map((testimonial, index) => currentView(testimonial, index))}
          // </Swiper>
        )}
      </div>
    </div>
  );
};
const ViewportBlock = handleViewport(Testimonials);

const TestimonialComp = (props) => <ViewportBlock />;
export default TestimonialComp;
