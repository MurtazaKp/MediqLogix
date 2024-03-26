import Partners from "@/app/components/mediQm/partners/partners";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const PartnersPage = () => {
  const tabs = {
    heading: "Partners",
    tabs: [
      { id: 1, label: "Partners", href: "/mediQM/partners" },
      { id: 2, label: "Contact", href: "/mediQM/contact" },
    ],
  };
  return (
    <TabLayout {...tabs}>
      <Partners />
    </TabLayout>
  );
};

export default PartnersPage;
