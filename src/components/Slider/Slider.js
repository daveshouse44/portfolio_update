import React from "react";
import { animated, useSpring } from "react-spring";
// import { useGesture } from "react-use-gesture";
import { images } from "../../images";
import "./Slider.scss";

// const clamp = (value, clampAt = 30) => {
//   if (value > 0) {
//     return value > clampAt ? clampAt : value;
//   } else {
//     return value < -clampAt ? -clampAt : value;
//   }
// };

const Slider = () => {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  //   const bind = useGesture({
  //     onScroll: (event) => {
  //       set({
  //         transform: `perspective(500px) rotateY(${
  //           event.scrolling ? clamp(event.delta[0]) : 0
  //         }deg)`,
  //       });
  //     },
  //     onDrag: (event) => {
  //       if (event.dragging) {
  //         document.querySelector(".container").scrollLeft -= event.delta[0];
  //       }
  //     },
  //     onWheel: (event) => {
  //       if (event.wheeling) {
  //         document.querySelector(".container").scrollLeft += event.delta[1];
  //       }
  //     },
  //   });

  return (
    <>
      <div className="slider__container">
        {[
          images.html,
          images.css,
          images.javascript,
          images.tailwind,
          images.sass,
          images.bootstrap,
          images.node,
          images.mongodb,
          images.react,
          images.vue,
          images.angular,
          images.graphql,
          images.python,
          images.heroku,
          images.mysql,
          images.aws,
          images.git,
          images.wordpress,
        ].map((src) => (
          <animated.div
            key={src}
            className="slider__card"
            style={{
              ...style,
              backgroundImage: `url(${src})`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
