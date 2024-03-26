import HospitalQuality from "@/app/components/service/hospitalQuality/hospitalQuality";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const HospitalQualityPage = () => {
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
    <div>
      <TabLayout {...tabs}>
        <HospitalQuality />
      </TabLayout>
    </div>
  );
};

export default HospitalQualityPage;
