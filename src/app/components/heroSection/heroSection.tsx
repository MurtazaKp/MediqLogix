"use client";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSection = () => {
  var settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    adaptiveHeight: true,
  };

  return (
    <div className="bg-black   relative hero-section ">
      <Slider className="z-20 " {...settings}>
        <div className="flex flex-col px-10 lg:px-36 pb-12 2xl:pb-16     relative">
          <div className="absolute inset-0 -z-10 ">
            <img
              className=" object-cover w-full h-full"
              src="/images/Cloud_Solutions.png"
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
          <h1 className=" text-4xl sm:text-secondary-heading sm:leading-secondary-heading py-10 lg:text-primary-heading lg:leading-primary-heading lg:pt-[106px] lg:pb-[157px] text-primary-blue ">
            <span className="text-[#4ef721] font-bold">AI-powered</span>
            <br />
            Cloud Solution
          </h1>

          <div>
            <p className="text-sm sm:text-secondary-heading sm:leading-secondary-heading text-white w-full sm:w-[450px] lg:w-[750px]">
              AI-powered cloud solutions for hospital and healthcare
              organizations.
            </p>
            <p> </p>
          </div>
        </div>
        <div className=" flex flex-col px-10 lg:px-36 pb-12 2xl:pb-16     relative  ">
          <div className="absolute inset-0 -z-10 ">
            <img
              className="object-cover w-full h-full"
              src="/images/Mobility.png"
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
          <h1 className="w-2/12 text-4xl sm:text-secondary-heading sm:leading-secondary-heading py-10 lg:text-primary-heading lg:leading-primary-heading lg:pt-[106px] lg:pb-[157px] text-primary-blue ">
            <span className="text-[#4ef721] font-bold">Mobility </span>Services
          </h1>

          <div>
            <p className="text-sm sm:text-secondary-heading lg:text-secondary-heading lg:leading-secondary-heading text-white w-full sm:w-[450px] lg:w-[800px]">
              Providing mobile services to ensure the quality, education, and
              safety of hospitals
            </p>
            <p>{/* <button></button>{" "} */}</p>
          </div>
        </div>
        <div className=" flex flex-col px-10 lg:px-36 pb-12 2xl:pb-16     relative  ">
          <div className="absolute inset-0 -z-10 ">
            <img
              className="object-cover w-full h-full"
              src="/images/Consulting.png"
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
          <h1 className="w-2/12 text-4xl sm:text-secondary-heading sm:leading-secondary-heading py-10 lg:text-primary-heading lg:leading-primary-heading lg:pt-[106px] lg:pb-[157px] text-primary-blue ">
            <span className="text-[#4ef721] font-bold">Consulting</span>
            <br />
            Services
          </h1>

          <div>
            <p className="text-sm sm:text-secondary-heading lg:text-secondary-heading lg:leading-secondary-heading text-white w-full sm:w-[450px] lg:w-[700px]">
              AI-powered tailored solutions by experts to enhance profitability
            </p>
            <p>{/* <button></button>{" "} */}</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
