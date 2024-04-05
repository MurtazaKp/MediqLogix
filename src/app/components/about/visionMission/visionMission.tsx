import React from "react";
import { MissionIcon } from "../../icons/mission";
import { VisionIcon } from "../../icons/vision";
import PortableText from "react-portable-text";

const VisionMission = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-10 ">
      {data.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center sm:items-start sm:flex-row gap-7"
          >
            <div className="">
              <div className=" w-[140px] h-[140px] rounded-full bg-white flex justify-center items-center">
                <img src={item.image} alt="" />
              </div>
            </div>
            <div className="">
              <h3 className="text-[18.5px]  mb-3 font-bold leading-5 text-primary-green text-center sm:text-start">
                {item.heading}
              </h3>
              <div className="text-center sm:text-start  leading-5 text-[14.5px]">
                <PortableText content={item.content.portableText} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VisionMission;
