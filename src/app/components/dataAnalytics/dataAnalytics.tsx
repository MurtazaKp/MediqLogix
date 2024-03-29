import React from "react";

const DataAnalytics = () => {
  return (
    <div className=" py-12 pb-[30px] bg-secondary-gray xl:min-h-[calc(100vh-424px)]">
      <div className=" mx-auto sm:px-6 xl:px-[139px] px-8 ">
        <div className="w-full pb-1 overflow-x-auto">
          <nav className="flex flex-col lg:flex-row justify-between items-stretch sm:items-center gap-4 py-1">
            <p className=" text-lg  sm:text-[22.5px]  leading-5 text-primary-blue font-bold">
              Data Analytics
            </p>
          </nav>
        </div>
        <div className="flex flex-col gap-8  text-[14.5px] leading-5 pt-[30px]">
          <p className="  text-[14.5px]">
            <span className="font-bold"> MediQlogix’s</span> SaaS-based platform
            provides data collection and analytics features for hospitals and
            healthcare organizations. The data is collected for patients,
            operating rooms, operational procedures of hospitals, patient
            illness, patient readmissions, preventive care, etc. Data for
            doctors, nurses, and other hospital staff is collected related to
            their scope of work, functionalities, etc.
          </p>
          <p className="  text-[14.5px] leading-5">
            Data analytics plays an important role for any hospital and
            healthcare organization. The data analytics feature of MediQlogix’s
            SaaS-based platform helps hospitals and healthcare organizations
            detect missing information and abnormalities with data relating to
            any areas of operation. Data analytics features can be used for
            preventative care, reducing patient readmissions, managing operating
            rooms, predicting illness outbreaks, etc.
          </p>
          <p>
            The data analytics features can generate organized information that
            can be used for enhancing the quality management of hospitals and
            healthcare organizations as well as generate specialized reports for
            insurance companies and regulatory authorities like the Joint
            Commission on Accreditation of Healthcare Organizations (JCAHO) and
            the National Surgical Quality Improvement Program (NSQIP) and the
            National Accreditation Board for Hospitals & Healthcare Providers
            (NABH).
          </p>
        </div>

        {/* <Blog /> */}
      </div>
    </div>
  );
};

export default DataAnalytics;
