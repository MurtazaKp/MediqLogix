import React from "react";

const MediQmPlatform = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <h3 className="text-primary-green text-[18.5px] leading-5">
          MediQm Platform
        </h3>

        <p className="text-[14.5px] leading-5">
          MediQlogix creates an advanced AI-powered database for hospitals’
          quality and safety management. This database retrieves vital
          information efficiently to fill in missing data for CMS quality
          bundles like AMI, CHF, SCIP, PN and indicators. The MediQlogix
          software is available in SaaS and LAN versions which helps hospital
          staff follow CMS protocols for the best patient care.
        </p>
        <p className="text-[14.5px] leading-5">
          In North America, over 5000 hospitals have implemented EMR systems.
          These systems gather patient data, financial details, and clinical
          information. The retrieval of patient data and the application of
          business intelligence methods are crucial. MediQlogix offers AI and
          ML-based software to quickly identify missing information, assisting
          organizations in complying with the reporting guidelines established
          by the US Government (CMS).
        </p>
        <p className="text-[14.5px] leading-5">
          MediQlogix offers a platform compatible with Microsoft SQL Server and
          Oracle. It provides healthcare organizations access to clinical
          quality management data. MediQlogix SaaS DB integrates data from
          various sources securely and keeps it united. It offers personalized
          reports for JCO and NSQUIP. Additionally, it creates specialized
          reports using advanced ML-based software.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white my-10">
          <img className=" mt-6 " src="/images/infographic.svg" />
          <p className="mr-40 font-bold"> Recreate </p>
        </div>
      </div>
    </div>
  );
};

export default MediQmPlatform;
