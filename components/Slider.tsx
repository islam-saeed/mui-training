'use client'
import React, { useRef, useContext } from "react";
import Slider from "react-slick";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa6'
import { widthContext } from "@/context/WidthContext";

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
  SlideNumber: number
}

const Carousel = (props: Props) => {
  const children: string | JSX.Element | JSX.Element[] | (() => JSX.Element) = props.children
  const SlideNumber: number = props.SlideNumber
  const sliderRef = useRef<Slider>(null);
  const pageWidth: number = useContext(widthContext)

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: SlideNumber,
    slidesToScroll: SlideNumber,
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
          {children}
        </Slider>
      </div>}
    </>
  );
};

export default Carousel;
