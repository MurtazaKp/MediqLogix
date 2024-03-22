import Link from "next/link";
import React from "react";

const MediQmSolution = () => {
  return (
    <div className="flex gap-4 sm:gap-7 lg:gap-4 flex-col capitalize text-[14.5px]">
      <h3 className="text-[18.5px] leading-5 text-primary-green font-bold">
        MediQM Solution
      </h3>
      <p className=" capitalize text-[14.5px]">
        The AI-enabled data extraction feature from the MediQM platform can
        improve your bottom line by taking the place of full-time employees who
        are currently gathering high-quality data thereby boosting hospital
        productivity. MediQM will have the extra features in the program to
        expand its workflow and business process management skills, which can
        benefit the hospital’s other business divisions (financial
        reconciliation, supply chain management, and care management). Each
        hospital client will greatly gain financially from this, as staff and
        costly nursing resources are reallocated to patient-centered activities
        that offer value.
      </p>
      <div className="flex flex-col lg:flex-row  gap-10">
        <div className="lg:w-6/12 2xl:w-4/12 ">
          <img
            className="w-full rounded-lg"
            src="images/platform.jpeg"
            alt=""
          />
        </div>
        <div className="lg:w-6/12 2xl:w-8/12 2xl:justify-center flex items-start flex-col gap-7">
          <span>
            <p className=" capitalize text-[14.5px] mb-3">
              By implementing SaaS,{" "}
              <span className="font-black">MediQLogix</span> will set itself
              apart from its competitors in the industry. For the following
              capabilities, we can offer hospital chains a platform that is
              updated in real-time from several hospitals.
            </p>

            <ul className="list-disc flex flex-col gap-2 ps-5">
              <li className="text-primary-green">
                <p className="text-black text-[14.5px] leading-5">
                  The capacity of sizable hospital networks to keep an eye on
                  their operational departments in real time.
                </p>
              </li>{" "}
              <li className="text-primary-green">
                <p className="text-black text-[14.5px] leading-5">
                  The capacity to compare oneself to different groups, including
                  peer hospitals, top in class, and self-selected.
                </p>
              </li>{" "}
              <li className="text-primary-green">
                <p className="text-black text-[14.5px] leading-5">
                  The capacity to locate possible exposure regions and quickly
                  detect a bioterrorism incident.
                </p>
              </li>
              <li className="text-primary-green">
                <p className="text-black text-[14.5px] leading-5">
                  The capacity to provide extra business services for bettering
                  hospital care administration.
                </p>
              </li>
            </ul>
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
        MediQlogix creates an advanced AI-powered platform for hospitals’
        quality and safety management. This platform retrieves vital information
        efficiently to fill in missing data for CMS quality bundles like AMI,
        CHF, SCIP, and PNA indicators.
      </p>

      <p className=" capitalize text-[14.5px]">
        MediQM’s AI-enabled software product healthcare organizations access to
        clinical quality management data. MediQlogix SaaS platform integrates
        data from various sources securely and keeps it united. It offers
        personalized reports for JCAHO and NSQUIP. Additionally, it creates
        specialized reports using advanced AI-based software.
      </p>
    </div>
  );
};

export default MediQmSolution;
