import Link from "next/link";
import React from "react";

const CloudMediQm = () => {
  return (
    <div className="flex gap-4 sm:gap-7 lg:gap-4 flex-col capitalize text-[14.5px]">
      <p className=" capitalize text-[14.5px]">
        Hospitals struggle to gather top-notch data for performance improvement.
        They report to insurance companies, CMS, and NSQIP. MediQM platform
        helps in data collection which removes manual dependency and saves time
        for skilled clinical staff. It electronically captures data in real-time
        from hospitals’ IT systems which cuts costs and boosts performance
        instantly.
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-7/12 bg-white p-5 rounded-lg">
          <img className="w-full" src="images/Infographic.png" alt="" />
        </div>
        <div className="lg:w-5/12 flex items-start flex-col gap-3">
          <h3 className="text-[18.5px] leading-5 text-primary-green">
            Cloud MediQM
          </h3>
          <span>
            <p className="font-bold">The MediQlogix SaaS Operating Model</p>
            <p>
              extraction features which cater to the needs of the hospitals.
              MediQM can provide sophisticated business intelligence (BI)
              reporting and data aggregation features since the program is
              provided on a “software as a service” model and is simple to
              integrate with existing internal IT systems.
            </p>
          </span>
          <Link
            className="py-2 hover:bg-black hover:text-white transition duration-300 border-black rounded-full px-8 border flex justify-center items-center "
            href={"/mediQM?tab=Contact"}
          >
            Inquire
          </Link>
        </div>
      </div>

      <p className=" capitalize text-[14.5px]">
        The automatic data extraction module from{" "}
        <span className="font-bold"> MediQM </span>can improve your bottom line
        by taking the place of full-time employees who are currently gathering
        high-quality data thereby boosting hospital productivity.{" "}
        <span className="font-bold">MediQM </span>will have the extra features
        in the program to expand its workflow and business process management
        skills, which can benefit the hospitals other business divisions
        (financial reconciliation, supply chain management, and care
        management). Each hospital client will greatly gain financially from
        this, as staff and costly nursing resources are reallocated to
        patient-centered activities that offer value.
      </p>

      <p className=" capitalize text-[14.5px]">
        By implementing SaaS, <span className="font-black">MediQLogix</span>{" "}
        will set itself apart from its competitors in the industry. For the
        following capabilities, we can offer hospital chains a platform that is
        updated in real-time from several hospitals.
      </p>

      <ul className="list-disc flex flex-col gap-3 ps-5">
        <li className="text-primary-green">
          <p className="text-black text-[14.5px] leading-5">
            The capacity of sizable hospital networks to keep an eye on their
            operational departments in real time.
          </p>
        </li>{" "}
        <li className="text-primary-green">
          <p className="text-black text-[14.5px] leading-5">
            The capacity to compare oneself to different groups, including peer
            hospitals, top in class, and self-selected.
          </p>
        </li>{" "}
        <li className="text-primary-green">
          <p className="text-black text-[14.5px] leading-5">
            The capacity to locate possible exposure regions and quickly detect
            a bioterrorism incident.
          </p>
        </li>
        <li className="text-primary-green">
          <p className="text-black text-[14.5px] leading-5">
            The capacity to provide extra business services for bettering
            hospital care administration.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CloudMediQm;
