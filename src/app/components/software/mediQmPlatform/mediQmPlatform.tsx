import Link from "next/link";
import React from "react";

const MediQmPlatform = () => {
  return (
    <div className="flex gap-4 sm:gap-7 lg:gap-4 flex-col  text-[14.5px]">
      <h3 className="text-[18.5px] leading-5 text-primary-green">
        MediQM Platform
      </h3>
      <p className="  text-[14.5px] pb-9 rounded-2xl">
        MediQlogix creates an advanced AI-powered database for hospitals quality
        and safety management. This platform retrieves vital information
        efficiently to fill in missing data for CMS quality bundles like AMI,
        CHF, SCIP, and PNA indicators. The MediQlogix platform is available in
        SaaS and LAN versions which helps hospital staff follow CMS protocols
        for the best patient care.
      </p>
      <div className="flex flex-col lg:flex-row items-start gap-[30px]">
        <div className="lg:w-6/12 2xl:w-3/12 flex ">
          <img
            className="w-full  rounded-lg"
            src="/images/platform.jpeg"
            alt=""
          />
        </div>
        <div className="lg:w-6/12 2xl:w-9/12 flex items-start justify-between flex-col gap-3">
          <span className="flex flex-col gap-3 pb-10 ">
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
            className="py-2 hover:bg-black hover:text-white transition duration-300 border-black rounded-full px-8 border flex justify-center items-center "
            href={"/mediQM?tab=Contact"}
          >
            Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediQmPlatform;
