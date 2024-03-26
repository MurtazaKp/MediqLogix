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
        href: "/service/hospitalQuality",
      },
      {
        id: 2,
        label: "Quality Management Education & Training",
        href: "/service/qualityManagement",
      },
      {
        id: 3,
        label: "Hospital Safety Consulting",
        href: "/service/hospitalSafety",
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
