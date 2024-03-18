import Blog from "@/app/components/blog/blog";
import React from "react";

const HospitalQuality = () => {
  return (
    <div className="flex gap-6 flex-col">
      <p>
        For a profitable Health care system delivery management, it is important
        for a Hospital or Hospital Systems to develop quality metrics using
        information available within your non integrated or integrated IT
        systems. Collection of data for health care facilities is a challenging
        & continuously changing science. It is imperative to have several
        quality measurements to form the most complete picture of hospital’s
        total quality care. Our methodologies focus on Hospital’s ability to
        compile and retrieve such complex data so as to provide best possible
        health care.
      </p>
      <p>
        Our software and portal integration helps hospitals to comply with
        Center for Medicare and Medicaid services (CMS) guidelines and JCO
        requirements. One of the CMS initiatives is to improve Hospital Quality
        Initiative (HQI) whose goals are to improve the patient care provided by
        hospitals, to provide quality information to consumers and others. This
        not only reduces costs of healthcare delivery but improve overall
        profitability.
      </p>
      <p>
        Through our well documented consulting methodologies we help our partner
        hospitals to improve Quality Metrics which in turn provide best patient
        care while the patient is still in the hospital. Though the standard
        consulting model is shown below, we customize out approach to each
        individual hospital needs to hospital systems.
      </p>
      <h3 className="text-primary-green font-bold">Quality Coulsulting</h3>
      <p>
        Once your hospital decides to comply with the standards like CMS, joint
        commission guidelines we will help you with our proprietary software
        portal built with the help of decades of expertise of leading medical
        professionals whose anecdotal knowledge has gone in to designing the
        portal.
      </p>
      <p>
        Our focus includes different aspects of treatment for a heart attack,
        heart failure, pneumonia, or having surgery. Our support includes
        keeping your quality process up to date. CMS also announces new measures
        and retires existing measures. This is another important area for you to
        stay continuously tuned in to latest expectations and guidelines.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white my-10">
        <img className=" mt-6 " src="/images/flow.jpg" />
        <p className="mr-40 font-bold"> Recreate </p>
      </div>
      <div>
        <Blog />
      </div>
    </div>
  );
};

export default HospitalQuality;
