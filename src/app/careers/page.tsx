import React from "react";
import Careers from "../components/career/career";
import TabLayout from "../components/tabLayout/tabLayout";

const CareersPage = () => {
  const tabs = {
    heading: "Careers",
    tabs: [
      { id: 1, label: "Partners", href: "/partners" },
      { id: 2, label: "Contact", href: "/contact" },
      { id: 2, label: "Careers", href: "/careers" },
    ],
  };
  return (
    <TabLayout {...tabs}>
      <Careers />
    </TabLayout>
  );
};

export default CareersPage;
