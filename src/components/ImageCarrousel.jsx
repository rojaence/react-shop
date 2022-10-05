import React from "react";
import ChevronIcon from "@components/icons/ChevronIcon";
import "@styles/imageCarrousel.scss";

const ImageCarrousel = ({
  slides,
  current,
  setCurrent,
  setPrevious,
  setNext,
  autoHideArrowControl = false,
}) => {
  const slideClassStyle = (data) => {
    let classStyle = ["slide"];
    if (data.index === current.index) classStyle.push("slide--active");
    return classStyle.join(" ");
  };

  const handleSlideBtnClick = (e, slide) => {
    e.stopPropagation();
    setCurrent(slide);
  };

  return (
    <div className="carrousel">
      <ul className="carrousel__slides">
        <div
          className="arrow-control arrow-control--left"
          style={{opacity: autoHideArrowControl ? 0 : 1}}
          onClick={setPrevious}
        >
          <ChevronIcon></ChevronIcon>
        </div>
        <div className="arrow-control arrow-control--right" style={{opacity: autoHideArrowControl ? 0 : 1}} onClick={setNext}>
          <ChevronIcon></ChevronIcon>
        </div>
        {slides.map((slide) => {
          return (
            <li className={slideClassStyle(slide)} key={slide.id}>
              <img
                src={slide.image}
                alt="Item image"
                className="slide__image"
              />
            </li>
          );
        })}
      </ul>
      <div className="carrousel__control">
        {slides.map((slide, index) => {
          return (
            <div
              onClick={(e) => handleSlideBtnClick(e, slide)}
              key={`${slide.id}-btn${index}`}
              className={`slide-button${
                current === slide ? " slide-button--active" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarrousel;
