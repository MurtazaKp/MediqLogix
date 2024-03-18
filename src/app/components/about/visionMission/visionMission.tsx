import React from "react";
import { MissionIcon } from "../../icons/mission";
import { VisionIcon } from "../../icons/vision";

const VisionMission = () => {
  return (
    <div className="flex flex-col gap-10 mt-9">
      <div className="flex flex-col items-center sm:items-start sm:flex-row gap-10">
        <div className="">
          <div className=" w-[140px] h-[140px] rounded-full bg-white flex justify-center items-center">
            <VisionIcon />
          </div>
        </div>

        <div className="">
          <h3 className="text-lg mb-3 text-primary-green text-center sm:text-start">
            Our Vision
          </h3>
          <p className="text-center sm:text-start">
            MediQlogix is a healthcare software company developing SaaS database
            products for the hospital quality and safety management. The purpose
            of the MediQlogix database is to extract quality information from
            the existing hospital or group hospital IT systems to identify the
            missing information for the CMS suggested quality bundles (AMI, CHF,
            SCIP and PN) and indicators.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start sm:flex-row gap-10">
        <div className="">
          <div className=" w-[140px] h-[140px] rounded-full bg-white flex justify-center items-center">
            <MissionIcon />
          </div>
        </div>

        <div className="">
          <h3 className="text-lg mb-3 text-primary-green text-center sm:text-start">
            Our Vision
          </h3>
          <p className="text-center sm:text-start">
            MediQlogix is a healthcare software company developing SaaS database
            products for the hospital quality and safety management. The purpose
            of the MediQlogix database is to extract quality information from
            the existing hospital or group hospital IT systems to identify the
            missing information for the CMS suggested quality bundles (AMI, CHF,
            SCIP and PN) and indicators.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
