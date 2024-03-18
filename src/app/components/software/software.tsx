"use client";
import React, { useState } from "react";
import Blog from "../blog/blog";
import SoftwareContent from "./softwareContent/softwareContent";
import CloudMediQm from "./cloudMediQm/cloudMediQm";
import MediQmMobility from "./mediQmMobility/mediQmMobility";
import MediQmPlatform from "./mediQmPlatform/mediQmPlatform";
import MediQmSolution from "./mediQmSolution/mediQmSolution";
import LatestWork from "../latestWork/latestWork";

const SoftwareProducts = () => {
  const [activeLink, setActiveLink] = useState("Software Products");

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  const tabs = [
    { id: 1, label: "Cloud MediQm" },
    { id: 2, label: "MediQm Mobility" },
    { id: 3, label: "MediQm Platform" },
    { id: 4, label: "MediQm Solution" },
  ];

  return (
    <div className="py-12 bg-secondary-gray min-h-[100vh]">
      <div className=" mx-auto sm:px-6 xl:px-32 px-8 ">
        <div className="w-full pb-1 overflow-x-auto">
          <nav className="flex flex-col lg:flex-row justify-between items-stretch sm:items-center gap-4 py-1">
            <p className="text-tertiary-heading text-primary-blue font-bold">
              {activeLink}
            </p>
            <div className="flex flex-col items-stretch sm:flex-row gap-3">
              {tabs.map((link) => (
                <div className="relative w-full flex" key={link.id}>
                  <button
                    className={`py-3 px-6 w-full  z-10  sm:px-3 lg:px-6 rounded-full border border-black ${
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
                    <div className="w-3 absolute -top-1 left-5 z-[100000] h-3 rounded-full bg-primary-green"></div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex gap-6">
          <div className="lg:w-9/12">
            <div className=" pt-6 mx-auto  ">
              {activeLink === "Software Products" && (
                <div>
                  <SoftwareContent />
                </div>
              )}
              {activeLink === "Cloud MediQm" && (
                <div>
                  <CloudMediQm />
                </div>
              )}
              {activeLink === "MediQm Mobility" && (
                <div>
                  <MediQmMobility />
                </div>
              )}
              {activeLink === "MediQm Platform" && (
                <div>
                  <MediQmPlatform />
                </div>
              )}
              {activeLink === "MediQm Solution" && (
                <div>
                  <MediQmSolution />
                </div>
              )}
            </div>
            <div>
              <Blog />
            </div>
          </div>
          <div className="hidden lg:block lg:w-3/12 p-2">
            <LatestWork />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareProducts;
