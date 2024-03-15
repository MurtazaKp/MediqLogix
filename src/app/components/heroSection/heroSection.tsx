"use client";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSection = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
  };
  const sliderRef = useRef();
  return (
    <div className="bg-black  px-10 lg:px-36 hero-section ">
      <Slider {...settings}>
        <div className="lg:h-[calc(100vh-60px)] flex flex-col  relative  ">
          <div className="absolute inset-0 z-10 ">
            <img className="" src="/images/backgroud.png" />
          </div>
          <h1 className="w-2/12 text-4xl sm:text-secondary-heading sm:leading-secondary-heading py-10 lg:text-primary-heading lg:leading-primary-heading lg:pt-[106px] lg:pb-[157px] text-primary-blue ">
            <span className="text-primary-green ">CLOUD </span>SOLUTION
          </h1>

          <div>
            <p className=" lg:text-secondary-heading lg:leading-secondary-heading text-white w-full sm:w-[450px] lg:w-[700px]">
              Cloud solutions to the Hospital and Healthcare organizations.
            </p>
            <p> </p>
          </div>
        </div>
        <div className="lg:h-[calc(100vh-60px)] flex flex-col  relative  ">
          <div className="absolute inset-0 z-10 ">
            <img className="" src="/images/backgroud.png" />
          </div>
          <h1 className="w-2/12 text-4xl sm:text-secondary-heading sm:leading-secondary-heading py-10 lg:text-primary-heading lg:leading-primary-heading lg:pt-[106px] lg:pb-[157px] text-primary-blue ">
            <span className="text-primary-green ">Mobility </span>Services
          </h1>

          <div>
            <p className=" lg:text-secondary-heading lg:leading-secondary-heading text-white w-full sm:w-[450px] lg:w-[700px]">
              Provides Mobile services for Hospital Quality, Education and
              Hospital safety.
            </p>
            <p>{/* <button></button>{" "} */}</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
