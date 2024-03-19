"use client";
import React from "react";
import { FacebookIcon } from "../icons/facebook";
import Slider from "react-slick";

const PartnerSlider = () => {
  const setting = {
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
    description:
      "Building partnerships to help organizations secure everything they build and run in the cloud.",
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
        <h2 className="text-[22.5px] pb-3">{partnerSliderData.heading}</h2>
        <p className=" pb-9 lg:w-8/12 2xl:w-6/12 mx-auto">
          {partnerSliderData.description}
        </p>
      </div>
      <Slider {...setting} slidesToShow={4}>
        {partnerSliderData.partners.map((partner, index) => {
          return (
            <div key={index} className="!flex   justify-center items-center">
              <div className="bg-white box-shadow rounded-lg flex justify-center items-center w-11/12 2xl:w-11/12 h-[124px]">
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
