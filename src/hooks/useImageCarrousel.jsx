import React, { useState, useEffect } from 'react';

export const useImageCarrousel = (initialSlides = []) => {
  const [slides, setSlides] = useState(initialSlides);
  const [current, setCurrent] = useState({});

  useEffect(() => {
    if (slides.length > 0) {
      setCurrent(slides[0]);
    }
  }, [slides]);

  const setPrevious = () => {
    if (current.index > 0) setCurrent(slides[slides.indexOf(current) - 1])
    else if (current.index === 0) setCurrent(slides[slides.length - 1])
  }

  const setNext = () => {
    if (current.index < slides.length - 1) setCurrent(slides[slides.indexOf(current) + 1])
    else if (current.index === slides.length - 1) setCurrent(slides[0])
  }
  return { slides, current, setCurrent, setSlides, setPrevious, setNext }
}