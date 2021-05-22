import handleViewport from "react-in-viewport";
import IMAGES from "../services/IMAGES";
const Block = (props) => {
  const { inViewport, forwardedRef, testimonial, index } = props;
  let boxShadow = inViewport
    ? "5px 5px 10px #c7c7c7, -5px -5px 10px #c7c7c7,-5px 5px 10px #c7c7c7, 5px -5px 10px #c7c7c7"
    : "none";
  let scale = inViewport ? "scale(1)" : "scale(0.98)";
  const transitionDelay = inViewport ? (testimonial.index % 4) / 2 + "s" : "0s";
  let className =
    "relative mx-10 my-3 p-10 text-center flex h-screen flex-col justify-between overflow-hidden";
  let image, footerImg;
  if (index % 3 === 0) {
    image = IMAGES.leftQuoteGreen;
    footerImg = IMAGES.testimonialBottomGreen;
  } else if (index % 3 === 1) {
    image = IMAGES.leftQuotePurple;
    footerImg = IMAGES.testimonialBottomPurple;
  } else if (index % 3 === 2) {
    image = IMAGES.leftQuoteBlue;
    footerImg = IMAGES.testimonialBottomBlue;
  }
  className = testimonial.index < 4 ? className + " active" : className + "";
  return (
    <div
      id="testimonial-card"
      className={className}
      ref={forwardedRef}
      style={{
        height: "450px",
        width: "330px",
        boxShadow: boxShadow,
        transform: scale,
        transitionDelay: transitionDelay,
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
};

const ViewportBlock = handleViewport(Block);

const Component = (props) => (
  <ViewportBlock testimonial={props.testimonial} index={props.index} />
);

export default Component;
