"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
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
  {
    title: "Data ",
    subtitle: "Analytics",
    description: "Data analytics for hospitals and healthcare organizations. ",
    image: "/images/Data.png",
  },
];

const HeroSection = ({ slides }: any) => {
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

  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  return (
    <div className="bg-black relative hero-section">
      <Slider className="z-10" {...settings}>
        {slides.map((slide: any, index: number) => (
          <div
            key={index}
            className="flex flex-col px-10 xl:px-36 pb-12 2xl:pb-16 relative"
          >
            <div className="absolute inset-0 -z-10">
              <img
                loading="eager"
                className="object-cover w-full h-full"
                alt={slide.title}
                width={1000}
                height={500}
                src={slide.image}
              />
              <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
            <h2 className="sm:w-8/12 text-4xl sm:text-secondary-heading sm:leading-secondary-heading py-5 lg:text-4xl xl:text-[50px] lg:leading-primary-heading lg:pt-8  xl:pt-12 lg:pb-[100px] xl:pb-[140px] 2xl:pb-[245px] text-primary-blue ">
              <span className="text-[#4ef721] font-bold">{slide.title}</span>
              <br />
              {slide.subtitle}
            </h2>
            <div>
              <p className="text-sm sm:text-2xl lg:text-[20px] xl:text-[26px] leading-5 lg:leading-10  sm:leading-secondary-heading text-white w-full sm:w-9/12 lg:w-11/12 xl:w-[700px]">
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
