import CloudMediQm from "@/app/components/software/cloudMediQm/cloudMediQm";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const CloudMediQmPage = () => {
  const tabs = {
    heading: "Software Products",
    tabs: [
      { id: 1, label: "Cloud MediQM", href: "/software/cloud-mediqm" },
      { id: 2, label: "MediQM Mobility", href: "/software/mediqm-mobility" },
      { id: 3, label: "MediQM Platform", href: "/software/mediqm-platform" },
      { id: 4, label: "MediQM Solution", href: "/software/mediqm-solution" },
    ],
  };
  return (
    <div>
      <TabLayout {...tabs}>
        <CloudMediQm />
      </TabLayout>
    </div>
  );
};

export default CloudMediQmPage;
