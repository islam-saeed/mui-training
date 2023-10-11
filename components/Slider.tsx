'use client'
import React, { useState, useRef } from "react";
import Slider from "react-slick";


const Carousel = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      image: "https://source.unsplash.com/300x300",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/300x300",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/300x300",
    },
  ]);

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <img key={slide.id} src={slide.image} alt={slide.image} width='300px' height='300px' />
      ))}
    </Slider>
  );
};

export default Carousel;
