import QualityManagement from "@/app/components/service/qualityManagement/qualityManagement";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const QualityManagementPage = () => {
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
      <QualityManagement />
    </TabLayout>
  );
};

export default QualityManagementPage;
