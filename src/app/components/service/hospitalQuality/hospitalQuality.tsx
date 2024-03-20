import Blog from "@/app/components/blog/blog";
import React from "react";

const HospitalQuality = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-primary-green text-[18.5px] leading-5">Service</h3>
      <p className=" capitalize text-[14.5px]">
        MediQlogix’s software technology products are developed on clourd
        technology platforms for easy integration with your existing IT systems
        (Ex: COPE, Nursing, RX and Lab) in addition to an being a platform based
        technology for future enhancement. The MediQlogix’s technology is also
        available on on Cloud model, which is designed with flexibility to
        implement systems at a large hospital group..
      </p>
      <p>
        Our main goal is to help hospitals become self-sufficient. We assist in
        developing AI-enabled software and processes for compliance. It is
        important to show hospitals the financial benefits of quality
        enhancement along with immediate advantages including lower occupancy
        rates and readmissions. We also excel in collecting data that reveals
        financial gains and can be presented in financial reports to
        continuously review the financial position of the healthcare
        organization. One big challenge for hospitals looking to improve their
        quality processes is having enough smart staff like doctors and nurses
        who can make the changes happen. We assist our clients by bringing in
        the right experts to help with patient care, allowing the hospital to
        focus on giving health care while we work on training and supporting
        their staff. This way, we train doctors, nurses, and other staff to
        handle things on their own, needing less help from us.
      </p>
      {/* <Blog /> */}
    </div>
  );
};

export default HospitalQuality;
