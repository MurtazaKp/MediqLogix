import MediQmPlatform from "@/app/components/software/mediQmPlatform/mediQmPlatform";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const MediQmPlatformPage = () => {
  const tabs = {
    heading: "Software Products",
    tabs: [
      { id: 1, label: "Cloud MediQM", href: "/software/cloudMediQM" },
      { id: 2, label: "MediQM Mobility", href: "/software/mediqmMobility" },
      { id: 3, label: "MediQM Platform", href: "/software/mediqmPlatform" },
      { id: 4, label: "MediQM Solution", href: "/software/mediqmSolution" },
    ],
  };
  return (
    <TabLayout {...tabs}>
      <MediQmPlatform />
    </TabLayout>
  );
};

export default MediQmPlatformPage;
