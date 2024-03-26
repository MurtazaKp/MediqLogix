"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TabLayout = ({ children, tabs, heading }: any) => {
  const pathname = usePathname();

  console.log(pathname, "pathname", tabs);

  //   const tabs = [
  //     { id: 1, label: "Company Profile", href: "/companyProfile" },
  //     { id: 2, label: "Vision and Mission", href: "/VisionMission" },
  //     { id: 3, label: "Our Team", href: "/OurTeam" },
  //     { id: 4, label: "Corporate Governance", href: "/corporateGovernance" },
  //   ];
  return (
    <div className=" py-12 pb-[30px] bg-secondary-gray xl:min-h-[calc(100vh-424px)]">
      <div className=" mx-auto sm:px-6 lg:px-[139px] px-8 ">
        <div className="w-full pb-1 overflow-x-auto">
          <nav className="flex flex-col lg:flex-row justify-between items-stretch sm:items-center gap-4 py-1">
            <p className="text-[22.5px] leading-5 text-primary-blue font-bold">
              {heading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 lg:gap-4">
              {tabs.map((link: any) => (
                <div className="relative w-full lg:w-auto" key={link.id}>
                  <Link
                    href={link.href}
                    className={`py-2 px-2 inline-block w-full HelveticaNeue-Regular sm:w-[170px] lg:w-auto  xl:w-[170px]  z-10 text-[14.5px] text-center   rounded-full border border-black ${
                      pathname === link.href ? "bg-black text-white " : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                  {pathname === link.href && (
                    <div className="w-4 absolute top-0 left-0 z-[50] h-4 rounded-full bg-primary-green"></div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div className=" pt-[30px] mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default TabLayout;
