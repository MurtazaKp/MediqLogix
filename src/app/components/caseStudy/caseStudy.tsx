"use client";
import React from "react";

import Slider from "react-slick";
import { StarIcon } from "../icons/star";
import { FacebookIcon } from "../icons/facebook";
import { LeftArrowIcon } from "../icons/leftArrow";
import { RightArrowIcon } from "../icons/rightArrow";

const CaseStudy = () => {
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
      "We assist our clients in reaching their objectives that enhance quality and safety management.",
    partners: [
      {
        logoSrc: "/images/sentara.svg",
        companyName: "Sentara Virginia Beach General Hospital",
        description:
          "The Virginia-based hospital specializes in various medical services like cancer, heart and vascular, etc. By using MediQlogix’s AI-powered platform it was able to collect and analyze data for its operating room and generate reports for CMS. ",
      },
      {
        logoSrc: "/images/Cleveland.svg",
        companyName: "Akron General - Cleveland Clinic",
        description:
          "The Ohio-based clinic used MediQlogix’s AI-powered platform to transform its operating room and enhance safety and quality management. ",
      },
      {
        logoSrc: "/images/Covenant.png",
        companyName: "Parkwest Medical Center",
        description:
          "The US-based medical center provides healthcare services for cardiac, cancer, ENT, critical care, etc. With the use of MediQlogix’s AI-powered platform, it was able to create a database to improve its quality and safety management and meet reporting requirements. ",
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
        prevArrow={<LeftNavButton />}
        nextArrow={<RightNavButton />}
        // prevArrow={<LeftNavButton />}
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
                    <p className="mb-4 font-bold capitalize  text-[16.5px]">
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
