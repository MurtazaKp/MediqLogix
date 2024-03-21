import React from "react";
import { MissionIcon } from "../../icons/mission";
import { VisionIcon } from "../../icons/vision";

const VisionMission = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex flex-col items-center sm:items-start sm:flex-row gap-7">
        <div className="">
          <div className=" w-[140px] h-[140px] rounded-full bg-white flex justify-center items-center">
            <VisionIcon />
          </div>
        </div>

        <div className="">
          <h3 className="text-[18.5px]  mb-3 font-bold leading-5 text-primary-green text-center sm:text-start">
            Our Vision
          </h3>
          <p className="text-center sm:text-start leading-5 text-[14.5px]">
            “To revolutionize the healthcare industry by providing cutting-edge
            AI and ML-powered platforms that enhance efficiency, accuracy, and
            patient outcomes for hospitals and healthcare organizations
            worldwide”.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start sm:flex-row gap-7">
        <div className="">
          <div className=" w-[140px] h-[140px] rounded-full bg-white flex justify-center items-center">
            <MissionIcon />
          </div>
        </div>

        <div className="">
          <h3 className="text-[18.5px] font-bold mb-3 leading-5 text-primary-green text-center sm:text-start">
            Our Mission
          </h3>
          <p className="text-center leading-5 sm:text-start text-[14.5px]">
            Our mission is to empower hospitals and healthcare organizations
            with sophisticated AI-powered platforms that are tailored to their
            specific needs, enabling them to make data-driven decisions, improve
            operational efficiency, and deliver high-quality care to their
            patients. We are committed to continuously innovating and staying at
            the forefront of technology to drive positive change in the
            healthcare industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
