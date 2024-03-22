"use client";
import React from "react";

import Slider from "react-slick";
import { StarIcon } from "../icons/star";

const CaseStudy = () => {
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
    heading: "Customer Success Stories",
    description:
      "Here are a few of our projects that deliver a great digital experience and success for our clients.",
    partners: [
      {
        logoSrc: "/images/sentara.svg",
        companyName: "Sentara Virginia Beach General Hospital",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,.",
      },
      {
        logoSrc: "/images/Cleveland.svg",
        companyName: "Akron General - Cleveland Clinic",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,.",
      },
      {
        logoSrc: "/images/Covenant.png",
        companyName: "Parkwest Medical Center",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,.",
      },
    ],
  };
  return (
    <div className="px-10 relative lg:px-32 py-24 case-study">
      <div className="absolute -z-10 inset-0">
        <img src="/images/Map.svg" />
        <div className="absolute inset-0 bg-blue-700 opacity-65"></div>
      </div>
      <div className="text-center text-white active">
        <h2 className="text-[22.5px] pb-3  flex justify-center items-center gap-2">
          <StarIcon /> {partnerSliderData.heading}
          <StarIcon />
        </h2>
        <p className=" pb-9 lg:w-8/12 2xl:w-6/12 mx-auto capitalize">
          {partnerSliderData.description}
        </p>
      </div>
      <Slider
        centerMode
        centerPadding="0"
        {...setting}
        className=""
        slidesToShow={3}
      >
        {partnerSliderData.partners.map((partner, index) => {
          return (
            <div
              key={index}
              className="!flex px-1   h-full items-center justify-center"
            >
              <div className="bg-white relative p-8 h-[95%] hover:h-full  border-white hover:border-b-8 border-b-8  transition-all duration-300 hover:border-primary-green 2xl:h-[400px] active  rounded-lg flex flex-col justify-between  ">
                <span>
                  <img
                    className={`${
                      index === 2 ? "w-5/12 -mt-5" : "w-8/12"
                    } mb-6  `}
                    src={partner.logoSrc}
                  />
                  <span>
                    <p className="mb-4 font-bold  text-[16.5px]">
                      {partner.companyName}
                    </p>
                    <p className="text-xs">{partner.description}</p>
                  </span>
                </span>

                <div className="flex gap-1 mt-10 ">
                  <StarIcon color="#4387ea" />
                  <StarIcon color="#4387ea" />
                  <StarIcon color="#4387ea" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CaseStudy;
