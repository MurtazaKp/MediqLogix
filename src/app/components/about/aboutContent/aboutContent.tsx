import React from "react";

const AboutContent = () => {
  return (
    <div className="flex flex-col gap-5 capitalize text-[14.5px] ">
      <p>
        <span className="font-bold capitalize text-[14.5px]">MediQlogix </span>
        is a digital solution company providing AI and ML-powered platform to
        hospitals and healthcare organizations’ needs to enhance their “Global
        Quality Matrix”. The platform is based on Saas (Software As A Service)
        or Internal Single Install Systems. The company’s foundation is “to
        improve healthcare deliveries by reducing quality and safety issues,
        re-admits and enhance the management structure of the healthcare
        organization”.MediQlogix focuses on the following values:
      </p>
      <div>
        <p className="font-bold mb-5">Quality and Safety</p>
        <p className="mb-5">
          At MediQlogix, we believe that information and AI-enabled data tools
          are essential to raising organizational standards for excellence in
          quality and safety. We believe that a healthcare organization will
          distinguish itself as a top healthcare organization if it is willing
          to invest in AI-enabled information technologies and collaborate with
          doctors to create procedures and charts that enhance quality and
          safety standards.
        </p>
        <p>
          MediQlogix aspires to become your superior partner and strengthen your
          capacity to serve the patient population.
        </p>
      </div>{" "}
      <div className="">
        <p className="font-bold ">Financial Benefit</p>
        <p className="mb-5">
          The team at MediQlogix feels that clinical quality and patient safety
          management are critical to a hospital’s ability to succeed
          financially. A hospital can decrease daily procedure costs, boost
          profitability by decreasing the length of stay (LOS), and lower
          re-admits by addressing clinical procedure errors before they arise.
        </p>
        <p>
          MediQlogix software utilizes evidence-based medicine concepts, guided
          by AI-enabled data analysis. It identifies missing quality data to
          take corrective action. The MediQM platform extends its reach beyond
          quality management to encompass financial performance, care
          management, and supply chain oversight, thereby enhancing the
          organization’s financial outcomes.
        </p>
      </div>
      <div>
        <p className="font-bold ">Technology</p>
        <p>
          In the future, the company will be focusing on mobile and
          communication technologies that will help the healthcare organizations
          to improve quality and safety of the patient population on the real
          time basis.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
