import Link from "next/link";
import React from "react";

const MediQmMobility = () => {
  return (
    <div className="flex text-[14.5px]  flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-[30px]">
        <div className="lg:w-6/12 2xl:w-4/12">
          <img className=" rounded-[18px]" src="/images/Mobility.jpeg" alt="" />
        </div>
        <div className="lg:w-6/12 2xl:w-8/12 flex items-start justify-between flex-col gap-3">
          <div>
            <h3 className="text-[18.5px] mt-6 mb-5 leading-5 text-primary-green">
              MediQM Mobility
            </h3>
            <span className="flex flex-col gap-4">
              <p>
                MediQlogix offers its star product{" "}
                <span className="font-bold">MediQM</span> platform to ensure the
                experience of mobility for its users. The AI-powered platform
                helps our clients easily access crucial information in an
                organized form to ensure quality management, data analytics, and
                specific reporting.
              </p>
              <p>
                The AI-powered platform focuses on ensuring that secure
                section-wise clinical documentation may be completed to
                guarantee the privacy and security of data belonging to
                healthcare organizations. Additionally, to further improve the
                user experience, the platform’s UI is simple to understand and
                easy to use.
              </p>
            </span>
          </div>
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

export default MediQmMobility;
