"use client";
import React, { useState } from "react";
import ServiceContent from "./serviceContent/serviceContent";
import HospitalQuality from "./hospitalQuality/hospitalQuality";
import QualityManagement from "./qualityManagement/qualityManagement";
import LatestWork from "../latestWork/latestWork";
import HospitalSafety from "./hospitalSafety/hospitalSafety";

const Services = () => {
  const [activeLink, setActiveLink] = useState("Service");

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  const tabs = [
    { id: 1, label: "Hospital Quality Consulting" },
    { id: 2, label: "Quality Management Education and Training" },
    { id: 3, label: "Hospital Safety Consulting" },
  ];

  return (
    <div className="py-12 bg-secondary-gray min-h-[100vh]">
      <div className=" mx-auto sm:px-6 xl:px-32 px-8 ">
        <div className="w-full pb-1 overflow-x-auto">
          <nav className="flex flex-col lg:flex-row justify-between items-stretch sm:items-center gap-4 py-1">
            <p className="text-tertiary-heading lg:w-4/12 xl:w-3/12 text-primary-blue font-bold">
              {activeLink}
            </p>
            <div className="flex flex-col items-stretch sm:flex-row lg:w-8/12 gap-3">
              {tabs.map((link) => (
                <div
                  className="relative flex w-full items-stretch"
                  key={link.id}
                >
                  <button
                    className={`py-1 px-4 w-full   z-10   rounded-full border border-black ${
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
                    <div className="w-3 absolute -top-1 left-5 z-[40] h-3 rounded-full bg-primary-green"></div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex gap-6">
          <div className="lg:w-9/12">
            <div className=" pt-6 mx-auto  ">
              {activeLink === "Service" && (
                <div>
                  <ServiceContent />
                </div>
              )}
              {activeLink === "Hospital Quality Consulting" && (
                <div>
                  <HospitalQuality />
                </div>
              )}
              {activeLink === "Quality Management Education and Training" && (
                <div>
                  <QualityManagement />
                </div>
              )}
              {activeLink === "Hospital Safety Consulting" && (
                <div>
                  <HospitalSafety />
                </div>
              )}
            </div>
          </div>
          <div className="hidden border-s-2 ps-7 border-gray-300 mt-6 lg:block lg:w-3/12 p-2 pt-0">
            <LatestWork />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
