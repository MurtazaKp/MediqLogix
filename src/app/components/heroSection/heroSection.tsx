"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Declare your data
const slidesData = [
  {
    title: "AI-Powered",
    subtitle: "Cloud Solutions",
    description:
      "AI-Powered cloud solutions for hospital and healthcare organizations.",
    image: "/images/Cloud_Solutions.png",
  },
  {
    title: "Mobility",
    subtitle: "Services",
    description:
      "Providing mobile services to ensure the quality, education, and safety of hospitals",
    image: "/images/Mobility.png",
  },
  {
    title: "Consulting",
    subtitle: "Services",
    description:
      "AI-Powered tailored solutions by experts to enhance profitability",
    image: "/images/Consulting.png",
  },
];

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
    <div className="bg-black relative hero-section">
      <Slider className="z-10" {...settings}>
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="flex flex-col px-10 xl:px-36 pb-12 2xl:pb-16 relative"
          >
            <div className="absolute inset-0 -z-10">
              <img className="object-cover w-full h-full" src={slide.image} />
              <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
            <h1 className="sm:w-8/12 text-4xl sm:text-secondary-heading sm:leading-secondary-heading py-10 lg:text-primary-heading lg:leading-primary-heading lg:pt-[106px] lg:pb-[157px] text-primary-blue ">
              <span className="text-[#4ef721] font-bold">{slide.title}</span>
              <br />
              {slide.subtitle}
            </h1>
            <div>
              <p className="text-sm sm:text-2xl lg:text-secondary-heading  sm:leading-secondary-heading text-white w-full sm:w-9/12 lg:w-[800px]">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
