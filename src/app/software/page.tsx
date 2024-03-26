import React from "react";
import About from "../about/page";
import SoftwareProducts from "../components/software/software";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import SoftwareContent from "../components/software/softwareContent/softwareContent";
import TabLayout from "../components/tabLayout/tabLayout";

const Software = () => {
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
      <div className="">
        <TabLayout {...tabs}>
          <SoftwareContent />
        </TabLayout>
      </div>
    </div>
  );
};

export default Software;
