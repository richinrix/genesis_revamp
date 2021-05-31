import React, { useState, useEffect } from "react";
import handleViewport from "react-in-viewport";
// image
import linesImg from "../../images/icons/services-line-and-dots.png";
// other modules
import { Parallax } from "react-scroll-parallax";
import ReactPlayer from "react-player/lazy";
import "../../App.css";

const ServiceCard = (props) => {
  const { inViewport, forwardedRef, service, index } = props;
  let imagePos = index % 2 === 0 ? "right" : "left";
  let descriptionClassname = "flex  flex-col-reverse mt-5 justify-center ";
  if (imagePos === "right") descriptionClassname += " md:flex-row";
  else descriptionClassname += " md:flex-row-reverse";
  let headingClassname = "mx-auto  md:mt-10 text-center font-plantc text-5xl ";

  const [videoPlayState, setPlayState] = useState(false);
  const isPhone = window.innerWidth < 700;

  // playing video  when in view
  useEffect(() => {
    inViewport ? setPlayState(true) : setPlayState(false);
  }, [inViewport]);

  // aos styling settings for points
  let servicePoint = {
    duration: "600",
    offset: "100",
    easing: "linear",
  };

  function yellowRectangle(floatPos, phone = false) {
    let classname = floatPos === "left" ? " ml-10 " : " mr-10 ";
    let floatDirection = floatPos === "right" ? "right" : "left";
    let style = {
      // backgroundColor: "#ffd805",
      backgroundColor: "#FFE450",
      float: floatDirection,
    };
    if (!phone) return <div id="yellowRectangle" style={style}></div>;
    else
      return (
        <div id="yellowRectangle" className={classname} style={style}></div>
      );
  }
  // video element
  function videoCard(video, YTvideo, classname, xval, xvalPh) {
    const YTsrc = YTvideo ? YTvideo + "?autoplay=1&mute=1" : "";
    const className = classname;
    //  + " md:bg-black ";

    return !isPhone ? (
      <Parallax x={xval} className=" md:block hidden ">
        <ReactPlayer
          ref={forwardedRef}
          id="servicesImage"
          className={className}
          url={video ? video : YTsrc}
          controls={true}
          width="80%"
          playIcon
          loop={true}
          playing={videoPlayState}
        />
      </Parallax>
    ) : (
      <Parallax x={xvalPh} className="  block">
        <ReactPlayer
          ref={forwardedRef}
          id="servicesImage"
          className={classname}
          url={video ? video : YTsrc}
          width="80%"
          height={"280px"}
          loop={true}
          playing={videoPlayState}
          controls={!video ? true : false}
        />
      </Parallax>
    );
  }
  // image element
  function imageSection(image_path, video, YTvideo, floatPos, points) {
    const imageStyle = {
      backgroundImage: `url('${image_path}')`,
      backgroundRepeat: "no-repeat",
    };

    let containerClassname = "relative  ";
    containerClassname += points > 5 ? " md:mt-14 " : " ";
    if (floatPos === "right") containerClassname += " md:mr-20";
    else containerClassname += " md:ml-20";

    let imageClassname = "absolute  z-10 ";
    if (floatPos === "right") imageClassname += "md:right-24 right-6 top-10 ";
    else imageClassname += "md:left-24 left-6  md:top-16 top-10 ";

    // parallax effect values for desktop and phone
    const yellowRectXval = floatPos === "left" ? [-20, 10] : [20, -10];
    const yellowRectXvalPh = floatPos === "left" ? [-20, 10] : [20, -10];
    const imageXval = floatPos === "left" ? [-10, 5] : [10, -5];
    const imageXvalPh = floatPos === "left" ? [-10, 10] : [10, -10];

    return (
      <div className={containerClassname}>
        {!isPhone ? (
          <Parallax x={yellowRectXval} className="md:block hidden ">
            {yellowRectangle(floatPos)}
          </Parallax>
        ) : (
          <Parallax x={yellowRectXvalPh} className="md:hidden block ">
            {yellowRectangle(floatPos)}
          </Parallax>
        )}

        {image_path ? (
          <>
            {!isPhone ? (
              <Parallax x={imageXval} className="md:block hidden">
                <div
                  id="servicesImage"
                  className={imageClassname}
                  style={imageStyle}
                ></div>
              </Parallax>
            ) : (
              <Parallax x={imageXvalPh} className="md:hidden block">
                <div
                  id="servicesImage"
                  className={imageClassname}
                  style={imageStyle}
                ></div>
              </Parallax>
            )}
          </>
        ) : (
          videoCard(video, YTvideo, imageClassname, imageXval, imageXvalPh)
        )}
      </div>
    );
  }
  function description(desc) {
    return (
      <div className="font-plantc md:text-2xl text-xl mx-auto text-gray-500 md:leading-7 leading-5">
        {desc}
      </div>
    );
  }
  function servicePoints(point, index, length) {
    let className = "pl-5 font-helvetica ";
    if (length > 5) className += " lg:py-1.5 py-1.5 ";
    else className += " lg:py-2.5 py-2 ";

    return (
      <div>
        <img src={linesImg} alt="" className="absolute" />
        <li
          className={className}
          data-aos="slide-up"
          data-aos-easing={servicePoint.easing}
          data-aos-duration={servicePoint.duration}
          data-aos-offset={servicePoint.offset}
          key={index}
        >
          {point}
        </li>
      </div>
    );
  }
  // text section
  function textSection(desc, points, position) {
    // parallax effect values for description depending on no. of points
    let descXval = position === "right" ? [-20, 19] : [25, -10];
    if (points.length > 7)
      descXval = position === "right" ? [-20, 13] : [20, -8];
    if (position === "right" && points.length > 8) {
      descXval = [-20, 15];
    }

    return (
      <div
        className={
          " flex-col content-center items-center h-min my-auto   mx-auto  md:w-3/4 px-5 "
        }
      >
        <Parallax className={"w-11/12  md:block "} x={descXval}>
          {description(desc)}
        </Parallax>
        <div className="flex  my-auto pt-5">
          <ul className="ml-4 my-auto">
            {points.map((point, index) =>
              servicePoints(point, index, points.length)
            )}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className=" md:h-screen h-full   " id="proximity-snap">
        <div className="mx-auto p-5 my-auto">
          <div className={headingClassname}>
            <h2>{service.heading}</h2>
          </div>
          <div className={descriptionClassname}>
            <div className="lg:w-3/6 flex content-center">
              {textSection(service.description, service.points, imagePos)}
            </div>
            <div className="md:w-4/6 lg:mb-0 mb-4">
              {imageSection(
                service.image,
                service.video,
                service.YTvideo,
                imagePos,
                service.points.length
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ViewportBlock = handleViewport(ServiceCard);
const ServiceCardComp = (props) => (
  <ViewportBlock service={props.service} index={props.index} />
);

export default React.memo(ServiceCardComp);
