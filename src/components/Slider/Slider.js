import React from "react";
import { images } from "../../images";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Slider.scss";

const Slider = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider__element");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider__element");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <div className="slider__container">
        <MdChevronLeft
          className="slider__chevron"
          onClick={slideLeft}
          size={45}
        />
        <div id="slider__element" className="slider__card">
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
            <img className="slider__image" key={src} src={src} alt="/" />
          ))}
        </div>
        <MdChevronRight
          className="slider__chevron"
          onClick={slideRight}
          size={45}
        />
      </div>
    </>
  );
};

export default Slider;
