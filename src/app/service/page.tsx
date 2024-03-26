import React from "react";
import Services from "../components/service/service";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import TabLayout from "../components/tabLayout/tabLayout";
import ServiceContent from "../components/service/serviceContent/serviceContent";

const Service = () => {
  const tabs = {
    heading: "Service",
    tabs: [
      {
        id: 1,
        label: "Hospital Quality Consulting",
        href: "/service/hospital-quality",
      },
      {
        id: 2,
        label: "Quality Management Education & Training",
        href: "/service/quality-management",
      },
      {
        id: 3,
        label: "Hospital Safety Consulting",
        href: "/service/hospital-safety",
      },
    ],
  };
  return (
    <div>
      <TabLayout {...tabs}>
        <ServiceContent />
      </TabLayout>
    </div>
  );
};

export default Service;
