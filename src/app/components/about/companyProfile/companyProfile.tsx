import React from "react";

const CompanyProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row text-[14.5px]  justify-center items-center leading-5 gap-9 ">
      <img
        className="w-[400px] h-[266px] rounded-lg"
        src="/images/Company_Profile.png"
        alt=""
      />
      <div className="lg:w-7/12 py-6 flex flex-col gap-3">
        <p className="w-full">
          MediQlogix was established in 2004. MediQlogix launched its star
          product “MediQM”. MediQM is a platform built on SaaS or Internal
          Single Install Systems to streamline the quality management of
          hospitals and healthcare organizations. It keeps data secure and helps
          in reporting for the Joint Commission on Accreditation of Healthcare
          Organizations (JCAHO) and the National Surgical Quality Improvement
          Program (NSQIP).
        </p>
        <p className="w-full">
          MediQlogix also provides consulting services to enhance the hospitals’
          quality management and safety requirements. Experts of MediQlogix
          provide quality management education and training to doctors, nurses,
          and other staff to ensure they are independent in carrying out the
          operational processes successfully, with minimal help from our support
          system
        </p>
      </div>
    </div>
  );
};

export default CompanyProfile;
