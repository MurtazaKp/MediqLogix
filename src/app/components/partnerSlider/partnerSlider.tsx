"use client";
import React from "react";
import { FacebookIcon } from "../icons/facebook";
import Slider from "react-slick";
import { RightArrowIcon } from "../icons/rightArrow";
import { LeftArrowIcon } from "../icons/leftArrow";

const PartnerSlider = () => {
  function LeftNavButton(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-arrow-left p-1 cursor-pointer"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <LeftArrowIcon />
      </div>
    );
  }

  function RightNavButton(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-arrow-right p-1 cursor-pointer"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <RightArrowIcon />
      </div>
    );
  }
  const setting = {
    prevArrow: <LeftNavButton />,
    nextArrow: <RightNavButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const partnerSliderData = {
    heading: "Our Digital Partners",
    description: "Our expanding network of services providers",
    partners: [
      {
        logoSrc: "/images/Apple.svg",
      },
      {
        logoSrc: "/images/Microsoft.svg",
      },
      {
        logoSrc: "/images/Oracle.svg",
      },
      {
        logoSrc: "/images/google.svg",
      },
    ],
  };
  return (
    <div className="px-10 lg:px-32 py-20 bg-primary-green">
      <div className="text-center text-white">
        <h2 className="text-[22.5px] pb-3 font-semibold">
          {partnerSliderData.heading}
        </h2>
        <p className=" pb-9 text-[16.5px] lg:w-8/12 2xl:w-6/12 mx-auto ">
          {partnerSliderData.description}
        </p>
      </div>
      <Slider {...setting} slidesToShow={4}>
        {partnerSliderData.partners.map((partner, index) => {
          return (
            <div
              key={index}
              className="!flex px-2   justify-center items-center"
            >
              <div className="bg-white box-shadow rounded-lg flex justify-center items-center w-full   2xl:w-11/12 h-[124px]">
                <img src={partner.logoSrc} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PartnerSlider;
