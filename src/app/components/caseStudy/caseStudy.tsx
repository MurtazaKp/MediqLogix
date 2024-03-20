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
        logoSrc: "/images/sentara.svg",
        companyName: "Sentara Virginia Beach General Hospital",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,.",
      },
      {
        logoSrc: "/images/sentara.svg",
        companyName: "Sentara Virginia Beach General Hospital",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,.",
      },
    ],
  };
  return (
    <div className="px-10 lg:px-32 py-24 bg-[#002f71]">
      <div className="text-center text-white">
        <h2 className="text-[22.5px] pb-3 flex justify-center items-center gap-2">
          <StarIcon /> {partnerSliderData.heading}
          <StarIcon />
        </h2>
        <p className=" pb-9 lg:w-8/12 2xl:w-6/12 mx-auto">
          {partnerSliderData.description}
        </p>
      </div>
      <Slider {...setting} className="" slidesToShow={3}>
        {partnerSliderData.partners.map((partner, index) => {
          return (
            <div key={index} className="!flex  justify-center">
              <div className="bg-white p-9  rounded-lg flex flex-col w-11/12 2xl:w-11/12 ">
                <img className=" mb-6 w-9/12" src={partner.logoSrc} />
                <h2 className="mb-4 font-black text-black">
                  {partner.companyName}
                </h2>
                <p className="text-xs">{partner.description}</p>
              </div>
              {/* <div className="flex gap-2 ">
                <StarIcon color="#4387ea" />
                <StarIcon color="#4387ea" />
                <StarIcon color="#4387ea" />
              </div> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CaseStudy;
