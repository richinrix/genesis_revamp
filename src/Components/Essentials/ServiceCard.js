import React from "react";
// import handleViewport from "react-in-viewport";
import linesImg from "../../images/icons/services-line-and-dots-new.png";
import linesImgBlack from "../../images/icons/services-line-and-dots-new.png";
// other modules
import { Parallax } from "react-scroll-parallax";

const ServiceCard = (props) => {
  const { service, index } = props;
  let imagePos = index % 2 === 0 ? "right" : "left";
  let descriptionClassname = "flex  flex-col-reverse mt-5 justify-center ";
  if (imagePos === "right") descriptionClassname += " lg:flex-row";
  else descriptionClassname += " lg:flex-row-reverse";

  const isPhone = window.innerWidth < 700;

  // playing video  when in view
  // const {inViewport, forwardedRef}=props;
  // const [videoPlayState, setPlayState] = useState(false);
  // useEffect(() => {
  //   inViewport ? setPlayState(true) : setPlayState(false);
  // }, [inViewport]);

  // aos styling settings for points in service
  // let servicePoint = {
  //   duration: "600",
  //   offset: "100",
  //   easing: "linear",
  // };

  function yellowRectangle(floatPos, color, phone = false) {
    let classname = floatPos === "left" ? " ml-10 " : " mr-10 ";
    let floatDirection = floatPos === "right" ? "right" : "left";

    let style = {
      // backgroundColor: "#ffd805",
      backgroundColor: color,
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
    // const YTsrc = YTvideo + "?autoplay=1&mute=1";
    return (
      <>
        {!isPhone ? (
          <Parallax x={xval}>
            {video ? (
              <video
                id="servicesImage"
                className={classname}
                // width="80%"
                // height="280px"
                autoPlay
                muted
                loop
                disablePictureInPicture
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              // youtubeplayer dependency was replaced with iframe for timebeing since youtube videos werent being used, this mi8 not work if we use youtube video again,
              <iframe
                src={YTvideo}
                height="340px"
                width="575px"
                id="ytServiceImg"
                title="ytServiceImg"
                className={classname}
                muted
                frameborder="0"
                disablePictureInPicture
                style={{ border: "none" }}
              ></iframe>
            )}
          </Parallax>
        ) : video ? (
          <video
            id="servicesImage"
            className={classname}
            autoPlay
            muted
            loop
            disablePictureInPicture
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <iframe
            src={YTvideo}
            height="150px"
            width="80%"
            id="ytServiceImg"
            title="ytServiceImg"
            className={classname}
            frameborder="0"
            disablePictureInPicture
            style={{ border: "none" }}
          ></iframe>
        )}
      </>
    );
    // resource heavy :)
    // for the video to play(with sound) when in viewport and pause when offscreen
    // return !isPhone ? (
    //   <Parallax x={xval} className=" md:block hidden ">
    //     <ReactPlayer
    //       ref={forwardedRef}
    //       id="servicesImage"
    //       className={className}
    //       url={video ? video : YTsrc}
    //       controls={true}
    //       width="80%"
    //       playIcon
    //       loop={true}
    //       playing={videoPlayState}
    //     />
    //   </Parallax>
    // ) : video ? (
    //   <Parallax x={xvalPh} className="  block">
    //     <video
    //       id="servicesImage"
    //       className={classname}
    //       width="80%"
    //       height="280px"
    //       autoPlay
    //       loop
    //     >
    //       <source src={video} type="video/mp4" />
    //     </video>
    //   </Parallax>
    // ) : (
    //   <Parallax x={xvalPh} className="  block">
    //     <ReactPlayer
    //       id="servicesImage"
    //       className={classname}
    //       url={YTsrc}
    //       width="80%"
    //       height="280px"
    //       controls={!video ? true : false}
    //     />
    //   </Parallax>
    // );
  }

  // image/video element
  function imageSection(image_path, video, YTvideo, floatPos, points, color) {
    const imageStyle = {
      backgroundImage: `url('${image_path}')`,
      backgroundRepeat: "no-repeat",
    };

    let containerClassname = "relative  ";
    containerClassname += points > 5 ? " md:mt-14 " : " ";
    if (floatPos === "right") containerClassname += " md:mr-20 mr-5";
    else containerClassname += " md:ml-20 ml-5";

    let imageClassname = "absolute    z-10 ";
    if (floatPos === "right") imageClassname += "md:right-24 right-6  ";
    else imageClassname += "md:left-24 left-6   ";
    if (floatPos === "right") imageClassname += " bg-black ";
    else imageClassname += " bg-gray-custom ";

    // parallax effect values for desktop and phone
    const yellowRectXval = floatPos === "left" ? [-20, 10] : [20, -10];
    // const yellowRectXvalPh = floatPos === "left" ? [-20, 10] : [20, -10];
    const imageXval = floatPos === "left" ? [-10, 5] : [10, -5];
    const imageXvalPh = floatPos === "left" ? [-10, 10] : [10, -10];

    return (
      <div className={containerClassname}>
        {!isPhone ? (
          <Parallax x={yellowRectXval} className="md:block hidden ">
            {yellowRectangle(floatPos, color)}
          </Parallax>
        ) : (
          yellowRectangle(floatPos, color)
        )}
        {/* if its a picture or video */}
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
              <div
                id="servicesImage"
                className={imageClassname}
                style={imageStyle}
              ></div>
            )}
          </>
        ) : (
          <div id="service-image-wrapper" className="md:py-14 py-9">
            {videoCard(video, YTvideo, imageClassname, imageXval, imageXvalPh)}
          </div>
        )}
      </div>
    );
  }

  function servicePoints(point, index, length, pos) {
    let className = "pl-5   ";
    if (length !== 5) className += " lg:py-2 py-1.5 ";
    else if (length <= 5) className += " lg:py-2 py-1.5 ";
    else className += " lg:py-2.5 py-2 ";

    return (
      <div>
        <img
          src={pos === "right" ? linesImg : linesImgBlack}
          style={{ width: "8px", height: "40px" }}
          alt="line img"
          className="absolute"
        />
        <li className={className} key={index}>
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
        {!isPhone ? (
          <div className="w-11/12  md:block " x={descXval}>
            <div className=" ml-4 font-montserrat  text-lg mx-auto  md:leading-6 leading-5">
              {desc}
            </div>
          </div>
        ) : (
          <div className="font-montserrat mx-auto  leading-5">{desc}</div>
        )}

        <div className="flex  my-auto pt-5">
          <ul className="ml-4 font-montserrat my-auto">
            {points.map((point, index) =>
              servicePoints(point, index, points.length, position)
            )}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className=" 3xl:h-full  lg:h-full md:h-auto md:py-20 py-10 overflow-hidden  "
        id="serciveCard"
      >
        <div className="mx-auto px-5 my-auto " style={{ maxWidth: "1600px" }}>
          <div className="mx-auto text-center font-montserrat text-5xl ">
            <h2>{service.heading}</h2>
          </div>
          <div className={descriptionClassname}>
            <div className="lg:w-3/6 flex content-center">
              {textSection(service.description, service.points, imagePos)}
            </div>
            <div className="lg:w-4/6 lg:mb-0 mb-4">
              {imageSection(
                service.image,
                service.video,
                service.YTvideo,
                imagePos,
                service.points.length,
                service.blockColor
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// use if using video play on viewport
// const ViewportBlock = handleViewport(ServiceCard);
// const ServiceCardComp = (props) => (
//   <ViewportBlock service={props.service} index={props.index} />
// );

export default ServiceCard;
