import React from "react";

const AboutContent = () => {
  return (
    <div className="flex flex-col gap-5 mt-9">
      <p>
        <span className="font-bold">MediQlogix </span>is a healthcare software
        company developing SaaS database products for the hospital quality and
        safety management. The purpose of the MediQlogix database is to extract
        quality information from the existing hospital or group hospital IT
        systems to identify the missing information for the CMS suggested
        quality bundles (AMI, CHF, SCIP and PN) and indicators. MediQlogix
        software is available in SaaS business model and also as an internal LAN
        network based installation component to help the hospital staff to
        comply with CMS suggested protocols and procedures every time a patient
        flows through the system.{" "}
      </p>
      <p>
        Currently, there are over 5000 hospitals in North American which are in
        the process of implementing EMR Systems. Though EMR software can solve
        the immediate needs of the healthcare organizations by capturing the
        data related to patient population in terms of financial details,
        physician order entry and clinical information, it is still important to
        extract the data related to each patient and use the business
        intelligence (BI) techniques to improve performance of the organization.
      </p>{" "}
      <p>
        MediQlogix’s software products and custom development products can help
        your organization by identifying the missing information related to
        quality bundles to comply with US Govt(CMS) suggested reporting on each
        patient in a record time by partnering with your organization.
        MediQlogix offers an enterprise-ready platform with Microsoft SQL Server
        and Oracle server environment. Your healthcare organization can get
        insight into the clinical quality management data you will need through
        an integrated, centrally managed, and trusted database. MediQlogix SaaS
        DB can combine data from multiple sources into one location and provide
        access to information in a unified, trusted manner. MediQlogix also
        offers custom developed reports for JCO, NSQUIP and can also develop any
        non standard reports using software – Crystal Reports and SAS based
        reporting.
      </p>{" "}
      <p>
        In the future, the company will be focusing on mobile and communication
        technologies that will help the healthcare organizations to improve
        quality and safety of the patient population on the real time basis.
      </p>
    </div>
  );
};

export default AboutContent;
