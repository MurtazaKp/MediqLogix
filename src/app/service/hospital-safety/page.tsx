import HospitalSafety from "@/app/components/service/hospitalSafety/hospitalSafety";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const HospitalSafetyPage = () => {
  const tabs = {
    heading: "Hospital Quality",
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
    <TabLayout {...tabs}>
      <HospitalSafety />
    </TabLayout>
  );
};

export default HospitalSafetyPage;
