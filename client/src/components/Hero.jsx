import React from "react";
import Slider from "react-slick";

export const Hero = () => {
  function SimpleSlider() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      appendDots: (dots) => (
        <div>
          <ul className="m-20"> {dots} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div className="border-2 rotate-45 border-white w-3 h-3"></div>
      ),
    };
    return (
      <Slider {...settings}>
        <div className="bg-cover bg-center bg-[url('hero_images/hero1.jpg')] h-[764px]"></div>
        <div className="bg-cover bg-center  bg-[url('hero_images/hero2.jpg')] h-[764px]"></div>
        <div className="bg-cover bg-center bg-[url('hero_images/hero3.jpg')] h-[764px]"></div>
      </Slider>
    );
  }
  return (
    <>
      <div className="h-[764px]">
        <SimpleSlider />
      </div>
    </>
  );
};
