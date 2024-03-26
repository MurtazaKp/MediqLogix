import MediQmMobility from "@/app/components/software/mediQmMobility/mediQmMobility";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const MediqmMobilityPage = () => {
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
      <MediQmMobility />
    </TabLayout>
  );
};

export default MediqmMobilityPage;
