'use client'
import React, { useRef, useContext } from "react";
import Slider from "react-slick";
import SlideOffer from "./SlideOffer";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa6'
import { widthContext } from "@/context/WidthContext";


const Carousel = () => {
  const sliderRef = useRef<Slider>(null);
  const pageWidth: number = useContext(widthContext)

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    {pageWidth && pageWidth>990 &&
    <div className="slider" style={{position:'relative'}}>
    <div className='controls'>
          <FaChevronLeft onClick={sliderRef.current?.slickPrev} style={{
            position: 'absolute',
            top: '50%',
            left: '100px',
            cursor: 'pointer',
            zIndex: '1'
          }} />
          <FaChevronRight onClick={sliderRef.current?.slickNext} style={{
            position: 'absolute',
            top: '50%',
            right: '100px',
            cursor: 'pointer',
            zIndex: '1'
          }} />
    </div>
    <Slider ref={sliderRef} {...settings}>
      <SlideOffer />
      <SlideOffer />
      <SlideOffer />
    </Slider>
    </div>}
    </>
  );
};

export default Carousel;
