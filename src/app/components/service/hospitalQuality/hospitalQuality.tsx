import Blog from "@/app/components/blog/blog";
import React from "react";

const HospitalQuality = () => {
  return (
    <div className="flex flex-col gap-8 capitalize text-[14.5px] leading-5">
      <div className="flex flex-col gap-4">
        <p className=" capitalize text-[14.5px]">
          Recently, there has been a thorough examination of the Patient Safety
          Goals. Specifically, the Joint Commission on Accreditation of
          Healthcare Organizations (JCAHO) has modified the National Patient
          Safety Goals (NPSG). Our AI-powered platform information integration
          feature will assist hospitals in ongoing enhancement and adherence to
          NPSGs as a component of the Standards Improvement Initiative (SII).
        </p>
        <p className=" capitalize text-[14.5px] leading-5">
          Our AI-enabled software and portal integration facilitates hospitals
          in adhering to the guidelines of the Centers for Medicare and Medicaid
          Services (CMS) and the requirements of JCAHO. One of the key
          initiatives of CMS is the Hospital Quality Initiative (HQI), aimed at
          enhancing patient care, offering quality information to consumers, and
          reducing healthcare delivery costs to boost profitability.
        </p>
        <p>
          Through our meticulously documented consulting approaches, we assist
          our partner hospitals in enhancing their Quality Metrics, ultimately
          leading to superior patient care during their hospital stay. While the
          standard consulting model is outlined below, we tailor our approach to
          meet the unique needs of each hospital or hospital system.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className=" text-primary-green font-bold"> Quality Consulting </p>
        <p>
          In order to manage healthcare delivery effectively, hospitals need to
          set quality goals using data from their IT systems. Tracking
          healthcare data is complicated but essential. Using various
          measurements helps hospitals understand their care quality better. Our
          methods focus on using detailed data for top-notch healthcare
          services.
        </p>
        <p>
          Our AI-enabled platform helps hospitals follow CMS and JCAHO
          guidelines. CMSs Hospital Quality Initiative aims to improve patient
          care, provide quality data to patients, and cut healthcare costs for
          better profits. We help hospitals improve their Quality Metrics
          through detailed consulting, leading to better patient care. Our
          consulting model can be tailored to fit each hospitals unique needs.
        </p>
      </div>
      {/* <Blog /> */}
    </div>
  );
};

export default HospitalQuality;
