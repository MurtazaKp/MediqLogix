"use client";
import React, { useState } from "react";
import AboutContent from "./aboutContent/aboutContent";
import VisionMission from "./visionMission/visionMission";
import CorporateGovernance from "./corporateGovernance/corporateGovernance";
import CompanyProfile from "./companyProfile/companyProfile";
import MeetTeam from "../meetTeam/meetTeam";
import Blog from "../blog/blog";

const AboutUs = () => {
  const [activeLink, setActiveLink] = useState("About Us");

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  const tabs = [
    { id: 1, label: "Company Profile" },
    { id: 2, label: "Vision and Mission" },
    { id: 3, label: "Our Team" },
    { id: 4, label: "Corporate Governance" },
  ];

  return (
    <div className=" py-12 pb-[30px] bg-secondary-gray xl:min-h-[calc(100vh-424px)]">
      <div className=" mx-auto sm:px-6 lg:px-[139px] px-8 ">
        <div className="w-full pb-1 overflow-x-auto">
          <nav className="flex flex-col lg:flex-row justify-between items-stretch sm:items-center gap-4 py-1">
            <p className="text-[22.5px] leading-5 text-primary-blue font-bold">
              {activeLink}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 lg:gap-4">
              {tabs.map((link) => (
                <div className="relative w-full lg:w-auto" key={link.id}>
                  <button
                    className={`py-2 px-2 w-full HelveticaNeue-Regular sm:w-[170px] lg:w-auto  xl:w-[170px]  z-10 text-[14.5px]    rounded-full border border-black ${
                      activeLink === link.label ? "bg-black text-white " : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.label);
                    }}
                  >
                    {link.label}
                  </button>
                  {activeLink === link.label && (
                    <div className="w-4 absolute top-0 left-0 z-[50] h-4 rounded-full bg-primary-green"></div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div className=" pt-[30px] mx-auto  ">
          {activeLink === "About Us" && (
            <div>
              <AboutContent />
            </div>
          )}
          {activeLink === "Company Profile" && (
            <div>
              <CompanyProfile />
            </div>
          )}
          {activeLink === "Vision and Mission" && (
            <div>
              <VisionMission />
            </div>
          )}
          {activeLink === "Our Team" && (
            <div>
              <MeetTeam />
            </div>
          )}
          {activeLink === "Corporate Governance" && (
            <div>
              <CorporateGovernance />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
