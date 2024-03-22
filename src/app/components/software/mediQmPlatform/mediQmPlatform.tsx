import Link from "next/link";
import React from "react";

const MediQmPlatform = () => {
  return (
    <div className="flex gap-4 sm:gap-7 lg:gap-4 flex-col capitalize text-[14.5px]">
      <h3 className="text-[18.5px] leading-5 text-primary-green">
        MediQM Platform
      </h3>
      <p className=" capitalize text-[14.5px] pb-9 rounded-2xl">
        Hospitals struggle to gather top-notch data for performance improvement.
        They report to insurance companies, CMS, and NSQIP.”MediQM” helps in
        data collection which removes the manual dependency, and saves time for
        skilled clinical staff. It electronically captures data in real-time
        from hospital IT systems which cuts costs and boosts performance
        instantly.s and boosts performance instantly.
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-[30px]">
        <div className="lg:w-7/12 2xl:w-3/12 flex ">
          <img
            className="w-full  rounded-lg"
            src="images/platform.jpeg"
            alt=""
          />
        </div>
        <div className="lg:w-5/12 2xl:w-9/12 flex items-start justify-between flex-col gap-3">
          <span className="flex flex-col gap-3 pb-10 mt-3">
            <p>
              In North America, over 5000 hospitals have implemented EMR
              systems. These systems gather patient data, financial details, and
              clinical information. The retrieval of patient data and the
              application of business intelligence methods are crucial.
              MediQlogix offers an AI-based platform to quickly identify missing
              information, assisting organizations in complying with the
              reporting guidelines established by the US Government (CMS).
            </p>
            <p>
              MediQlogix offers a platform compatible with Microsoft SQL Server
              and Oracle. It provides healthcare organizations access to
              clinical quality management data. MediQlogix SaaS platform
              integrates data from various sources securely and keeps it united.
              It offers personalized reports for JCAHO and NSQIP. Additionally,
              it creates specialized reports using advanced AI-based software.
            </p>
          </span>
          <Link
            className="py-3 hover:bg-black hover:text-white transition duration-300 border-black rounded-full px-8 border flex justify-center items-center "
            href={"/mediQM?tab=Contact"}
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediQmPlatform;
